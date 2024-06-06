
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authConvert } from '../api/authConvert'
import { authNews } from '../api/authNews'



const RootReducer = combineReducers({
  [authConvert.reducerPath]: authConvert.reducer,
  [authNews.reducerPath]: authNews.reducer
})



export const store = configureStore({
  reducer: RootReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(authConvert.middleware,authNews.middleware)
})