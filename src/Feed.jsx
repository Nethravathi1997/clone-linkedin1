import React, { useEffect } from 'react'
import './feed.css'
import { useState } from 'react'
import InputOption from './InputOption'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Posts from './Posts'
import { db } from './firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from "react-flip-move"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState([]);
    const [post, setPost] = useState([]);


    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) => 
            setPost(snapshot.docs.map((doc) => ({
                
                    id:doc.id,
                    data:doc.data(),
                }))
        )
        );
    },[]);
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon />
                <form>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOption Icon = {ImageIcon} title='Photo' color='#70B5f9'/>
                <InputOption Icon = {SubscriptionsIcon} title='Video' color='#E7A33E'/>
                <InputOption Icon = {EventNoteIcon} title='Event' color='#C0CBCD'/>
                <InputOption Icon = {CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
            </div>
        </div>
        <FlipMove >
        {post.map(({id,data: {name, description, message}}) => (
            <Posts 
            key={id}
            name={name}
            description={description}
            message={message}
            />
        ) )}
        </FlipMove>

        

    </div>
  )
}


export default Feed