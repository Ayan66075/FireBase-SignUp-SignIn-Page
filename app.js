  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"
  const firebaseConfig = {

    apiKey: "AIzaSyDKDsepobBbCSZInvqOiEf9sZJxdo1TJMw",

    authDomain: "sign-up-page-548d6.firebaseapp.com",

    projectId: "sign-up-page-548d6",

    storageBucket: "sign-up-page-548d6.firebasestorage.app",

    messagingSenderId: "277414591664",

    appId: "1:277414591664:web:a2e33c1a6bcfba8d540f75",

    measurementId: "G-69HD7WFTJH"

  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  let getBtn = document.getElementById("btn");
  getBtn.addEventListener("click", function () {
      let  email = document.getElementById("semail").value;
      let  password = document.getElementById("spass").value;

      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Registration Successfully");
    window.location.href = "login.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
  })

