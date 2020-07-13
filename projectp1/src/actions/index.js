import {getUsersApi} from '../api/api';

export const getUserAction = (users) => ({
    type:'GET_USERS',
    users
})

export const getAllUsers = () => dispatch => {
    getUsersApi().then(data =>{
        dispatch(getUserAction(data))
    }).catch(err=>{
        console.log("Error: " + err)
    })
}

export const deleteUserAction =(deletedId)=>({
    type:'DEL_USERS',
    deletedId
})

export const deleteUser = (deletedId)=> dispatch =>{
     dispatch(deleteUserAction(deletedId))
    
    }
