import React, { useState, useRef } from "react";

export default function CollegeTipsGallery() {
  const categories = [
    "Moments",
    "Behind The Scenes",
    "Work Culture",
    "Team Vibes",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Moments");
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const imageRefs = useRef([]);

  const images = [
    {
      url: "/Images/tv 1.jpg",
      category: "Team Vibes",
    },
    {
      url: "/Images/tv 2.jpg",
      category: "Team Vibes",
    },
    {
      url: "/Images/tv 3.png",
      category: "Team Vibes",
    },
    {
      url: "/Images/tv 4.png",
      category: "Team Vibes",
    },
    {
      url: "/Images/work 1.jpg",
      category: "Work Culture",
    },
    {
      url: "/Images/work 3.jpg",
      category: "Work Culture",
    },
    {
      url: "/Images/work 4.jpg",
      category: "Work Culture",
    },
    {
      url: "/Images/behind the scene.gif",
      category: "Behind The Scenes",
    },
    {
      url: "/Images/bh-1.jpg",
      category: "Behind The Scenes",
    },
    {
      url: "/Images/bh 1.jpg",
      category: "Behind The Scenes",
    },
  ];

  const filteredImages =
    selectedCategory === "Moments"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openFullscreen = (img) => {
    setFullscreenImage(img);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-6 bg-indigo-700 text-center">
        <h1 className="text-5xl font-bold">College Tips Gallery</h1>
        <p className="text-lg mt-2">
          Explore the best moments and work culture!
        </p>
      </header>

      <nav className="shadow-md py-4 mb-4">
        <div className="flex justify-center flex-wrap gap-3 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-700 text-white hover:bg-indigo-500"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      <h1 className="text-4xl font-bold text-center mb-6">
        📸 {selectedCategory} Captures
      </h1>

      <div className="overflow-x-auto scrollbar-hide whitespace-nowrap px-6 pb-6">
        <div className="inline-flex gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="w-90 h-90 rounded-lg overflow-x-auto scrollbar-hide shadow-lg flex-shrink-0 transform hover:scale-110 hover:shadow-2xl transition duration-300"
              onClick={() => openFullscreen(img)}
            >
              <img
                src={img.url}
                alt={img.category}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeFullscreen}
        >
          <img
            src={fullscreenImage.url}
            alt="Fullscreen"
            className="w-180 h-180 rounded-lg shadow-lg"
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={closeFullscreen}
          >
            ✕
          </button>
        </div>
      )}

      <footer className="text-center flex flex-row justify-center py-6 mt-6 bg-gray-800">
        <p className="font-bold text-2xl">Made With ❤️ by Rishabh Shah</p>
        <a
          className="absolute right-4"
          href="https://www.instagram.com/collegetips.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        >
          <img
            className="h-11 w-10"
            src="https://th.bing.com/th/id/OIP.jVaYVICZcqrPuLXuR-AJmAHaHa?w=167&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3"
          ></img>
        </a>
        <a
          className="absolute right-18"
          href="https://www.linkedin.com/company/collegetips/posts/?feedView=all"
        >
          <img
            className="h-11 w-10"
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          ></img>
        </a>
        <a className="absolute right-32" href="https://www.collegetips.in/">
          <img
            className="h-11 w-11"
            src="https://www.collegetips.in/images/birthday.jpg"
          ></img>
        </a>
      </footer>
    </div>
  );
}
