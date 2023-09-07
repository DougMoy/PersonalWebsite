import React from "react";
import PID from "../images/EmbeddedSystemsProject.mp4";
import PokerCalculator from "../images/PokerCalculator.mp4";
import ProjectRight from "../components/projectRightContainer";
import ProjectLeft from "../components/projectLeftContainer";
import MovieMatch from "../images/MovieMatch.png";
import PokerNow from "../images/PokerNowAnalyzerVideo.mp4";
import "./page3.css";
const Page3 = () => {
  return (
    <div className="page-container3">
      <h1 className="page3Title">Projects</h1>
      <ProjectRight
        video={PokerNow}
        title="Poker Now Analyzer and Chatbot"
        description="I created a Python program for parsing PokerNow game logs, gathering and presenting crucial gameplay statistics for each individual player. PokerNow is a very popular website to host poker games. I originally created this application to gain an edge in the games that I played as knowing statistics for each individual allowed for exploitative strategies to be made. I have expanded this project by training a LLM to answer poker related questions and generate strategies when playing against each player. The interface for this application was made using Flask and the model was trained using the LangChain library. 
        "
      />

      <ProjectLeft
        video={PID}
        title="PID CONTROL "
        description="I designed and implemented a dynamic ball stabilization system using a PID controller, allowing precise positioning of the ball on a tiltable platform regardless of its initial location or velocity. The system utilizes OpenCV for ball tracking, a microcontroller programmed in C to control servomotors for platform movement, and UART communication to seamlessly integrate ball position data between the Python program and the microcontroller. As demonstrated by the video on the left, no matter the initial force applied to the ball or its starting position, the system consistently guides it to gravitate and come to rest at the center of the platform. This was made for my Embedded Systems final project."
      />
      <ProjectRight
        video={PokerCalculator}
        title="Poker Probability Calculator"
        description="I developed a probability calculator in Java for three poker variations: No Limit Hold'em, Short Deck and Pot Limit Omaha. In this project, I utilized Java Swing GUI and implemented my own algorithms for calculating probabilities at different parts of the game tree. On the right is a demonstration of the application. I made this application to help me learn different poker variations as there was no online application that had probabilites for all three games"
      />
      <ProjectLeft
        video={MovieMatch}
        title="MovieMatch"
        description="MovieMatch is a web application that allows users to find movies suitable to their preferences. Users can input movie preferences like genre, movie length and rating and suitable movies will be returned to them. In addition, they can input what streaming services in tandem with their preferences so they can find movies accessible to them. Lastly, users can make accounts for this web application so that when they log in, they can find their preferences saved and view their saved movies. This application was made using React, Flask and Firebase. "
      />
    </div>
  );
};

export default Page3;
