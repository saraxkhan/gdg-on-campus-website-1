# GDG on Campus BIET Companion Website

A responsive companion website for GDG on Campus Bansal Institute of Engineering & Technology, Lucknow. It preserves the original dark navy, Google-colour visual identity and code-editor hero while adding verified chapter history and interactive stall experiences.

## Why This Project Exists

This project was created as a technical-assessment and community companion experience for students discovering GDG on Campus BIET. It provides a quick introduction, verified links, learning activities, a team-interest path, a local technology quiz, and an optional Teachable Machine demonstration.

## Relationship to the Official Chapter

The official GDG community page is the source of truth for chapter membership, current event status, event history, and organizers:

<https://gdg.community.dev/gdg-on-campus-bansal-institute-of-engineering-technology-lucknow-india/>

The website complements that page and does not recreate its membership system. **Joining the official GDG community** always links to the official chapter page. **Applying for a BIET working team** is a separate expression of interest through a configurable Google Form. No applications are collected by this static website.

The chapter information and event listings were checked against the official page on 6 November 2026. Verify them there before publishing future updates.

## Features

- Responsive landing page retaining the existing hero, colors, typography, and code illustration.
- Official chapter links and verified organizer profile links.
- Official past events, each labeled as a past event, plus an explicit no-upcoming-events message.
- Configurable Google Form link, optional embedded form, and QR code that appears only for a configured real URL.
- Ten-question local technology quiz with progress, feedback, score, and restart.
- Optional webcam image-classification demo using Teachable Machine. It does not request camera access until the user starts it.
- Official chapter social links only when configured with verified URLs.

## Technology Stack

- React 19
- Vite
- JavaScript, HTML, and CSS
- Lucide React icons
- `qrcode.react` for the recruitment QR code
- `@teachablemachine/image` for the optional, lazy-loaded image model

## Folder Structure

```text
src/
  components/
    RecruitmentQr.jsx
    TeachableMachineDemo.jsx
    TechQuiz.jsx
  config/
    siteConfig.js
  data/
    chapterData.js
    quizQuestions.js
  App.jsx
  main.jsx
  styles.css
index.html
```

## Installation

Use Node.js 20.19+ or 22.12+ (required by the installed Vite release), then run:

```bash
npm install
```

## Development Commands

```bash
npm run dev
npm run build
npm run preview
```

`npm run build` creates the production site in `dist/`. `npm run preview` serves that build locally.

## Google Form Configuration

Create the BIET team interest Google Form with these fields:

- Full Name
- Email Address
- Branch
- Academic Year
- Preferred Team
- Technical Skills / Interests
- Short Introduction

Then edit `src/config/siteConfig.js`:

```js
export const RECRUITMENT_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform';
export const RECRUITMENT_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true';
```

Use the real URLs from the form's Send/share interface. Leave either value as an empty string until it exists. The Apply button remains disabled and the QR area displays a setup note while the form URL is unset. The site never simulates submissions or displays a false success state. Set the embed URL to an empty string to omit the inline form.

This recruitment form is for **expressing interest in a college working team only**. Official GDG membership must be joined on the official GDG community page.

## QR Code

`RecruitmentQr.jsx` uses `qrcode.react` to render a QR code from `RECRUITMENT_FORM_URL`. It also provides PNG download, copy-link, and open-link controls. It renders no QR for empty, invalid, or example.com URLs, preventing a misleading code before the real form is configured.

## Technology Quiz

Question and answer data lives in `src/data/quizQuestions.js`. `TechQuiz.jsx` tracks the selected answer, progress, score, completion, and restart locally in React state. It uses no API or network service.

## Teachable Machine Integration

Train an image model with two everyday-object classes at <https://teachablemachine.withgoogle.com/>. Export the TensorFlow.js model, host the exported files at a public HTTPS URL, then set `TEACHABLE_MACHINE_MODEL_URL` in `src/config/siteConfig.js` to the hosted `model.json` URL. The corresponding `metadata.json` should be alongside it.

Until configured, the page shows setup instructions and does not expose a camera start action. After configuration, the image library is dynamically imported, the user explicitly starts the camera, and stopping or unmounting the demo stops the webcam stream. Camera permission failures and prediction/model errors are surfaced in the UI. Camera access requires a secure context such as HTTPS or localhost.

## Event Data Management

Verified past event titles, dates, and official listing URLs are centralized in `src/data/chapterData.js`. Only update these records after checking the official chapter page. General activity cards describe kinds of learning activities and are explicitly not presented as completed BIET events. The current upcoming-events empty state should also be checked against the official page when maintaining the site.

Organizer names and profile URLs are in the same data file and were taken from the official page. The site intentionally avoids permanent membership counts and fabricated organizer photos.

## Social Links

`SOCIAL_LINKS` in `src/config/siteConfig.js` contains only the chapter LinkedIn and Discord URLs listed on the official page. Add a link only after verifying that it is an actual chapter account. The Instagram URL exposed by the page was malformed when inspected, so it is intentionally omitted.

## Vercel Deployment

1. Push the updated branch to the GitHub repository connected to Vercel.
2. In Vercel, import or open the project and confirm the framework preset is **Vite**.
3. Keep the build command as `npm run build` and output directory as `dist`.
4. Deploy. Vite's static output needs no backend or server environment variables.
5. After setting a real recruitment form or model URL in `src/config/siteConfig.js`, commit and redeploy. Verify QR scanning and the model URL on the deployed HTTPS origin.

## Testing Instructions

Run the production build with `npm run build`, then use `npm run dev` or `npm run preview` for a browser smoke test. Check desktop and mobile layouts, all in-page navigation, official links opening in a new tab, the mobile menu, each quiz answer/score/restart path, and the empty recruitment QR state. Once configured, verify the QR resolves to the exact Google Form URL, copy/download controls work, and the optional embed opens. For the AI demo, verify the unconfigured setup state first; with a valid model, test camera permission denial, start, prediction, stop, and browser console output.

There is currently no automated unit-test runner configured. The quiz data is local and can be manually exercised entirely offline.

## Known Limitations

- A real BIET recruitment Google Form URL has not been supplied; the recruitment button and QR remain in setup state.
- A trained and hosted Teachable Machine model URL has not been supplied; camera classification remains intentionally unavailable.
- Events and organizer information are maintained from the official page and are not fetched live.
- The optional TensorFlow/Teachable Machine dependency creates a large lazy-loaded chunk; it is not loaded until the demo is started.
- No backend, application storage, or form submission processing is included.

## Future Improvements

- Add automated component tests for quiz scoring, QR configuration states, and navigation.
- Add a lightweight content update checklist for official event and organizer changes.
- Configure the actual recruitment form and a trained, hosted two-class model when available.
- Consider loading official event data from a supported public feed if one becomes available.