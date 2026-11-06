import { useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Check, Copy, Download, ExternalLink, QrCode } from 'lucide-react';
import { isValidExternalUrl, RECRUITMENT_FORM_URL } from '../config/siteConfig.js';

export default function RecruitmentQr() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState('');
  const canvasRef = useRef(null);
  const configured = isValidExternalUrl(RECRUITMENT_FORM_URL);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(RECRUITMENT_FORM_URL);
      setCopied(true);
      setCopyError('');
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopyError('Copy was blocked by the browser. Open the form link instead.');
    }
  }

  function downloadQr() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const downloadLink = document.createElement('a');
    downloadLink.download = 'gdg-biet-team-recruitment-qr.png';
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.click();
  }

  return (
    <div className="qr-panel">
      <div className="qr-copy">
        <span className="feature-kicker"><QrCode size={15} /> TEAM RECRUITMENT</span>
        <h3>Scan. Register.<br /><span className="serif-italic">Get involved.</span></h3>
        {configured ? (
          <>
            <p>Scan this code to open the BIET team interest form. Official GDG membership is handled separately on the GDG community page.</p>
            <div className="qr-actions">
              <button className="button button-dark" type="button" onClick={downloadQr}><Download size={15} /> Download QR</button>
              <button className="button button-outline" type="button" onClick={copyLink}>{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? 'Copied' : 'Copy link'}</button>
            </div>
            <a className="fallback-link" href={RECRUITMENT_FORM_URL} target="_blank" rel="noreferrer">Open recruitment form <ExternalLink size={13} /></a>
            {copyError && <p className="form-error" role="status">{copyError}</p>}
          </>
        ) : (
          <div className="setup-notice"><strong>Recruitment form not configured yet.</strong><p>Add the real Google Form URL to <code>src/config/siteConfig.js</code>. A QR code will appear here once a valid URL is set.</p></div>
        )}
      </div>
      <div className={`qr-frame${configured ? '' : ' qr-frame-empty'}`} aria-label={configured ? 'QR code for team recruitment form' : 'QR code unavailable until recruitment form URL is configured'}>
        {configured ? <QRCodeCanvas ref={canvasRef} value={RECRUITMENT_FORM_URL} size={188} level="H" includeMargin /> : <div className="qr-empty"><QrCode size={47} /><span>QR READY<br />WHEN URL IS SET</span></div>}
      </div>
    </div>
  );
}