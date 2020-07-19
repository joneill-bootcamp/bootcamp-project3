import React, { Component } from "react";
import "./about.css";

export default class About extends Component {
  componentDidMount() {
    console.log("[DEBUG] mounting about component");
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="mainDiv">
        <div className="firstDiv row section">
          <h1 className="col-lg-12 title"> ABOUT US </h1>{" "}
        </div>{" "}
        <div className="secDiv section">
          <div className="row">
            <h3> Our little story </h3>{" "}
          </div>{" "}
          <div className="row">
            <div className="col-lg-6">
              <p>
                The West Highland white terrier, commonly called a Westie, is a
                small, energetic dog with a lively and lovable personality.The
                breed dates back to more than a century, and the American Kennel
                Club recognized it in the U.S.in 1908. The Westie is very loyal
                and smart but also possesses an independent spirit.Though quite
                compact, the Westie is not dainty or overly muscular.The Westie
                's upbeat and lovable personality makes it a wonderful
                companion.Both active and cuddly, the Westie is versatile and
                adaptable, making the breed a great fit in most households.With
                appropriate training and socialization, Westies get along well
                with children and fit in with all types of households.In
                addition, this small dog breed is typically suitable for
                apartment living.{" "}
              </p>{" "}
            </div>{" "}
            <div className="col-lg-6">
              <div className="row">
                <div class="column"> </div> <div class="column"></div>{" "}
                <div class="column"> </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
