import React, { useEffect, useState } from "react";
import LightBox from "../components/light-box/LightBox";

function LazyImage({ src, alt, placeholder, index }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);

  //  const [isDialogOpen, setIsDialogOpen] = useState(false);

  //  const onHandleOpenDialog = (index) => {
  //    setIsDialogOpen(true);
  //    console.log(index);
  //  };

  //  const onHandleCloseDialog = () => {
  //    setIsDialogOpen(false);
  //  };
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
          // onClick={()=>onHandleOpenDialog(index)}
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
      {/* {isDialogOpen && <LightBox onClose={onHandleCloseDialog} />} */}
    </>
  );
}

export default LazyImage;
