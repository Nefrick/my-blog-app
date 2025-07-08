import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeatutedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* Breadcrumbs */}
      <div className="flex gap-4">
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <span>•</span>
        <span className="text-blue-500">Blogs and Articles</span>
      </div>
      {/*Introduction Section*/}
      <div className="flex item-center justify-between">
        {/* titles */}
        <div className="w-3/4">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            ✅ Shadow Notes – Thoughts on IT, Games, Tech, Movies & Motivation
          </h1>
          <p className="mt-8 text-md md:text-xl">
            📝 A personal blog exploring the worlds of gaming, technology,
            cinema, and self-growth. From news and reviews to insights and
            inspiration — one place for everything that moves the mind forward.
          </p>
        </div>
        {/* animated button */}
        <Link to="write" className="hidden md:block relative w-50 h-50">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                {" "}
                Wtrite your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                {" "}
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/*Main Category*/}
      <MainCategories />
      {/*Featured Posts Section*/}
      <FeaturedPosts />
      {/*post list*/}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};
export default Homepage;
