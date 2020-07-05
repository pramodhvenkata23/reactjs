
import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import '../styles/login.css';



class login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render(){
        return(
        <div className="main-div" >
            <form>
            <span style={{fontSize:"30px",fontWeight:"bold"}}>Please click login</span><br /><br />
            
            <input type = "text" onChange = {this.onUserNameChange} value = {this.state.userName} placeholder="Username" required /><br />
            
            <input type = "password" onChange = {this.onPasswordChange} value = {this.state.password} placeholder="Password" required/><br /><br />
            <button className="button" type="submit" onClick = {this.onLoginClick} >Login</button>
            </form>
        </div>
        );
    }

    onLoginClick = ()=>{
        this.props.history.push("/home", {userName: this.state.userName},{password: this.state.password})
    }

    onUserNameChange =(e)=>{
        this.setState({
            userName: e.target.value
        })
    }

    onPasswordChange =(e)=>{
        this.setState({
            password: e.target.value
        })
    }
}
            
export default login;