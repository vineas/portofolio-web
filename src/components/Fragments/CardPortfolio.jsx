
const CardPortfolio = (props) => {
  const { children } = props;
  return (
    <div className="shadow-xl rounded-xl">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="portfolio" className="w-full rounded-t-xl" />
    </a>
  );
};
  
const Body = (props) => {
  const { children } = props;
  return (
    <div className="py-3 px-5">
        <h4 className="text-center font-bold text-sm md:text-lg">
          {children}
        </h4>
    </div>
  );
};



CardPortfolio.Header = Header;
CardPortfolio.Body = Body;

export default CardPortfolio;
