import React from 'react';
import '../styles/login.css';
import Table from './usertable';
import UserTable from './usertable';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userprofiles:[
             {isActive: true, _id: "5c4cc2109487b0003924f1e3", role: "Administrator", firstName: "Test", lastName: "Admin"},
             {isActive: true, _id: "5e2cc6df7a91aaf820510a55", role: "Volunteer", firstName: "Sidd", lastName: "Test"}, 
             {isActive: true, _id: "5ede6be453a0480017164a5b", role: "Volunteer", firstName: "Volunteer 1", lastName: "Test"}]
        }}

    render(){
        
        return(
        <div  className="main-div">
            <span style={{fontSize:"30px",fontWeight:"bold"}}>Welcome to home page</span> <br></br>
            <span style = {{fontSize:"30px",color: "green"}}>{this.props.history.location.state.userName}</span><br/><br/>
            <UserTable UserData={this.state.userprofiles}/>
            <button className="button" onClick = {this.onLogoutClick} >Logout</button>
        </div>
        );
    }

    onLogoutClick = ()=>{
        this.props.history.push("/")
    }
}

export default Home;
