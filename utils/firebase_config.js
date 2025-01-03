const admin = require('firebase-admin');
const path = require('path');

// Check if Firebase Admin is already initialized
if (!admin.apps.length) {
    const serviceAccount = require('./boondmart-fe500-firebase-adminsdk-j87m0-3dd31854ad.json');
    
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: 'boondmart-fe500'
    });
}

module.exports = admin;