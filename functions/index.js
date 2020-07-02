const functions = require('firebase-functions');
const admin=require("firebase-admin")

var serviceAccount = require("./io1600readingdiagnostic-firebase-adminsdk-hkego-f1ed01f63e.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://io1600readingdiagnostic.firebaseio.com"
});

const options = {
    timeoutSeconds: 540,
    memory: "2GB"
};

exports.getTree=functions.runWith(options).https.onCall((data,context) => {
    return admin.database().ref().once("value").then(snapshot => {
        if(context.rawRequest.headers.origin==="https://1600.io")
            return snapshot.val();
        else throw new functions.https.HttpsError("permission-denied","The function was not called from an authenticated origin.");
    }).catch(error =>  {
        console.log(error);
    });
})
