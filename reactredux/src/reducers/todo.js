const initialState = {
    keyword: '',
    list: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TODO_LIST':
            return {
               
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
            
        case 'SET_TODO_KEYWORD':
            return {
                ...state,
                keyword: action.payload
            }
        case 'SET_TODO_DONE':
            return{
            ...state,
            list: action.payload
             }
        case 'SET_TODO_EDIT':
            return{
                ...state,
                list: action.payload
            }
        case 'SET_TODO_DELETE': 
            return {
               ...state,
               list: action.payload
            }    
        default: 
            return state
    }
}