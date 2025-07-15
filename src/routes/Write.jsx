import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>Please sign in to write a post.</div>;
  }

  return (
    <div className="md:h-[calc(100vh-4rem)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Write a New Post</h1>
      <form className="flex flex-col gap-6 p-6 rounded-xl flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Awesome Story"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a categoty:
          </label>
          <select
            name="cat"
            id=""
            className="p-2 rounded-xl bg-slate-100 shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="search-engine">Search Engine</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          className="p-4 rounded-xl bg-slate-100 shadow-md"
          placeholder="A Short Description"
        />
        <ReactQuill theme="snow" className="flex-1" />
        <button
          type="submit"
          className="mt-9 w-36 bg-blue-800 text-white font-weight-medium px-4 py-3 rounded-xl"
        >
          Publish
        </button>
      </form>
    </div>
  );
};
export default Write;
