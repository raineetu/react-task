import { useParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import useBlog from "../hooks/blogdetails/useBlogID";

const Details = () => {
  const { id } = useParams();
  const { theme } = useTheme();

  const { data, isLoading, isError } = useBlog(id);

  if (isLoading) {
    return <p className="pt-36 text-center text-xl">Loading...</p>;
  }

  if (isError || !data) {
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
    <div
      className={`pt-36 px-8 pb-10 w-full font-serif transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl text-left py-8">{data?.data.title}</h2>

        {/* Metadata */}
        <div
          className={`text-sm pb-4 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p>
            <span className="font-semibold">Published</span>
          </p>
          <p>
            <span className="font-semibold">Category:</span>{" "}
            {data?.data.category || "Unknown"}
          </p>
        </div>

        {/* Author and content */}
        <div
          className={`rounded-2xl p-4 mx-auto mb-6 transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-200"
          }`}
        >
          <p className="italic font-bold text-3xl">{data?.data.author}</p>
          <p className="py-6 text-[20px]">{data?.data.content}</p>
        </div>

        {/* Description and external link */}
        <div>
          <p
            className={`italic font-semibold text-2xl pt-8 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Description
          </p>
          <a
            href={data?.data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <p
              className={`leading-relaxed text-base lg:w-2/3 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {data?.data.excerpt || data?.data.content}
            </p>
          </a>

          {/* Images gallery */}
          <div className="flex flex-wrap gap-4 mt-6">
            {data?.data.images?.map((imgObj, index) => (
              <img
                key={index}
                src={imgObj.image}
                alt={`Blog visual ${index + 1}`}
                className="rounded-xl w-48 object-cover shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
