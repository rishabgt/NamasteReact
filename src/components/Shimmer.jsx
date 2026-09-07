import "../styles/Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text short"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
