import React from "react";
import "../styles/pages/BlogList.scss";

export const Box = () => {
    return (
        <div className="box">
            <div className="card-wrapper">
                <div className="card">
                    <div className="UI-UX-review">
                        <div className="text-wrapper">Korean Lesson</div>
                        <p className="p">Lorem Ipsum is simply dummy text of the printing typesetting industry.</p>
                        <div className="image-date">
                            <div className="overlap-group">
                                <div className="image" />
                                <div className="black-bg" />
                                <div className="div">5 July 2023</div>
                            </div>
                        </div>
                        <div className="read-post">
                            <img className="vector" alt="Vector" src="vector.svg" />
                            <div className="text-wrapper-2">Read post</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Box;