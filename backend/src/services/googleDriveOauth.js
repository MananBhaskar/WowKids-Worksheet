const { google } = require('googleapis');

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
  console.warn('Google OAuth2 not fully configured. Check CLIENT_ID, CLIENT_SECRET, GOOGLE_REFRESH_TOKEN in .env');
}

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// The library will automatically use the refresh token to get access tokens
const drive = google.drive({ version: 'v3', auth: oauth2Client });

module.exports = { drive, oauth2Client };
