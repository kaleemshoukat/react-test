import React, {useState} from "react";

const LiveWidth= () => {
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener("resize", ()=>{
        setWidth(window.innerWidth);
    });

    return (
        <div className="main-wrap">
            <div className="col-md-6" id="wrap">
                <span>Width= {width}</span>
                <input type="number" name="height" onChange={e => setDivHeight(e.target.value)} className="form-control" />
            </div>
        </div>
    )
}

export default LiveWidth;