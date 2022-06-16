import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../../../../components/loading/Loading";
import { getAllMobiles } from "../../../../../../server/mobileRequests/MobileRequests";

const RemoveAndEditMobiles = () => {
  const { data, isLoading, isError } = useQuery("all_mobiles", getAllMobiles);

  return (
    <>
      {isLoading && (
        <div>
          <Loading />
        </div>
      )}
      {data &&
        data.map((mobiles) => {
          return mobiles.map((mobile, index) => (
            <div key={index}>
              <h1>{mobile.name}</h1>
              <h1>{console.log(mobile)}</h1>
              <img
                alt={mobile.name}
                src={`http://localhost:3001/${mobile.images[0]}`}
              />
              <h3>{console.log(`http://localhost:3001/${mobile.images[0]}`)}</h3>
            </div>
          ));
        })}
    </>
  );
};

export default RemoveAndEditMobiles;
