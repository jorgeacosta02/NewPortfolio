import { configureStore } from "@reduxjs/toolkit"
import menuReducer from '../slices/menuSlice'
import moonReducer from '../slices/moonSlice'

export const store = configureStore ({
  reducer: {
    menu: menuReducer,
    moon: moonReducer
  }
})