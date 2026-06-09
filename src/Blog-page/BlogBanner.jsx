import React from "react";
import BreadcrumbBanner from "../components/BreadrumbBanner";

const Blog = () => {
  return (
    <>
      <BreadcrumbBanner
        parent="Blog"
        parentLink="/blog"
        title="Blog Details"
      />

      <h2>Blog Page</h2>
    </>
  );
};

export default Blog;