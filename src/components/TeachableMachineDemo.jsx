import { useEffect, useRef, useState } from 'react';
import { Camera, CameraOff, CircleAlert, LoaderCircle, ScanFace } from 'lucide-react';
import { isValidExternalUrl, TEACHABLE_MACHINE_MODEL_URL } from '../config/siteConfig.js';

function getMetadataUrl(modelUrl) {
  return modelUrl.endsWith('model.json') ? modelUrl.replace(/model\.json$/, 'metadata.json') : `${modelUrl.replace(/\/$/, '')}/metadata.json`;
}

export default function TeachableMachineDemo() {
  const [status, setStatus] = useState('idle');
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState('');
  const videoHost = useRef(null);
  const webcamRef = useRef(null);
  const frameRef = useRef(null);
  const modelConfigured = isValidExternalUrl(TEACHABLE_MACHINE_MODEL_URL);

  function stopCamera() {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    if (webcamRef.current) webcamRef.current.stop();
    webcamRef.current = null;
    videoHost.current?.replaceChildren();
    setStatus('idle');
  }

  async function startCamera() {
    setError('');
    setPrediction(null);
    setStatus('loading');
    try {
      const { Webcam, load } = await import('@teachablemachine/image');
      const modelUrl = TEACHABLE_MACHINE_MODEL_URL.trim();
      const model = await load(modelUrl, getMetadataUrl(modelUrl));
      const webcam = new Webcam(320, 240, true);
      webcamRef.current = webcam;
      await webcam.setup();
      await webcam.play();
      if (!videoHost.current) {
        webcam.stop();
        webcamRef.current = null;
        setStatus('idle');
        return;
      }
      videoHost.current.replaceChildren(webcam.canvas);
      setStatus('running');

      const predict = async () => {
        if (webcamRef.current !== webcam) return;
        try {
          webcam.update();
          const predictions = await model.predict(webcam.canvas);
          if (webcamRef.current !== webcam) return;
          predictions.sort((first, second) => second.probability - first.probability);
          setPrediction(predictions[0]);
          frameRef.current = requestAnimationFrame(predict);
        } catch (caught) {
          if (webcamRef.current !== webcam) return;
          stopCamera();
          setStatus('error');
          setError(`Prediction stopped: ${caught?.message || 'the model could not classify this frame.'}`);
        }
      };
      frameRef.current = requestAnimationFrame(predict);
    } catch (caught) {
      stopCamera();
      setStatus('error');
      setError(caught?.name === 'NotAllowedError'
        ? 'Camera access was denied. Allow camera access in your browser and try again.'
        : caught?.name === 'NotFoundError'
          ? 'No camera was found on this device.'
          : `The demo could not start: ${caught?.message || 'check the model URL and camera permissions.'}`);
    }
  }

  useEffect(() => () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    webcamRef.current?.stop();
  }, []);

  return (
    <div className="ai-panel">
      <div className="ai-copy"><span className="feature-kicker"><ScanFace size={15} /> TEACHABLE MACHINE DEMO</span><h3>Teach a camera<br />to <span className="serif-italic">recognise.</span></h3><p>Try a two-object image classifier built with Google’s Teachable Machine. Camera access starts only when you press the button.</p>
        {!modelConfigured ? <div className="setup-notice"><strong>Model not configured.</strong><p>Train a two-class image model at <a href="https://teachablemachine.withgoogle.com/" target="_blank" rel="noreferrer">Teachable Machine</a>, export it, host the model files, then set <code>TEACHABLE_MACHINE_MODEL_URL</code> in <code>src/config/siteConfig.js</code> to the hosted <code>model.json</code> URL.</p></div> : null}
        {error && <div className="form-error" role="alert"><CircleAlert size={16} />{error}</div>}
        {modelConfigured && status !== 'running' && <button className="button button-dark" type="button" onClick={startCamera} disabled={status === 'loading'}>{status === 'loading' ? <LoaderCircle className="spin" size={16} /> : <Camera size={16} />}{status === 'loading' ? 'Starting…' : 'Start camera'}</button>}
        {status === 'running' && <button className="button button-outline" type="button" onClick={stopCamera}><CameraOff size={16} /> Stop camera</button>}
      </div>
      <div className={`ai-viewfinder${status === 'running' ? ' is-live' : ''}`}>
        <div className="viewfinder-corners" />
        <div className="camera-preview" ref={videoHost}>{status === 'running' ? null : <div className="camera-idle">{status === 'loading' ? <LoaderCircle className="spin" size={31} /> : status === 'error' ? <CircleAlert size={31} /> : <Camera size={31} />}<span>{status === 'loading' ? 'Loading model and camera' : status === 'error' ? 'Camera unavailable' : 'Camera preview'}</span></div>}</div>
        {status === 'running' && <div className="prediction-chip"><span className="status-dot" /><span>{prediction?.className || 'Looking…'}</span><strong>{prediction ? `${Math.round(prediction.probability * 100)}%` : ''}</strong></div>}
        <span className="viewfinder-label">LIVE CLASSIFICATION</span>
      </div>
    </div>
  );
}