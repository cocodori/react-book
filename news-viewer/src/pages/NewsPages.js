import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

const NewsPages = ({ match }) => {
  //카테고리가 선택되지 않았으면 기본 값으로 ALL
  const category = match.params.category || "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPages;
