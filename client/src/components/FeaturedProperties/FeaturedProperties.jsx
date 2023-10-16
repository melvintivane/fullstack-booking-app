import React from "react";
import "./FeaturedProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8080/api/hotels?featured=true"
  );
  console.log(data);
  return (
    <div className="featuredProperty">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          {data.map((item) => (
            <div className="featuredPropertyItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="featuredPropertyImg"
              />
              <span className="featuredPropertyName">{item.name}</span>
              <span className="featuredPropertyCity">{item.city}</span>
              <span className="featuredPropertyPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="featuredPropertyRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
