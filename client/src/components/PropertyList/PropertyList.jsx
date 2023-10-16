import React from "react";
import "./PropertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8080/api/hotels/countByType"
  );

  const images = [
    "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3320529/pexels-photo-3320529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="propertyList">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          {data &&
            images.map((img, index) => (
              <div className="propertyListItem" key={index}>
                <img src={img} alt="" className="propertyListImg" />
                <div className="propertyListTitles">
                  <h1>{data[index]?.type}</h1>
                  <h2>
                    {data[index]?.count == 1
                      ? `${data[index]?.count} Hotel`
                      : `${data[index]?.count} Hotels`}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
