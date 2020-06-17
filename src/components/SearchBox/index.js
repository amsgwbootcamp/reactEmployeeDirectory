import React from "react";
import "./style.css";

function SearchBox(props) {
    return (
        <form className="search">
            <div className="form-group">
                <input
                    value={props.search}
                    //   onChange={props.handleInputChange}
                    name="employee"
                    type="text"
                    className="form-control"
                    id="employee"
                    placeholder="Search"
                />
            </div>
        </form>
    );
}

export default SearchBox;
