import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footcont">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2> More info </h2> <h2> Opening Times </h2> <br />
              <ul
                style={{
                  "font-size": "small",
                }}
              >
                <li> MONDAY - 9 am to 6 pm </li>{" "}
                <li> TUESDAY - 9 am to 6 pm </li>{" "}
                <li> WEDNESDAY - 9 am to 6 pm </li>{" "}
                <li> THURSDAY - 9 am to 6 pm </li>{" "}
                <li> FRIDAY - 9 am to 6 pm </li>{" "}
                <li> SATURDAY - 9 am to 12 pm </li> <li> SUNDAY - CLOSED </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3"> Links </h4>{" "}
              <ul className="m-0 p-0">
                <li>
                  <Link to="/about"> About Us </Link>{" "}
                </li>{" "}
                <li>
                  <Link to="/contact"> Contact Us </Link>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4"> Location </h4>{" "}
              <p> 1999, Somewhere Street, Magical Suburb </p>{" "}
              <p className="mb-0">
                <i className="fa fa-phone mr-3" />
                +61 3 999 9999{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row mt-5">
            <div
              className="col copyright"
              style={{
                "text-align": "center",
              }}
            >
              <p className="">
                <small className="text-white-50">
                  {" "}
                  © 2019. All Rights Reserved.{" "}
                </small>{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
