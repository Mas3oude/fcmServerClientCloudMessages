'use strict';

firebase.messaging().usePublicVapidKey('BCwYw68OVMIVdkMqnajp0D2na3FkOa31RrsrstO9OmGGVTmxyn5abvkHVh90Ldu_Zm61-DM5hG3vaNEU2cDQnLI');

function saveMessagingDeviceToken() {
	firebase.messaging().getToken().then(function(currentToken) {

		if (currentToken) {
			console.log('Got FCM device token:', currentToken);
			firebase.database().ref('/tokens/').push({
        	token: currentToken
        });

		}else {
      		requestNotificationsPermissions();
    	}
    }).catch(function(error){
    console.error('Unable to get messaging token.', error);
  });
}

function requestNotificationsPermissions() {

	console.log('Requesting notifications permission...');

	firebase.messaging().requestPermission().then(function() {
		saveMessagingDeviceToken();
	}).catch(function(error) {
    console.error('Unable to get permission to notify.', error);
  });

}

saveMessagingDeviceToken();