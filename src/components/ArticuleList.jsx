import { useState } from "react";
import { useEffect } from "react";
import Articule from "./Articule";
import "./articule-list.css"

const ArticuleList = () => {
    const [articules,setArticules] = useState();
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLV/search?nickname=Alcazab', {
            headers:  {Authorization: "APP_USR-5989605175714950-080612-f02c7a2373b595a691e1f21cc953bd17-114901964"}    })
            .then(response => {
              return response.json()
            })
            .then(data => {
                setArticules(data.results)
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