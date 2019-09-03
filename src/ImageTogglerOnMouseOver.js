import React, {useRef} from "react";

const ImageTogglerOnMouseOver = ({ primaryImg, secondaryImg}) => {
    const imgeRef = useRef(null);

    return (
        <img onMouseOver={() => {
            imgeRef.current.src = secondaryImg;
        }} onMouseOut= {() => {
            imgeRef.current.src = primaryImg;
        }}
            src={primaryImg}
            alt="" ref={imgeRef}
            />
    );
};







export default ImageTogglerOnMouseOver;