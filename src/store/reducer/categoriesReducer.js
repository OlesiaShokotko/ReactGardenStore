const defaultState = []

const ADD_NEW_CATEGORIES_LIST = 'ADD_NEW_CATEGORIES_LIST'


export const categoriesReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_NEW_CATEGORIES_LIST:
            return [...action.payload]
        default:
            return state
    }
}

export const addNewCategoriesListAction = (payload) => ({type: ADD_NEW_CATEGORIES_LIST, payload})