import { configureStore } from "@reduxjs/toolkit"
import menuReducer from '../slices/menuSlice'
import moonReducer from '../slices/moonSlice'
import langReducer from '../slices/langSlice'

export const store = configureStore ({
  reducer: {
    menu: menuReducer,
    moon: moonReducer,
    lang: langReducer,
  }
})