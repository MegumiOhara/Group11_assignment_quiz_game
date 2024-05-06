import React from "react";
import "./index.css";
/* import Login from "Login"*/
/* import Butoon from "Button"*/

const Welcome = () => {
   return (
      <div className="container">
         <h1 /* test style={{color: "white", background: "blue", padding: "10px"}}*/>
            Welcome name /* name will connect to username */ to the language quiz!
         </h1>
         <p>You answer 10 questions about Swedish vocabulary</p>
         <p>Choose the correct answer from 4 multiple choice</p>
         <button /*test style={{color: "white", background: "red", padding: "20px"}} */> START</button>
      </div>
   );
};

export default Welcome;

/* steps tip from Helena to Ayako */
/*1. create the UI that means just way it supposed to look so css (styling) and no data. hard code data like name etc*/
/*2. wait for the login to be finished you cant grab the name without login working */
/*3. wait for the game page to be done and make sure you have routing set up so that you can create a link to that page*/
