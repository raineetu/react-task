import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import useBlog from "../hooks/blogdetails/useBlog";

const Blog = () => {
  const { theme } = useTheme();
  const { data } = useBlog();
  // console.log(data);
  const blogData = data?.data?.data || [];

  return (
    <div
      id="blog"
      className={`px-6 pb-13 scroll-mt-37 transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">📰 News Blog</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className={`border rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <Link
                to={`/home/detail/${blog.id}`}
                className="block"
                state={{ blog }}
              >
                <img
                  src={blog.images?.[0]?.image}
                  alt="Blog"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                    <button className="rounded px-2 py-2 bg-green-500 text-white text-xs">
                      {blog.category}
                    </button>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {blog.excerpt}
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="mr-2 font-medium">{blog.category}</span> |{" "}
                    <span>
                      {new Date(blog.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <p className="text-sm italic mb-4">By {blog.author}</p>
                </div>
              </Link>

              {blog.link && (
                <div className="px-4 pb-4">
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Read More →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
