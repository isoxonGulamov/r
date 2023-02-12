import { configureStore } from "@reduxjs/toolkit";
import  todolist  from "./future/userlist";

 export const store = configureStore(
  {
   reducer: {
    User:todolist,
   }
  }
)