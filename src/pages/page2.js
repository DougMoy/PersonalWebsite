/* eslint-disable no-unused-vars */
import React from "react";
import "./page2.css";
import SelfiePicture from "../images/SelfiePicture.jpg";

const Page2 = () => {
  return (
    <div className="page-container2">
      <div className="content-container">
        <div className="bio-container">
          <h1 className="title">About Me</h1>
          <p className="bio-text">
            I&apos;m Douglas Moy, a senior at Boston University studying
            computer science, set to graduate in May 2024. Simultaneously,
            I&apos;m pursuing a Master&apos;s in Artificial Intelligence while
            completing my Bachelor&apos;s degree in Computer Science. My passion
            centers around creating, learning, and competing. Beyond academics,
            I enjoy staying active, playing poker, honing my crocheting skills
            (scroll down for the cutest pictures you will ever see), and, of
            course, coding. The world of computer science fascinates me because
            it allows me to harness technology and mathematical concepts to
            tackle real-world problems. Currently, I&apos;m actively seeking
            full-time roles in Software Engineering and Machine Learning.
            I&apos;m always open to collaboration, eager to learn, and up for
            engaging conversations. Feel free to connect with me via email at
            dougmoy@bu.edu or reach out on my LinkedIn profile, linked at the
            bottom of this website!
          </p>
        </div>
        <div className="image-containerPage2">
          <img src={SelfiePicture} alt="Your Image" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Page2;
