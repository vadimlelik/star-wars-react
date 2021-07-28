import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { setLocalStorege } from '@utils/localStorege'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
  //  
  setLocalStorege('store', store.getState().favoriteReducer)
})

export default store