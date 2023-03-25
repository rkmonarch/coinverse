import React from "react";
import Image from "next/image";

const NFTDetails = ({
  label,
  value,
  type,
}) => {
  if (value === "" || value === undefined) value = "/registerVector.png";
  return (
    <div className="flex flex-row">
      {type === "image" ? (
        <>
          <p className="text-md text-left font-bold title-font mb-4 text-gray-800 dark:text-white mr-2">{`${label}`}</p>
          <Image
            loader={() => value}
            src={value}
            width="400"
            height="600"
            alt="label"
          />
        </>
      ) : (
        <>
          <p className="text-md text-left font-bold title-font mb-4 text-gray-800 dark:text-white mr-2">{`${label}:`}</p>
          <p className="text-md text-left font-medium title-font mb-4 text-gray-800 dark:text-white">
            {value}
          </p>
        </>
      )}
    </div>
  );
};

export default NFTDetails;

NFTDetails.defaultProps = {
  type: "text",
};