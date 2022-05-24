import React from "react";
import { Link } from "react-router-dom";
import './Style.css';



class AddContact extends React.Component{
    constructor(props){
        super(props);
    this.state = {
        name:'',
        email:''
    }
    }
    add=(e)=>{
        if(this.state.name ==='' || this.state.email==='') alert('Isiin woy');
        else{
        e.preventDefault();
        this.props.dataHandle(this.state);
        this.setState({
            name:'',
            email:''
        });
        }
    }

    render(){
        return (
            <div className="main col-sm-5 p-3">
                <header><Link to="/"><i class="fa-solid fa-arrow-left"></i></Link></header>
                <h2 className="m-3 text-center">Add Contact</h2>
                
                <form className="d-flex flex-column m-3" onSubmit={this.add}>
                    <label for='name' ><h4>Name</h4></label>
                    <input type="text" 
                    name="name" 
                    value={this.state.name} 
                    onChange={(e)=> this.setState({name : e.target.value})}
                    required
                    ></input>
                    <label for='email' className="mt-2"><h4>E-Mail</h4></label>
                    <input type="email" 
                    name="email" value={this.state.email} 
                    onChange={(e)=> this.setState({email : e.target.value})}
                    required
                    ></input>
                    <button
                    type="submit"
                    className="btn m-3 btn-primary"
                    >Submit</button>
                </form>
            </div>
        )
    }
}

export default AddContact;