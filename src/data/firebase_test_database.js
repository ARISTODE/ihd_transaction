import Firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBVoknaBG0SOdZocOtZ9l0rJNFJ7bAOppU",
    authDomain: "ihdtransaction-test-database.firebaseapp.com",
    databaseURL: "https://ihdtransaction-test-database.firebaseio.com",
    projectId: "ihdtransaction-test-database",
    storageBucket: "ihdtransaction-test-database.appspot.com",
    messagingSenderId: "1071628129898"
  };

  const firebaseApp = Firebase.initializeApp(config);
  export const db = firebaseApp.database();
  export const auth = firebaseApp.auth();
