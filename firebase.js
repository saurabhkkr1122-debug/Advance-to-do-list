import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCwzxC4IOzHsXsL0PnGTeeDc60bgZR8vCc",
    authDomain: "advance-to-do-list-f59ee.firebaseapp.com",
    projectId: "advance-to-do-list-f59ee",
    storageBucket: "advance-to-do-list-f59ee.firebasestorage.app",
    messagingSenderId: "71715076068",
    appId: "1:71715076068:web:59db1a611b3214376df9f1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);