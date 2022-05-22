import { createSlice , nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id:'1',
        title:"Learning Redux Toolkit",
        content:"I've heard good things",
        date:sub(new Date(),{minutes:10}).toISOString(),
    },
    {
        id:'2',
        title:"Slices...",
        content:"The more I say slice,the more I want Pizza.",
        date:sub(new Date(),{minutes:5}).toISOString(),
    }
]

const postsSlice= createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title,content,userId){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        userId,
                        date:new Date().toISOString(),
                        }
                    }
                }
            }
        }     
    }
)

export const selectAllPosts = (state) => state.posts;
// 拆分開來export 以便之後別的compnent的新增或更改
export const { postAdded } = postsSlice.actions

export default postsSlice.reducer