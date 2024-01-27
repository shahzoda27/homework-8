import { createSlice } from "@reduxjs/toolkit";
import sub from "date-fns/sub";
let date = sub(new Date(),{minutes:10}).toISOString()
const initialState = [
    {
    id:1,title:"Lesson-7",
    selectedName:"Nuriddin",
    date:date,
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore libero voluptates illo recusandae deleniti.",
    reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffe:0,
    }
  }
]
const PostSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
           reducer(state,action){
            state.push(action.payload)
           },
           prepare({selectedName,title,content}){
            return {
                payload:{
                    selectedName,
                    title,
                    content,
                    reactions:{
                        thumbsUp:0,
                        wow:0,
                        heart:0,
                        rocket:0,
                        coffe:0,
                    },
                    date:new Date().toISOString()
                }
            }
           }
        },
        reactionAdded(state,action){
            const {userId,reaction} = action.payload
            let single_post = state.find(item => item.id === userId)
            single_post.reactions[reaction]+=1
        }
    }
})
export const getAllPosts = (state) =>state.posts
export const {postAdded,reactionAdded} = PostSlice.actions
export default PostSlice.reducer