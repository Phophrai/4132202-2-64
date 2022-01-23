import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyDZY9DKLWH_LqHDrWkxQlxGh7DKKk7q9yo",
  authDomain: "react-sce01-016.firebaseapp.com",
  projectId: "react-sce01-016",
  storageBucket: "react-sce01-016.appspot.com",
  messagingSenderId: "702568137088",
  appId: "1:702568137088:web:89f5003c197883655f0165"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BCY9OO5nU1jldX3RV20D6y_PR9nG_JGOA-H5V9n-1VgBU06H1JmnRNP-dGR7XK3IOMVzJgVtfyZxApF739mh7hg"
);

export { messaging };
