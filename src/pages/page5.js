import React from "react";
import JJ from "../images/JJ.PNG";
import Gudetama from "../images/Gudetama.PNG";
import Shakipiyo from "../images/Shakipiyo.PNG";
import Keroppi from "../images/Keroppi.PNG";
import PhotoGallery from "../components/PhotoGallery";
import dog from "../images/MRSHIBA.PNG";
import squirtle from "../images/Squirtle.png";
import "./page5.css";

const images = [
  {
    url: JJ,
    caption: "Ready for any Pizza Party!",
  },
  { url: Shakipiyo, caption: "Perpetually angry >:(" },
  { url: Gudetama, caption: "No matter what I do nothing makes him happy :(" },

  { url: Keroppi, caption: "Big Eyes, Bigger Heart <3" },
  {
    url: squirtle,
    caption: "Squirtle might never evolve with how well he's treated",
  },

  { url: dog, caption: "Not sure why he's so angry when I made him so cute" },
];

const Page5 = () => {
  return (
    <div className="page-container5">
      <h1 className="page5Title">Just For Fun</h1>
      <div className="content-container">
        <div className="text-elementPage5">
          <p>
            In my free time I love creating things! Check out some of my
            creations on the right. I learned how to crochet while in quarantine
            and since then have been exploring other mediums like clay modeling.
            Let me know what I should make next!
          </p>
        </div>
        <div className="photo-gallery-container">
          <PhotoGallery images={images} />
        </div>
      </div>
    </div>
  );
};

export default Page5;
