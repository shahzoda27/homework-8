import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "../featurs/users/UsersSlice";
import PostReducer from "../featurs/post/PostSlice";
const store = configureStore({
    reducer:{
        users:UsersReducer,
        posts:PostReducer
    }
})
export default store