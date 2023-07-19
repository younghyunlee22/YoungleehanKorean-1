export default function Jumbotron({
    title,
    directory = null,
    subDirectory = null,
}) {
    const highlightedStyle = { color: "#ffbf35", fontSize: "16px" };
    const defaultStyle = { color: "#706866", fontSize: "16px" };

    return (
        <>
            <div style={{ width: "100vw", backgroundColor: "#f6f4ee" }}>
                <div style={{ maxWidth: "1170px", margin: "auto" }}>
                    <h1
                        style={{
                            fontWeight: "700",
                            fontSize: "32px",
                            padding: "43px 0 15px 0",
                        }}
                    >
                        {title}
                    </h1>
                    <h5
                        style={{
                            ...defaultStyle,
                            paddingBottom: "65px",
                        }}
                    >
                        {directory && (
                            <>
                                Home/{" "}
                                <span
                                    style={
                                        subDirectory
                                            ? defaultStyle
                                            : highlightedStyle
                                    }
                                >
                                    {directory}
                                </span>
                            </>
                        )}
                        {subDirectory && (
                            <>
                                /{" "}
                                <span style={highlightedStyle}>
                                    {subDirectory}
                                </span>
                            </>
                        )}
                    </h5>
                </div>
            </div>
        </>
    );
}
