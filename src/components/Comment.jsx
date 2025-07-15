import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="authorImg.png"
          className="rounded-full w-10 h-10 object-cover"
          w="40"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          accusantium ex eaque ut cumque consequuntur? At error ducimus dolor!
          Magni tempore consequuntur ducimus unde perferendis! Sint, ea? Ab, eos
          quisquam.
        </p>
      </div>
    </div>
  );
};

export default Comment;
