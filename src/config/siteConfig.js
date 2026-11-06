export const OFFICIAL_GDG_URL = 'https://gdg.community.dev/gdg-on-campus-bansal-institute-of-engineering-technology-lucknow-india/';

// Set these only after creating the real recruitment form and trained model.
export const RECRUITMENT_FORM_URL = '';
export const RECRUITMENT_FORM_EMBED_URL = '';
export const TEACHABLE_MACHINE_MODEL_URL = '';

// Chapter links verified from the official community page.
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/google-developer-groups-bansaliet/',
  discord: 'https://discord.gg/JvUFyhue',
};

export const GOOGLE_DEVELOPERS_COMMUNITY_URL = 'https://developers.google.com/community';

export function isValidExternalUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.hostname.endsWith('example.com') && url.hostname !== 'localhost';
  } catch {
    return false;
  }
}