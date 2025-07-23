import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const blog = location.state?.blog;
  // console.log(blog, "individual data");

  return (
    <>
      <div className="pt-36 mx-auto px-8 max-w-5xl w-full font-serif">
        <h2 className="text-3xl text-left py-8">{blog.title}</h2>

        {/* Meta Info Section */}
        <div className="text-sm text-gray-600 pb-4">
          <p>
            <span className="font-semibold">Published At:</span>{" "}
            {new Date(blog.publishedAt).toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Source:</span>{" "}
            {blog.source?.name || "Unknown"}
          </p>
        </div>

        <div className="bg-gray-200 rounded-2xl p-4 mx-auto">
          <p className="italic font-bold text-5xl">{blog.author}</p>
          <p className="py-6 text-[20px]">{blog.content}</p>
        </div>

        <div>
          <p className="italic font-semibold text-2xl pt-8">Description</p>
          <a href={blog.url}>
            <div className="flex justify-between my-8 gap-8">
              <p className="text-gray-700 leading-relaxed text-base lg:w-2/3">
                {blog.content}
              </p>
              <img
                src={blog.urlToImage}
                alt="Blog visual"
                className="rounded-xl w-full max-w-md object-cover shadow-md"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Details;
