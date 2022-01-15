import React from "react";

function buttonStandard(p) {
    return (
        <button
            className=" flex font-bold uppercase  text-primary hover:text-accent rounded-md active:bg-strong gap-1"
            onClick={(e) => {
                p.onClick(e);
            }}
        >
            {p.children}
        </button>
    );
}

export default buttonStandard;
