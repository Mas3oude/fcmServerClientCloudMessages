var admin = require("firebase-admin");

var serviceAccount = require("./mvpConnectionTest-4b0623caa35b.json");

try{
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mvpconnectiontest.firebaseio.com"
});
console.log(admin.SDK_VERSION);
console.log(`Connection with server is working fine `);
}   

catch(excep)
{
    console.error(excep);
}