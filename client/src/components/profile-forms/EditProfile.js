import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    company: "",
    address: "",
    location: "",
    zip: "",
    status: "",
    skills: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      address: loading || !profile.address ? "" : profile.address,
      location: loading || !profile.location ? "" : profile.location,
      zip: loading || !profile.zip ? "" : profile.zip,

      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
      instagram: loading || !profile.social ? "" : profile.social.instagram,
    });
  }, [loading, getCurrentProfile]);

  const {
    company,
    address,
    location,
    zip,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <div className="container">
      <Fragment>
        <h1 className="large text-primary"> Edit Your Profile </h1>{" "}
        <p className="lead">
          <i className="fas fa-user" /> Let 's get some information to make your
          profile stand out{" "}
        </p>{" "}
        <small> * = required field </small>{" "}
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <select name="status" value={status} onChange={(e) => onChange(e)}>
              <option value="0">
                {" "}
                * Select your level of Doggy Experience!{" "}
              </option>{" "}
              <option value="Pro!">
                {" "}
                I 've owned many dog breeds over the years{" "}
              </option>{" "}
              <option value="Intermediate">
                I 've owned at least one or two dogs throughout their life{" "}
              </option>{" "}
              <option value="Beginner"> Have my first dog! </option>{" "}
              <option value="Noob"> None!I need a doggy </option>{" "}
            </select>{" "}
            <small className="form-text"> Give us your personal info! </small>{" "}
          </div>{" "}
          <div className="form-group">
            <input
              type="text"
              placeholder="Title"
              name="company"
              value={company}
              onChange={(e) => onChange(e)}
            />{" "}
            <small className="form-text"> Title: Mr, Mrs, Ms, etc </small>{" "}
          </div>{" "}
          <div className="form-group">
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={(e) => onChange(e)}
            />{" "}
            <small className="form-text"> Mailing Address </small>{" "}
          </div>{" "}
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={(e) => onChange(e)}
            />{" "}
            <small className="form-text">
              City & state suggested(eg.Victoria, Australia){" "}
            </small>{" "}
          </div>{" "}
          <div className="form-group">
            <input
              type="text"
              placeholder="Zip"
              name="zip"
              value={zip}
              onChange={(e) => onChange(e)}
            />{" "}
            <small className="form-text"> POST Code </small>{" "}
          </div>{" "}
          <div className="form-group">
            <input
              type="text"
              placeholder="* Skills"
              name="skills"
              value={skills}
              onChange={(e) => onChange(e)}
            />{" "}
            <small className="form-text">
              Please use comma separated values(eg.Pet Breeder, Pet Owner, etc){" "}
            </small>{" "}
          </div>{" "}
          <div className="form-group">
            <textarea
              placeholder="A short bio of yourself"
              name="bio"
              value={bio}
              onChange={(e) => onChange(e)}
            />{" "}
            <small className="form-text">
              {" "}
              Tell us a little about yourself{" "}
            </small>{" "}
          </div>{" "}
          <div className="my-2">
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type="button"
              className="btn btn-light"
            >
              Add Social Network Links{" "}
            </button>{" "}
            <span> Optional </span>{" "}
          </div>{" "}
          {displaySocialInputs && (
            <Fragment>
              <div className="form-group social-input">
                <i className="fab fa-twitter fa-2x" />
                <input
                  type="text"
                  placeholder="Twitter URL"
                  name="twitter"
                  value={twitter}
                  onChange={(e) => onChange(e)}
                />{" "}
              </div>{" "}
              <div className="form-group social-input">
                <i className="fab fa-facebook fa-2x" />
                <input
                  type="text"
                  placeholder="Facebook URL"
                  name="facebook"
                  value={facebook}
                  onChange={(e) => onChange(e)}
                />{" "}
              </div>{" "}
              <div className="form-group social-input">
                <i className="fab fa-youtube fa-2x" />
                <input
                  type="text"
                  placeholder="YouTube URL"
                  name="youtube"
                  value={youtube}
                  onChange={(e) => onChange(e)}
                />{" "}
              </div>{" "}
              <div className="form-group social-input">
                <i className="fab fa-linkedin fa-2x" />
                <input
                  type="text"
                  placeholder="Linkedin URL"
                  name="linkedin"
                  value={linkedin}
                  onChange={(e) => onChange(e)}
                />{" "}
              </div>{" "}
              <div className="form-group social-input">
                <i className="fab fa-instagram fa-2x" />
                <input
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                  value={instagram}
                  onChange={(e) => onChange(e)}
                />{" "}
              </div>{" "}
            </Fragment>
          )}{" "}
          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back{" "}
          </Link>{" "}
        </form>{" "}
      </Fragment>{" "}
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  createProfile,
  getCurrentProfile,
})(withRouter(EditProfile));
