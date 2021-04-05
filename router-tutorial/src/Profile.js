import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
  cocodori: {
    name: "hoon",
    description: "자바 최고",
  },
  gildong: {
    name: "길동이",
    description: "홍길동전 주인공입니다.",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
