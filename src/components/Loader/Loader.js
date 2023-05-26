import React from "react";
import "./Loader.css";

function Loader() {
    return (
        <div
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "2",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                background: "rgba(0, 0, 0, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;
