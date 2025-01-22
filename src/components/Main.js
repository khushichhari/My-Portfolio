// import React from "react";
// import "./styles/Main.css";
// import { Instagram, Twitter, Facebook, LinkedIn } from "@mui/icons-material";
// import Profile from "./assets/Profile.jpg";

// const Main = () => {
//   return (
//     <div className="main">
//       <div className="main-container">
//         <div className="Mmain-content">
//           <div className="text">
//             <p>Hello Everyone !</p>
//             <h1>I am Khushi</h1>
//             <p>Full-Stack Developer</p>

//             <div className="icons">
//               <Twitter className="icon" />
//               <Facebook className="icon" />
//               <Instagram className="icon" />
//               <LinkedIn className="icon" />
//             </div>

//             <div className="buttons">
//               <button>Know more</button>
//               <button>Hire Me</button>
//             </div>
//           </div>
//         </div>

//         <div className="main-img">
//           <img src={Profile} alt="Profile" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

// new

import React from "react";
import { Typewriter } from "react-simple-typewriter"; // Import the Typewriter
import "./styles/Main.css";
import { Instagram, Twitter, Facebook, LinkedIn } from "@mui/icons-material";
import Profile from "./assets/Profile.jpg";
import About from "./About.js";
import Portfolio from './Portfolio.js';

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main-container">
          <div className="Mmain-content">
            <div className="text">
              <p>Hello Everyone !</p>
              <h1>
                I am{" "}
                <span className="typewriter">
                  <Typewriter
                    words={[
                      "Khushi Chhari.",
                      "a Full-Stack Developer.",
                      "a Problem Solver.",
                    ]}
                    loop={true} // Makes the typewriter loop through the words
                    cursor
                    cursorStyle="|"
                    typeSpeed={80} // Typing speed in ms
                    deleteSpeed={50} // Deleting speed in ms
                    delaySpeed={1500} // Delay before starting the next word
                  />
                </span>
              </h1>
              <p>Full-Stack Developer...</p>

              <div className="icons">
                <Twitter className="icon" />
                <Facebook className="icon" />
                <Instagram className="icon" />
                <LinkedIn className="icon" />
              </div>

              <div className="buttons">
                <button>Know more</button>
                <button>Hire Me</button>
              </div>
            </div>
          </div>

          <div className="main-img">
            <img src={Profile} alt="Profile" />
          </div>
        </div>
      </div>

      <br />

      <About/>

      <br/>
      <Portfolio/>

    </>
  );
};

export default Main;
