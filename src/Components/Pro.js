import React from "react";
import { Link, useParams } from "react-router-dom";

const Pro=(props)=>{
    let id = useParams();
    let proData = {};
    props.data.forEach(element => {
        if(element.id == id.name){
            proData = element;
        }
    });
    return (
            <div className="bg-white p-5 m-auto mt-5 w-50">
                <Link to="/"><i class="fa-solid fa-arrow-left m-3"></i></Link>
                <h2 className="text-center">Halo selamat datang {proData.name}</h2>
                <p className="text-center">e-mail : {proData.email}</p>
            </div>
    )
}

export default Pro;