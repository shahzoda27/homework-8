import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, postAdded } from './PostSlice'
import { useState } from 'react'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
export default function PostList() {
    const posts = useSelector(getAllPosts)
    const dispatch = useDispatch()
    const [selectedName, setSelectedName] = useState('');
    const renderPosts = posts.map((item,index)=>{
        return <div className="card my-3" key={index}>
           <div className="card-body">
           <h1>{item.title}</h1>
            <h5> by {item.selectedName}</h5>
            <p>{item.content}</p>
            <TimeAgo time={item.date}/>
            <ReactionButtons post={item}/>
           </div>
        </div>
    })
    const changeUser =(e)=>{
        e.preventDefault()
        let title = e.target[1].value
        let content = e.target[2].value
        dispatch(postAdded({selectedName,title,content}))
    }
    const handleNameChange = (e) => {
        setSelectedName(e.target.value);
    };
  return (
    <div className='container'>
        <h1 className='text-center my-2'>Posts</h1>
        <div className="row">
            <div className="col-md-8">
                {renderPosts}
            </div>
            <div className="col-md-4">
            <form  onSubmit={changeUser}>
            <select className="form-control my-2" onChange={handleNameChange} value={selectedName}>
                <option value="">Select a name</option>
                <option value="Shahzoda">Shahzoda</option>
                <option value="Nuriddin">Nuriddin</option>
                <option value="Gulasal">Gulasal</option>
                <option value="Behruz">Behruz</option>   
            </select>           
             <input type="text"  placeholder='title' className='form-control my-2'  />
            <input type="text"  placeholder='content' className='form-control my-2' />
            <button className='btn btn-primary' >Add User</button>
        </form>
            </div>
        </div>
    </div>
  )
}
