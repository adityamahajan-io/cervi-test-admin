import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'


export const storeConfig = configureStore({ 
    reducer: reducer, 
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({serializableCheck: false})]
 })

