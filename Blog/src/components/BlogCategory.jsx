import React, { useState } from "react";
import useBlogCategory from "../hooks/blogdetails/useBlogCategory";

const BlogCategory = () => {
  const { data } = useBlogCategory();
  console.log(data, "data category");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter categories by search input
  const filteredCategories = data?.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Blog Categories</h2>

      <input
        type="text"
        placeholder="Search by category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border rounded mb-4"
      />

      {filteredCategories && filteredCategories.length > 0 ? (
        <ul className="space-y-2">
          {filteredCategories.map((category) => (
            <li
              key={category.id}
              className="p-3 border rounded shadow-sm hover:bg-gray-100"
            >
              {category.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching categories found.</p>
      )}
    </div>
  );
};

export default BlogCategory;
