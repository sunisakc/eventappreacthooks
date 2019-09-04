import React from "react" ;
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageToggleOnScroll = () => {
    return (
        <div>
        {[1, 2].map(speakerId => {
            return (
                <div key={speakerId}>
                <ImageToggleOnScroll
                primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
                            secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
                            alt=""
                />
                </div>
            );
        })}
        </div>
    );
};