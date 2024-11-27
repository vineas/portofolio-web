import Link from "next/link";
import React, { useState } from "react";
import portfolios from "./portofolio";
import CardPortfolio from "../Fragments/CardPortfolio";

const { portfolioApps, portfolioDesign, portfolioVideo } = portfolios;

const Portofolio = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const sortedData = [...portfolioApps].sort((a, b) => b.id - a.id); // Urutkan descending berdasarkan `id`
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div id="portfolio" className="py-20 bg-white">
      <div className="mb-12">
        <h3 className="text-5xl font-bold text-center mb-3">Portfolio</h3>
        {/* <p className="text-gray-500 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          veritatis.
        </p> */}
      </div>
      <ul
        className="mb-5 flex list-none flex-wrap ps-0 md:flex-row justify-center"
        role="tablist"
      >
        {[
          { id: "web", label: "Apps" },
          { id: "design", label: "Design" },
          { id: "video", label: "Video" },
        ].map((tab) => (
          <li key={tab.id} role="presentation">
            <button
              onClick={() => !tab.disabled && handleTabClick(tab.id)}
              className={`my-2 mx-2 md:mx-0 block rounded px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight ${
                tab.disabled
                  ? "pointer-events-none bg-zinc-200 text-neutral-400 dark:bg-neutral-600 dark:text-neutral-500"
                  : `bg-zinc-100 text-neutral-500 dark:bg-neutral-700 dark:text-white/50 ${
                      activeTab === tab.id
                        ? "!bg-primary-100 text-primary-700 dark:!bg-slate-900 dark:text-primary-500"
                        : ""
                    }`
              } md:me-4`}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Tabs content */}
      <div className="mb-6">
        <div
          className={`${
            activeTab === "web" ? "block opacity-100" : "hidden opacity-0"
          } transition-opacity duration-150 ease-linear`}
          role="tabpanel"
        >
          {/* Apps Portfolio */}
          <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 md:container mx-auto gap-8">
            {currentData.map((item) => (
              <CardPortfolio key={item.id}>
                <Link href={item.link}>
                  <CardPortfolio.Header image={item.imageUrl} />
                  <CardPortfolio.Body>{item.title}</CardPortfolio.Body>
                </Link>
              </CardPortfolio>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col items-center mt-6">
            <span className="text-sm text-gray-700 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-gray-900">
                {Math.min(currentPage * itemsPerPage, totalItems)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900">{totalItems}</span>{" "}
              Entries
            </span>
            {/* Buttons */}
            <div className="inline-flex mt-2 xs:mt-0">
              <button
                onClick={handlePrevClick}
                className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <button
                onClick={handleNextClick}
                className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Design Portfolio */}
        <div
          className={`${
            activeTab === "design" ? "block opacity-100" : "hidden opacity-0"
          } transition-opacity duration-150 ease-linear`}
          role="tabpanel"
        >
          <div
            className="md:container mx-auto justify-center "
            style={{ width: "280px" }}
          >
            {portfolioDesign.map((item) => (
              <div key={item.id} className="shadow-xl rounded-xl">
                <Link href={item.link} target="_blank">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full rounded-t-xl"
                  />
                  <div className="py-3 px-5">
                    <h4 className="text-center font-bold">{item.title}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Video Portfolio */}
        <div
          className={`${
            activeTab === "video" ? "block opacity-100" : "hidden opacity-0"
          } transition-opacity duration-150 ease-linear`}
          role="tabpanel"
        >
          <div
            className="md:container mx-auto justify-center "
            style={{ width: "280px" }}
          >
            {portfolioVideo.map((item) => (
              <div key={item.id} className="shadow-xl rounded-xl">
                <Link href={item.link} target="_blank">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full rounded-t-xl"
                  />
                  <div className="py-3 px-5">
                    <h4 className="text-center font-bold">{item.title}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
