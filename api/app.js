const { google } = require("googleapis");
const path = require("path");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;
const refreshToken = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  refreshToken
);

oauth2Client.setCredentials({
  refresh_token: refreshToken });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client
});

const filePath = path.join(__dirname, "resume.pdf")

const fileId = "1Ys0rk0qMvh75nrWa5E6RGtLhorU2P2nh";

// Upload 
async function uploadFile() {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: "JoseCruz_resume.pdf", 
        mimeType: "application/pdf",
      },
      media: {
        mimeType: "application/pdf",
        body: fs.createReadStream(filePath),
      },
    });

    console.log(response.data);
  } catch (err) {
    console.log(err.message);
  }
}

// uploadFile();

// Generate View and Export Urls
async function generatePublicUrl () {
  try {
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    const resume = await drive.files.get({
      fileId: fileId,
      fields: "name, webContentLink",
    });
    console.log(resume.data)
    return resume.data
  } catch (err) {
    console.log(err.message);
  }
}

generatePublicUrl()
module.exports = generatePublicUrl;