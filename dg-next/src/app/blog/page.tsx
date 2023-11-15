import { Fragment } from "react";
import { NextPage } from "next";
import CardItem from "@/component/blog/CardItem";

interface BlogProps {}

const Blog: NextPage<BlogProps> = (props) => {
  return (
    <Fragment>
      <h1>blog</h1>
        <CardItem/>
    </Fragment>
  );
};
export default Blog;
