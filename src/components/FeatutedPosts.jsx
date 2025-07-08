import { Link } from "react-router-dom";
import Image from "./Image";

function FeaturedPosts() {
  return (
    <div className="flex mt-8 flex-col lg:flex-row gap-8">
      {/* First Post */}
      <div className="flex w-full lg:w-1/2 flex-col gap-4">
        {/* image */}
        <Image
          src="featured1.jpeg"
          className="object-cover rounded-3xl"
          alt="Featured Post"
          w="895"
        />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg" to="/web-design">
            Web dising
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link
          to="test"
          className="text-xl lg:text-3xl lg:font-bold font-semibold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quaerat
        </Link>
      </div>
      {/* Other */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured2.jpeg"
              className="object-cover rounded-3xl w-full h-full"
              alt="Featured Post"
              w="298"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <span className="text-lg font-semibold">0.2</span>
              <Link to={"/web-design"} className="text-blue-800 lg:text-lg">
                Web design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured3.jpeg"
              className="object-cover rounded-3xl w-full h-full"
              alt="Featured Post"
              w="298"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <span className="text-lg font-semibold">0.2</span>
              <Link to={"/web-design"} className="text-blue-800 lg:text-lg">
                Web design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            </Link>
          </div>
        </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured4.jpeg"
              className="object-cover rounded-3xl w-full h-full"
              alt="Featured Post"
              w="298"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <span className="text-lg font-semibold">0.2</span>
              <Link to={"/web-design"} className="text-blue-800 lg:text-lg">
                Web design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedPosts;
