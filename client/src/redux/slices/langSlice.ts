import { createSlice } from "@reduxjs/toolkit";


interface ILang{
    lang: boolean
}

const initialState: ILang = {
    lang: false
}

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        toggleLang: (state) => {
            state.lang = !state.lang
        }
    }
})

export const { toggleLang } = langSlice.actions;

export const selectLangState = ( state:any ) => state.lang

export default langSlice.reducer;