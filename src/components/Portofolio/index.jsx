import Link from "next/link";
import React, { useEffect, useState } from "react";
import portfolios from "./portofolio";
import CardPortfolio from "../Fragments/CardPortfolio";
import PaginationPortfolio from "../Fragments/PaginationPortfolio";
import TabsPortfolio from "../Fragments/TabsPortfolio";

const { portfolioApps, portfolioDesign, portfolioVideo } = portfolios;

const Portofolio = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [currentPage, setCurrentPage] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
    setCurrentPage(1); 
  }, []);

  if (!isClient) return null;

  const handleNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const itemsPerPage = 4;
  const sortedData = [...portfolioApps].sort((a, b) => b.id - a.id);
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const tabs = [
    { id: "web", label: "Apps" },
    { id: "design", label: "Design" },
    { id: "video", label: "Video" }
  ];

  return (
    <div id="portfolio" className="py-20 bg-white">
      <div className="mb-12">
        <h3 className="text-5xl font-bold text-center mb-3">Portfolio</h3>
      </div>
      <TabsPortfolio tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Apps Portfolio */}
      {activeTab === "web" && (
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
      )}
      
      {/* Pagination */}
      {activeTab === "web" && (
        <PaginationPortfolio>
          <PaginationPortfolio.PaginationInfo
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
          />
          <div className="inline-flex mt-2 xs:mt-0">
            <PaginationPortfolio.PaginationButton
              onClick={handlePrevClick}
              disabled={currentPage === 1}
            >
              Prev
            </PaginationPortfolio.PaginationButton>
            <PaginationPortfolio.PaginationButton
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Next
            </PaginationPortfolio.PaginationButton>
          </div>
        </PaginationPortfolio>
      )}

      {/* Design Portfolio */}
      {activeTab === "design" && (
        <div className="md:container mx-auto justify-center" style={{ width: "280px" }}>
          {portfolioDesign.map((item) => (
            <CardPortfolio key={item.id}>
              <Link href={item.link}>
                <CardPortfolio.Header image={item.imageUrl} />
                <CardPortfolio.Body>{item.title}</CardPortfolio.Body>
              </Link>
            </CardPortfolio>
          ))}
        </div>
      )}

      {/* Video Portfolio */}
      {activeTab === "video" && (
        <div className="md:container mx-auto justify-center" style={{ width: "280px" }}>
          {portfolioVideo.map((item) => (
            <CardPortfolio key={item.id}>
              <Link href={item.link}>
                <CardPortfolio.Header image={item.imageUrl} />
                <CardPortfolio.Body>{item.title}</CardPortfolio.Body>
              </Link>
            </CardPortfolio>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portofolio;