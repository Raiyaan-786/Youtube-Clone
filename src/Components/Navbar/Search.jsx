import React from 'react';
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMicrophone,faSearch} from "@fortawesome/free-solid-svg-icons";
export default function Search({handleSearchBox,searchBox}) {
    return (
        <div className="search-bar">
            <div className="search-box ">
                <input type="text" placeholder="Search" name="Search" className={searchBox ? "searchBox-active" : "searchBox-inactive"} onClick={handleSearchBox} />
                <button className="search-info"><FontAwesomeIcon icon={faSearch} size="lg" /><span className="icon-info">search</span></button>
            </div>
            <div className="nav-icons" id="mic"><FontAwesomeIcon icon={faMicrophone} size="lg" />
                <span className="icon-info">Search with your voice</span>
            </div>
        </div>

    )
}
