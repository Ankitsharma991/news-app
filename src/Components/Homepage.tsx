// import React, { useEffect, useState } from "react";
// import fetchNews from "../apis/fetchNews.tsx";
// import { categories } from "../constants";

const Homepage = () => {
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   const apiUrl =
  //     "http://api.mediastack.com/v1/news?access_key=a7955be8ccc3a113acb18bc69f38589f";

  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setNews(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  // const news = async () => {
  //   await fetchNews(categories.join(","));
  // };
  // console.log(news);

  return (
    <div>
      <p>Home Page</p>
    </div>
  );
};

export default Homepage;
