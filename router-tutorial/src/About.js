import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, //QueryStirng의 ?를 생략하는 설정
  });
  const showDetail = query.detail === "true"; //쿼리 파싱 결과 값은 문자열이다.

  return (
    <div>
      <h1>About</h1>
      <p>라우터 기초 실습 에제 프로젝트</p>
      {showDetail && <p>detail값을 따로 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
