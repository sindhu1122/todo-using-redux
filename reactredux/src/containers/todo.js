import { connect } from 'react-redux'
import Todo from '../components/App'

const mapStateToProps = (state) => {
    return {
        keyword: state.todo.keyword,
        list: state.todo.list,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        get setKeyword() {
            return (value) => {
                dispatch({
                    type:'SET_TODO_KEYWORD',
                    payload: value
                })
                
            }
        },

        get setTodoList() {
            return (value) => {
                let item = {
                    value,
                    edit: false,
                    done: false
                }
                dispatch({
                    type:'SET_TODO_LIST',
                    payload: item
                })

                this.setKeyword('')
            }
        },

        get setDoneList() {
            return (receivedIndex) => {
                dispatch((dispatch, getState) => {
                    let list = getState().todo.list;
                    let newList = list.map((todo, index) => {
                        if(index === receivedIndex) {
                            return {
                                ...todo,
                                done: true
                            }
                        } else {
                            return todo
                        }
                    })
                    dispatch({
                        type:'SET_TODO_DONE',
                        payload: newList
                    })
                })
            }
        },

        get setEditList() {
            return (receivedIndex) => {
                dispatch((dispatch, getState) => {
                    let list = getState().todo.list;
                    let newList = list.map((todo, index) => {
                        if(index === receivedIndex) {
                            return {
                                ...todo,
                                edit: true
                            }
                        } else {
                            return todo
                        }
                    })
                    dispatch({
                        type:'SET_TODO_EDIT',
                        payload: newList
                    })
                })
            }
        },

        get setDeleteList() {
            return (receivedIndex) => {
                dispatch((dispatch, getState) => {
                    let list = getState().todo.list
                    // let newList = list.map((todo, index) => {
                    //     if(index !== receivedIndex) {
                    //         return todo
                    //     }
                    // })
                    let newList=[];
                    list.forEach((element , index) => {
                        if(index !== receivedIndex){
                            newList.push(element)
                        }
                    });
                    dispatch({
                        type:'SET_TODO_EDIT', 
                        payload: newList
                    })
                })
            }
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo)