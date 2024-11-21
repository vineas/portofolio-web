import Link from "next/link";
import React, { useState } from "react";

const Portofolio = () => {
  const [activeTab, setActiveTab] = useState("web");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="portofolio" className="py-20 bg-white">
      {/* Tabs navigation */}
      <div className="mb-12">
        <h3 className="text-5xl font-bold text-center mb-3">Portofolio</h3>
        <p className="text-gray-500 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          veritatis.
        </p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 md:container mx-auto gap-8">
            {/* portofolio card 1 */}
            <div className="shadow-xl">
              <Link href={"/"}>
                <img src="https://placehold.co/600x400" className="w-full" />

                <div className="py-3 px-5">
                  <h4 className="text-center font-bold">Website 1</h4>
                </div>
              </Link>
            </div>
            {/* portofolio card 2 */}
            <div className="shadow-xl">
              <Link href={"/"}>
                <img src="https://placehold.co/600x400" className="w-full" />

                <div className="py-3 px-5">
                  <h4 className="text-center font-bold">Website 2</h4>
                </div>
              </Link>
            </div>
            {/* portofolio card 3 */}
            <div className="shadow-xl">
              <Link href={"/"}>
                <img src="https://placehold.co/600x400" className="w-full" />

                <div className="py-3 px-5">
                  <h4 className="text-center font-bold">Website 3</h4>
                </div>
              </Link>
            </div>
            {/* portofolio card 4 */}
            <div className="shadow-xl">
              <Link href={"/"}>
                <img src="https://placehold.co/600x400" className="w-full" />

                <div className="py-3 px-5">
                  <h4 className="text-center font-bold">Website 4</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            activeTab === "design" ? "block opacity-100" : "hidden opacity-0"
          } transition-opacity duration-150 ease-linear`}
          role="tabpanel"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 md:container mx-auto gap-8 justify-center">
            {/* portofolio card 1 */}
            <div className="shadow-xl">
              <Link href={"/"}>
                <img src="https://placehold.co/600x400" className="w-full" />

                <div className="py-3 px-5">
                  <h4 className="text-center font-bold">Design</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            activeTab === "video" ? "block opacity-100" : "hidden opacity-0"
          } transition-opacity duration-150 ease-linear`}
          role="tabpanel"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 md:container mx-auto gap-8 justify-center">
            {/* portofolio card 1 */}
            <div className="shadow-xl">
              <Link href={"/"}>
                <img src="https://placehold.co/600x400" className="w-full" />

                <div className="py-3 px-5">
                  <h4 className="text-center font-bold">Video</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
