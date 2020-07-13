import React from 'react';
import '../styles/login.css';
import {getAllUsers,deleteUser} from '../actions/index';
import UserTable from './usertable';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props){
        super(props);
        }

    render(){
        debugger;
        let {fetchUsers} = this.props.state
        return(
        <div  className="main-div">
            <span style={{fontSize:"30px",fontWeight:"bold"}}>Welcome to home page</span> <br></br>
            <span style = {{fontSize:"30px",color: "green"}}>{this.props.history.location.state.userName}</span><br/><br/>
            {(fetchUsers && fetchUsers[0])?<UserTable UserData={fetchUsers[0]} deleteClick ={this.onDelete} />:null}
          Deleted Id :  <span>{(fetchUsers && fetchUsers[0])? fetchUsers[1]:''}</span><br/>
            <button className="button" onClick = {this.onLogoutClick} >Logout</button>
        
        </div>
        );
    }

    onDelete = (_id)=>{
        debugger;
        this.props.deleteUser(_id);
    }
    onLogoutClick = ()=>{
        this.props.history.push("/")
    }
    componentDidMount(){
        this.props.getAllUsers()
    }
}
const mapStateToProps = state => {return {state}}
export default connect(mapStateToProps,{getAllUsers,deleteUser})(Home);
