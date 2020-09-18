# fcmServerClientCloudMessages
this is to apply the firebase cloud messaging from Nodejs as server and javascript as client 

Server key: Starts with AAAA (4As key or ) . the browser or the device that will get cloud message should know the source of the message
so the key will be used for that  ( Authorize the message that is sent from the FCM)


Voluntary application server identification VAPID: this key is used to authorize send request to those websites that support our push services
to subscribe our web app to push notifications we need to generate a new key pair 



client application 
    manifest.json (will include gcm_sender_id : 103953800507) <-- fixed value common to all FCM client
    firebase-messaging-sw.js(this file must have with your web app this is required to setup the background  notification handler  when the browser is not in focus)
    
