import React from "react";
import profilePic from "./assets/abbyProfile.JPG";

const About = () => {
  return (
    <div id="About">
      <div className="row">
        <div className="col-sm-6 profile">
          <div className="profile-inner">
            <div className="profile-pic">
              <img src={profilePic} />
            </div>
            <div className="profile-blurb">
              <p className="animate__bounce">
                Hey, it's me, Abby P!
                <br />
                WADDUP, MY P-PLE!
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 profile-text">
          <article className="profile-text">
            Living in South Korea From California, USA My contents: vlogs,
            culture, language, travel, and more!
            <div className="breaker">.....</div>
            안녕하세요! 한국에서 살고 있는 미국인 애비라고 합니다!
            일상생활/브이로그/문화/언어/여행 등 채널입니다~ 동영상 재미있게
            봐주시고 구독해주세요 ^^
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
