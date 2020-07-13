const fetchUsers = (state = [], action) => {

    switch (action.type){
        case 'GET_USERS':
            return [...state,action.users]
        case 'DEL_USERS':
            return [...state,action.deleteId]
        default:
            return state
    }
}


export {fetchUsers}

