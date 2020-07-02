

import React from 'react'
import '../styles/login.css';
class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        
        return(
        <div  className="main-div">
            <span style={{fontSize:"30px",fontWeight:"bold"}}>Welcome to home page</span> <br></br>
            <span style = {{fontSize:"30px",color: "green"}}>{this.props.history.location.state.userName}</span><br /><br />
            <button className="button" onClick = {this.onLogoutClick} >Logout</button>
        </div>
        );
    }

    onLogoutClick = ()=>{
        this.props.history.push("/")
    }
}

export default Home;
