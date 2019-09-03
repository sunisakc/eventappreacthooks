import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";


const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/speaker1.jpg"
                                    secondaryImg="/static/speakers/speaker1.jpg"
                                    alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/speaker2.jpg"
                                    secondaryImg="/static/speakers/speaker2.jpg"
                                    alt="" />
        </div>
    );
};

export default ImageChangeOnMouseOver;