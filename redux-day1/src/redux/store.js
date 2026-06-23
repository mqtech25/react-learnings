import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice' //counterSlice.reducer

export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})