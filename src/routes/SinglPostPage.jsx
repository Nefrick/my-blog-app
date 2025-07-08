import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";

const SinglPostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link>John Doe</Link>
            <span>on</span>
            <Link>Web Desing</Link>
            <span>2 days ago</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum at
            perferendis nisi incidunt, cum nulla consectetur doloribus sequi
            facilis quasi officiis dolorem quae non! Atque debitis velit
            voluptate repellendus quaerat?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            accusantium ex eaque ut cumque consequuntur? At error ducimus dolor!
            Magni tempore consequuntur ducimus unde perferendis! Sint, ea? Ab,
            eos quisquam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            accusantium ex eaque ut cumque consequuntur? At error ducimus dolor!
            Magni tempore consequuntur ducimus unde perferendis! Sint, ea? Ab,
            eos quisquam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            accusantium ex eaque ut cumque consequuntur? At error ducimus dolor!
            Magni tempore consequuntur ducimus unde perferendis! Sint, ea? Ab,
            eos quisquam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            accusantium ex eaque ut cumque consequuntur? At error ducimus dolor!
            Magni tempore consequuntur ducimus unde perferendis! Sint, ea? Ab,
            eos quisquam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            accusantium ex eaque ut cumque consequuntur? At error ducimus dolor!
            Magni tempore consequuntur ducimus unde perferendis! Sint, ea? Ab,
            eos quisquam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            accusantium ex eaque ut cumque consequuntur? At error ducimus dolor!
            Magni tempore consequuntur ducimus unde perferendis! Sint, ea? Ab,
            eos quisquam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            accusantium ex eaque ut cumque consequuntur? At error ducimus dolor!
            Magni tempore consequuntur ducimus unde perferendis! Sint, ea? Ab,
            eos quisquam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            accusantium ex eaque ut cumque consequuntur? At error ducimus dolor!
            Magni tempore consequuntur ducimus unde perferendis! Sint, ea? Ab,
            eos quisquam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            accusantium ex eaque ut cumque consequuntur? At error ducimus dolor!
            Magni tempore consequuntur ducimus unde perferendis! Sint, ea? Ab,
            eos quisquam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            accusantium ex eaque ut cumque consequuntur? At error ducimus dolor!
            Magni tempore consequuntur ducimus unde perferendis! Sint, ea? Ab,
            eos quisquam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            accusantium ex eaque ut cumque consequuntur? At error ducimus dolor!
            Magni tempore consequuntur ducimus unde perferendis! Sint, ea? Ab,
            eos quisquam.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="authorImg.png"
                w="48"
                h="48"
                className="rounded-full w-12 h-12 object-cover"
              />
              <Link className="text-blue-800">Michael Chizhevskiy</Link>
            </div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline">Web Design</Link>
            <Link className="underline">Web Development</Link>
            <Link className="underline">Programming</Link>
            <Link className="underline">JavaScript</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};
export default SinglPostPage;
