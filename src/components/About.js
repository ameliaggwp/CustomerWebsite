import React from "react";
import Headshot from "./assets/abbyp-headshot.JPG";

const About = () => {
  return (
    <div className="container" id="section">
      <div className="row">
        <div className="col-sm-6">
          <img src={Headshot} className="headshot" />
        </div>
        <div className="col-sm-6">
          Hey, it's me, Abby P! WADDUP, MY P-PLE! Living in South Korea From
          California, USA My contents: vlogs, culture, language, travel, and
          more!
          <div className="breaker">.....</div>
          안녕하세요! 한국에서 살고 있는 미국인 애비라고 합니다!
          일상생활/브이로그/문화/언어/여행 등 채널입니다~ 동영상 재미있게
          봐주시고 구독해주세요 ^^
        </div>
      </div>
      <div>official.abbypee@gmail.com</div>
    </div>
  );
};

export default About;
