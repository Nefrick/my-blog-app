import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
import { useState } from "react";

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-white px-4 py-2 rounded-2xl mb-4 text-sm md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="">
          <PostList />
        </div>
        <div className={open ? "block" : "hidden md:block"}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};
export default PostListPage;
