import Link from 'next/link'
import React, { useState } from 'react'

const Portofolio = () => {
    const [activeTab, setActiveTab] = useState("web");

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    return (
        <div>
        {/* Tabs navigation */}
        <ul
          className="mb-5 flex list-none flex-col flex-wrap ps-0 md:flex-row"
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
                className={`my-2 block rounded px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight ${
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
            Web & Mobile Apps
          </div>
          <div
            className={`${
              activeTab === "design" ? "block opacity-100" : "hidden opacity-0"
            } transition-opacity duration-150 ease-linear`}
            role="tabpanel"
          >
            Design
          </div>
          <div
            className={`${
              activeTab === "video" ? "block opacity-100" : "hidden opacity-0"
            } transition-opacity duration-150 ease-linear`}
            role="tabpanel"
          >
            Video
          </div>
        </div>
      </div>
  

    )
}

export default Portofolio
