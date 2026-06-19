import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Signup
window.signup = function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {

            alert("Signup Successful!");

            window.location.href = "login.html";

        })
        .catch((error) => {

            alert(error.message);

        });

};

// Login
window.login = function () {

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {

            localStorage.setItem("isLoggedIn", "true");

            window.location.href = "../index.html";

        })
        .catch((error) => {

            alert(error.message);

        });

};

// Logout
window.logout = function () {

    signOut(auth)
        .then(() => {

            localStorage.removeItem("isLoggedIn");

            window.location.href = "pages/login.html";

        })
        .catch((error) => {

            console.log(error);

        });

};