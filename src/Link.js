import React from "react";

function Link({title,url,id}){
    return(
        <div>
            <a href={url}>{title}</a>
        </div>
    )
}

export default Link
//jsx

Link('hello world','https://react.dev')