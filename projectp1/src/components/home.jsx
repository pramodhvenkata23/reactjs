import React from 'react';
import '../styles/login.css';
import {getAllUsers} from '../actions/index';
import UserTable from './usertable';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props){
        super(props);
        }

    render(){
        console.log(this.props.state.fetchUsers)
        return(
        <div  className="main-div">
            <span style={{fontSize:"30px",fontWeight:"bold"}}>Welcome to home page</span> <br></br>
            <span style = {{fontSize:"30px",color: "green"}}>{this.props.history.location.state.userName}</span><br/><br/>
            <UserTable UserData={this.props.state.fetchUsers}/>
            <button className="button" onClick = {this.onLogoutClick} >Logout</button>
        </div>
        );
    }

    onLogoutClick = ()=>{
        this.props.history.push("/")
    }
    componentDidMount(){
        this.props.getAllUsers()
    }
}
const mapStateToProps = state => {return {state}}
export default connect(mapStateToProps,{getAllUsers})(Home);
