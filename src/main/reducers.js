import { combineReducers } from 'redux'
import apartamentosReducer from '../dashboard/apartamentos/apartamentosReducer'
import chatReducer from '../chat/chatReducer';

const rootReducer = combineReducers({
    apartamentos: apartamentosReducer,
    chat: chatReducer
})

export default rootReducer