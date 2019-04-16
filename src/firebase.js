import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDDKXUOTse7_9UG7W_qABVCn2BOhhAgMkQ",
    authDomain: "nba-full-51a5a.firebaseapp.com",
    databaseURL: "https://nba-full-51a5a.firebaseio.com",
    projectId: "nba-full-51a5a",
    storageBucket: "nba-full-51a5a.appspot.com",
    messagingSenderId: "653646585066"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
      data.push({
        ...childSnapshot.val(),
        id:childSnapshot.key
      })
    });
    return data;
  }

  export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
  }
