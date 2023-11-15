import { Fragment } from "react";
import { NextPage } from "next";
import NavButtons from "@/component/website/page";

interface BlogProps {}

const Blog: NextPage<BlogProps> = (props) => {
  return (
    <Fragment>
      <NavButtons />
    </Fragment>
  );
};
export default Blog;
