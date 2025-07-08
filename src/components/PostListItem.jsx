import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      {/* deteils */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/post/1" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quaerat
        </Link>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Written by</span>
          <Link className="text-blue-800">Michael Chyzhevskiy</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a
          incidunt laboriosam, voluptates possimus fuga quis velit perspiciatis
          tempora! Explicabo nobis ullam rerum itaque quas temporibus sint odit
          nam optio.
        </p>
      </div>
    </div>
  );
};

export default PostListItem;
