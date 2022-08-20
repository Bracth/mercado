import { useState } from "react";
import { useEffect } from "react";
import Articule from "./Articule";
import "./articule-list.css"
import { getArticulesId } from "./service";

const ArticuleList = () => {
    const [articules,setArticules] = useState();
    useEffect(() => {
        getArticulesId().then(response => {
            setArticules(response.results)
        })
    },[])

    return <>
         <div className="container">

        {articules?.map((articule) => {
            return <Articule articule={articule} key={articule.id}/>
        })}
        </div>
        
    </>
}

export default ArticuleList;