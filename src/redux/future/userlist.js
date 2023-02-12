import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  UserBio: JSON.parse(localStorage.getItem("User")) || [],
  UserPin:JSON.parse(localStorage.getItem("Pins")) || [],
}
export const todolist = createSlice(
  {
    name: "UserMalumotlari",
    initialState,
    reducers: {
      addUser: (state, action) => {

        return { ...state, UserBio: action.payload }
      },
       addPins:(state,action)=>{
            state.UserPin.push(action.payload)
            localStorage.setItem("Pins",JSON.stringify(state.UserPin))
       }
  

    }
  }
)

export const { addUser,addPins } = todolist.actions
export default todolist.reducer
