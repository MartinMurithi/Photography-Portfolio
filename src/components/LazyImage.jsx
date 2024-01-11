import React, { useEffect, useRef, useState } from "react";

function LazyImage({ src, alt, placeholder, index }) {
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
          className="imgItem"
          loading="lazy"
        />
      ) : (
        <img
          src={placeholder}
          alt={alt}
          width="100%"
          height="auto"
          className="imgItem"
          loading="lazy"
        />
      )}
    </>
  );
}

export default LazyImage;
