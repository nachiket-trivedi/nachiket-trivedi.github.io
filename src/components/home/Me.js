import React, { useState, useEffect } from "react";
import axios from "axios";
import Pdf from "../../config/resume.pdf";
import userData from "../../config/userData";
import styles from "../../styles/Styles.module.css";

const Me = () => {
  let {
    aboutHeading,
    myDescription,
    showInstaProfilePic,
    instaLink,
    instaUsername,
    instaQuerry,
  } = userData;
  const [instaProfilePic, setInstaProfilePic] = useState("");
  const [showInsta, setShowInsta] = useState(showInstaProfilePic);
  const [resumeURL] = useState(Pdf);

  useEffect(() => {
    if (showInsta) {
      handleRequest();
    }
  }, [showInsta]);

  const handleRequest = (e) => {
    axios
      .get(instaLink + instaUsername + instaQuerry)
      .then((response) => {
        // handle success
        // console.log(response.data.graphql);
        return setInstaProfilePic(
          response.data.graphql.user.profile_pic_url_hd
        );
      })
      .catch((error) => {
        // handle error
        setShowInsta(false);
        return console.error(error.message);
      });
  };

  return (
    <div id="aboutme" className={styles.aboutBg}>
      <div className="container container-fluid p-5">
        <div className="row">
          {showInsta && (
            <div className="col-5 d-none d-lg-block align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src={instaProfilePic}
                alt="profilepicture"
              />
            </div>
          )}
          <div className={`col-lg-${showInsta ? "7" : "12"}`}>
            <h1 className="display-4 mb-5 text-center"> Me</h1>
            <div className={styles.beginQuote}>
              <h1 className={styles.quotes}>⅂</h1>
            </div>
            <div className={styles.fullDescDiv1}>{myDescription[0]}</div>
            <br />
            <div className={styles.fullDescDiv1}>{myDescription[1]}</div>
            <div className={styles.endQuote}>
              <h1 className={styles.quotes}>⅃</h1>
            </div>
            {resumeURL && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
