import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './PostSlice'
 const reactionEmoji={
    thumbsUp:'👍',
    wow:'🙂',
    heart:'🤝',
    rocket:'🚀',
    coffe:'☕️',
}
export default function ReactionButtons({post}) {
    const dispatch = useDispatch()
    const reactionButton = Object.entries(reactionEmoji).map(([name,emoji])=>{
        return <button className='btn btn-info m-2' onClick={()=>dispatch(reactionAdded({userId:post?.id,reaction:name}))}>{emoji}{post?.reactions[name]}</button>
    })
  return (
    < >
        {reactionButton}
    </>
  )
}
