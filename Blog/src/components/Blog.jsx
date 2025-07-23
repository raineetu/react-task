import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Blog = () => {
  const { theme } = useTheme();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const apiData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=2600981b68ae41bf9f21a75544fd3ec1"
      );
      const json = await response.json();
      setData(json.articles || []);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div
      id="blog"
      className={`px-6  scroll-mt-37 transition-colors duration-500
        ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }
      `}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">📰 News Blog</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {paginatedData.length === 0 && (
            <p className="text-center">
              {theme === "dark" ? "No articles found." : "No articles found."}
            </p>
          )}
          {paginatedData.map((blog, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 transition duration-300 shadow-md hover:shadow-xl
              ${theme === "dark" ? "bg-gray-800" : "bg-white"}
            `}
            >
              <Link to={`/detail/${index}`} className="block" state={{ blog }}>
                <img
                  src={blog.urlToImage || "https://via.placeholder.com/300"}
                  alt={blog.title}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h3
                  className={`text-lg mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {blog.title}
                </h3>
              </Link>
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold text-md transition-colors duration-300
                ${
                  theme === "dark"
                    ? "text-green-400 hover:text-green-300"
                    : "text-green-600 hover:text-green-700"
                }
              `}
              >
                Read more →
              </a>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className={`text-sm px-4 py-2 rounded cursor-pointer disabled:opacity-50 transition-colors duration-300
            ${
              theme === "dark"
                ? "bg-gray-700 text-white hover:bg-gray-600 disabled:bg-gray-600"
                : "bg-gray-700 text-white hover:bg-gray-800 disabled:bg-gray-400"
            }
          `}
          >
            Previous
          </button>
          <span
            className={`text-lg font-medium ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className={`text-sm px-4 py-2 rounded cursor-pointer disabled:opacity-50 transition-colors duration-300
            ${
              theme === "dark"
                ? "bg-green-500 text-white hover:bg-green-400 disabled:bg-green-700"
                : "bg-green-500 text-white hover:bg-green-600 disabled:bg-green-300"
            }
          `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
