import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [data, setData] = useState([]);

  const apiData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=2600981b68ae41bf9f21a75544fd3ec1"
      );
      const json = await response.json();
      console.log(json, "jsonData");
      setData(json.articles || []);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <div id="blog" className="px-6 max-w-6xl mx-auto scroll-mt-37">
      <h2 className="text-4xl font-bold text-center mb-10">📰 News Blog</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.length === 0 && <p className="text-center">No articles found.</p>}
        {data.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl rounded-xl p-4 transition duration-300"
          >
            <Link to={`/detail/${index}`} className="block">
              <img
                src={blog.urlToImage || "https://via.placeholder.com/300"}
                alt={blog.title}
                className="w-full h-64 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg mb-2">{blog.title}</h3>
            </Link>

            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 text-md font-semibold"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
