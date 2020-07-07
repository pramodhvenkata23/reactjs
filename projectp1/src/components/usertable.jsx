import React from 'react';

const Userheader = ()=>{
    return(<tr>
        <th>_id</th>
        <th>role</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Active</th>
        </tr>)
}

const UserData = (props) =>{
    return(
        <tr>
            <td>{props.userprofile._id}</td>
            <td>{props.userprofile.role}</td>
            <td>{props.userprofile.firstName}</td>
            <td>{props.userprofile.lastName}</td>
            <td><input type="checkbox" checked={props.userprofile.isActive}/></td>
        </tr>
    )
}

const UserTable = (props) => {
    return(
        <div>
        <table>
            <Userheader/>
            {
                props.UserData.map(user=>{
                    return <UserData userprofile={user}/>
                })
            }
        </table>
        </div>
    )
}
export default UserTable;