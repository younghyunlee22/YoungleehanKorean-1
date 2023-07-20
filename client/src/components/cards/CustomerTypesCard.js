// 👻 Developed by DanBi Choi on July 19th, 2023.
// -----------------------------------------------------

import { useState } from "react";
import { Link } from "react-router-dom";

export default function CustomerTypesCard({ data }) {
    //state
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <div
                style={{ height: "320px" }}
                className="card-box d-flex flex-column align-items-center justify-content-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {!isHovered && (
                    <div className="text-center">
                        <img
                            style={{ width: "70px", height: "70px" }}
                            src={data?.image}
                            alt={`${data?.name} Icon`}
                        />
                        <h3>{data?.name}</h3>
                    </div>
                )}
                {isHovered && (
                    <div className="text-start">
                        <h4>"{data?.msg}"</h4>
                        <p>{data?.subMsg}</p>
                        <Link to={data?.link}>
                            <button className="btn btn-outline-primary p-2">
                                View Story
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
