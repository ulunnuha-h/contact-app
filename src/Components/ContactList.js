import React from "react";
import { Link } from "react-router-dom";
import './Style.css';
import img from '../Image/kontak.jpg';

class ContactList extends React.Component{
    constructor(props){
        super(props);
    }

    clicked(name){
        this.props.removeData(name);
    }

    render() {
        return (
            <div className="main col-sm-6 p-3">
                <div className="d-flex align-items-center justify-content-between">
                    <h2 className="m-3">Contact List</h2>
                    <Link to="/add"><button>Add Contact</button></Link>
                </div>
                
                {this.props.data.map((ele)=>{

                    let s = "/pro/" + ele.id;

                    return(
                        <div className="m-3">
                        <div className="d-flex align-items-center"><Link to={s}>profile</Link>
                        <img src={img} className="img-fluid" style={{height : '60px',padding : '5px'}}></img> 
                        <div className="w-100">
                            <h4>{ele.name}</h4>
                            <div>{ele.email}</div>
                        </div>
                        <button className="btn-delete" ><i className="fa-solid fa-trash" onClick={() => this.clicked(ele.id)} > </i></button>
                        
                        </div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ContactList;