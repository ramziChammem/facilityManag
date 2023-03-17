import React from "react";
import "./carousel.css";
import img1 from "../../assets/comOne.png";
import img2 from "../../assets/comTwo.png";
import img3 from "../../assets/comThree.png";
import img4 from "../../assets/comFour.png";

function Carousel() {
  var counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 4000);
  let setCounter = function (e) {
    console.log(e.target.id);
    var arr = e.target.id.split("");
    const lastItem = arr[arr.length - 1];
    counter = parseInt(lastItem);
    document.getElementById("radio" + counter).checked = true;
  };
  return (
    <div className="carousel">
      <div className="slider">
        <div className="slides">
          <input
            type="radio"
            name="radio-btn"
            id="radio1"
            onClick={setCounter}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio2"
            onClick={setCounter}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio3"
            onClick={setCounter}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio4"
            onClick={setCounter}
          />

          <div className="slide first">
            <img src={img1} alt="comOne" />
          </div>
          <div className="slide">
            <img src={img2} alt="comTwo" />
          </div>
          <div className="slide">
            <img src={img3} alt="comThree" />
          </div>
          <div className="slide">
            <img src={img4} alt="comFour" />
          </div>

          <div className="navigationAuto">
            <div className="autoBtn1"></div>
            <div className="autoBtn2"></div>
            <div className="autoBtn3"></div>
            <div className="autoBtn4"></div>
          </div>
        </div>
        <div className="navigationManual">
          <label htmlFor="radio1" className="manualBtn"></label>
          <label htmlFor="radio2" className="manualBtn"></label>
          <label htmlFor="radio3" className="manualBtn"></label>
          <label htmlFor="radio4" className="manualBtn"></label>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
