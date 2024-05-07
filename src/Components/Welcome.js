import React from "react";
import Logout from "/Logout";

const Welcome = () => {

   return (
      <div className="container">
        
         <h1>
            Welcome to the language quiz!
         </h1>
         <p>You answer 10 questions about Swedish vocabulary</p>
         <p>Choose the correct answer from 4 multiple choice</p>
         <button>Start Quiz</button>
         <Logout />
      </div>
   );
};

export default Welcome;