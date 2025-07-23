import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Details = () => {
  const location = useLocation();
  const blog = location.state?.blog;
  const { theme } = useTheme();

  if (!blog) {
    return (
      <p
        className={`pt-36 text-center text-xl ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        No blog data available.
      </p>
    );
  }

  return (
    <>
      <div
        className={`pt-36 px-8 pb-10  w-full font-serif transition-colors duration-500
          ${
            theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-900"
          }
        `}
      >
        <div className="mx-auto  max-w-5xl">
          <h2 className="text-3xl text-left py-8">{blog.title}</h2>

          <div
            className={`text-sm pb-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <p>
              <span className="font-semibold">Published At:</span>{" "}
              {new Date(blog.publishedAt).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Source:</span>{" "}
              {blog.source?.name || "Unknown"}
            </p>
          </div>

          <div
            className={`rounded-2xl p-4 mx-auto mb-6 transition-colors duration-300
          ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}
        `}
          >
            <p className="italic font-bold text-5xl">{blog.author}</p>
            <p className="py-6 text-[20px]">{blog.content}</p>
          </div>

          <div>
            <p
              className={`italic font-semibold text-2xl pt-8 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Description
            </p>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              <div className="flex justify-between my-8 gap-8">
                <p
                  className={`leading-relaxed text-base lg:w-2/3
                ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
              `}
                >
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
      </div>
    </>
  );
};

export default Details;
