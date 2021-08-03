import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // ถ้าจะเปลี่ยน firestore ของ firebase แก้ที่นี่
  apiKey: "GV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGieu6sM",
  authDomain: "vaccine-test1.firebaseapp.com",
  projectId: "vaccine-test1",
  storageBucket: "vaccine-test1.appspot.com",
  messagingSenderId: "419181829704",
  appId: "1:419181829704:web:92d8b3b59f56d3583c827d"
});

var db = firebaseApp.firestore();

export { db };
