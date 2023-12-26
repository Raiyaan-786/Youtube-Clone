import React, { useRef, useState } from 'react';
import "./SliderFeed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
const SliderFeed = (props) => {
    let [sldrLeft, setsldrLeft] = useState(false);
    let [sldrRight, setsldrRight] = useState(true);

    const handleLeftClick = () => {
        sliderfeedRef.current.scrollLeft -=400 ;
    };
    const handleRightClick = () => {
        sliderfeedRef.current.scrollLeft += 400;
        // sliderfeedRef.current.scrollLeft = sliderfeedRef.current.scrollWidth;
    };
    const handleScroll = () => {
        if (sliderfeedRef.current.scrollLeft >= 0.1) { setsldrLeft(sldrLeft = true) }
        else { setsldrLeft(sldrLeft = false) }
        let maxValue = sliderfeedRef.current.scrollWidth - sliderfeedRef.current.clientWidth - 1;
        if (sliderfeedRef.current.scrollLeft >= maxValue) { setsldrRight(sldrRight = false) }
        else { setsldrRight(sldrRight = true) }

    }
    const sliderfeedRef = useRef();
    const data = [
        { item: "Gaming" },
        { item: "Mixes" },
        { item: "Music" },
        { item: "Live" },
        { item: "News" },
        { item: "C++" },
        { item: "Marvel" },
        { item: "Accounting" },
        { item: "Cars" },
        { item: "Javascript" },
        { item: "Indian Premier League" },
        { item: "Editing" },
        { item: "Lectures" },
        { item: "Physics" },
        { item: "Cooking Show" },
        { item: "Gadgets" },
        { item: "Recently Uploaded" },
        { item: "Watched" },
        { item: "New to you" },
    ]
    return (
        <div className='slider-feed' style={{ maxWidth: props.openSidebar ? "92.2vw" : "80.9vw" }}>

            <div className="sliderfeed-hider-left" style={{ display: sldrLeft ? "flex" : "none" }}>
                <div className="sliderfeed-icon-left" onClick={handleLeftClick}>
                    <FontAwesomeIcon icon={faAngleLeft} size="lg" />
                </div>
            </div>

            <div className="feed-items" ref={sliderfeedRef} onScroll={handleScroll}>
                <div className="feed-item active">All</div>
                {data.map((items) => (<div className="feed-item">{items.item}</div>))}
            </div>

            <div className="sliderfeed-hider-right" style={{ display: sldrRight ? "flex" : "none" }}>
                <div className="sliderfeed-icon-right" onClick={handleRightClick}>
                    <FontAwesomeIcon icon={faAngleRight} size="lg" />
                </div>
            </div>

        </div>
    )
}
export default SliderFeed