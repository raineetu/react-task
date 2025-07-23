import { Send } from "lucide-react";
import hero from "../assets/newsr.jpg";
import { ABOUT_SECTION } from "../constants/constants";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`flex flex-col md:flex-row justify-around items-center pt-38 md:pt-25 px-4 md:px-15 lg:px-24 transition-all duration-500
          ${
            theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-900"
          }
        `}
      >
        <div className="text-center md:text-left space-y-6 md:space-y-8 flex-1">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start text-center md:text-left font-bold">
            <button className="bg-green-500 text-white rounded-full px-4 py-2 mb-2 md:mb-0 md:mr-4">
              {ABOUT_SECTION.welcomeText}
            </button>
          </div>

          <p
            className={`text-xl sm:text-2xl md:text-3xl font-bold leading-tight ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            {ABOUT_SECTION.heading}
          </p>

          <p
            className={`text-base sm:text-[13px] md:text-[15px] font-medium ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {ABOUT_SECTION.description}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 w-full">
            <button className="bg-gray-800 flex items-center gap-x-3 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300">
              {ABOUT_SECTION.readBlogButton}{" "}
              <Send className="text-white w-4 h-4" />
            </button>

            <div
              className={`flex w-full max-w-md rounded-full overflow-hidden border transition-colors duration-300
                ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-800"
                    : "border-gray-300 bg-white"
                }
              `}
            >
              <input
                type="email"
                placeholder={ABOUT_SECTION.emailPlaceholder}
                className={`flex-1 px-4 py-3 outline-none text-sm transition-colors duration-300
                  ${
                    theme === "dark"
                      ? "bg-gray-800 text-gray-200 placeholder-gray-400"
                      : "bg-white text-gray-700 placeholder-gray-500"
                  }
                `}
              />
              <button className="bg-green-500 rounded-full text-white px-5 py-3 text-sm font-semibold hover:bg-green-600 transition duration-300 cursor-pointer">
                {ABOUT_SECTION.subscribeButton}
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={hero}
            alt={ABOUT_SECTION.altText}
            className="w-96 h-96 sm:w-120 sm:h-120 md:w-[550px] md:h-[550px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default About;
