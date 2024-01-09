import React, { useEffect, useState } from "react";
import imageList from "../Images";

function LazyImage({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {isLoaded ? (
        <img
          src={src}
          alt={alt}
          width="100%"
          height="auto"
          loading="lazy"
          className="imgItem"
        />
      ) : (
        <>
          {imageList?.map((img, index) => {
            return (
              <img
                src={img.placeholder}
                alt={img.alt}
                width="100%"
                height="auto"
                key={index}
                className="imgItem"
              />
            )
          })}
        </>
      )}
    </>
  );
}

export default LazyImage;
