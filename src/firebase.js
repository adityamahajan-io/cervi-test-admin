import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCYGEHXFsbiFSWTFa6nYUVoM13fwVT_8_Q",
    authDomain: "cervi-test-models.firebaseapp.com",
    projectId: "cervi-test-models",
    storageBucket: "cervi-test-models.appspot.com",
    messagingSenderId: "1063586652238",
    appId: "1:1063586652238:web:78d1d347c956e5fb04631f",
    measurementId: "G-251VGDM6Y8"
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
