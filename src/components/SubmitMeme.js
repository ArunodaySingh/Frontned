import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../style/style.css';

toast.configure()

const SubmitMeme = () => {
    const [name, setName] = useState('')
    const [caption, setCaption] = useState('')
    const [url, setUrl] = useState('')

    const handleSubmit = (e) => {
        axios.post('https://xmemeapi1.herokuapp.com/memes', {
            name: name,
            url: url,
            caption: caption

        }).then((response) => {
            console.log("meme posted successfully")

        }, (error) => {
            console.log("Sorry! cannot post your meme right now")
        });


    }
    const obj=
    {

    boxShadow:"5px 5px 15px -3px rgba(0,0,0,0.3)",
    color:"pink"
    }

    return (
        <div className="post-meme">
            <h2 className="submit" style={obj}>Submit Your Memes</h2>
            <div >
                <div className="steps" >
                    <h3 >Steps to upload your memes</h3>
                    <ul >

                        <li>Enter your name</li>
                        <li>Enter your Caption</li>
                        <li>Enter your meme URL</li>

                    </ul>
                </div>
            </div>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <input type="text"
                        value={name}
                        placeholder="Name"
                        required={true}
                        onChange={(e) => { setName(e.target.value) }}></input>
                </div>
                <div className="field">
                    <label className="label">Caption</label>
                    <input type="text"
                        value={caption}
                        placeholder="Caption"
                        onChange={(e) => { setCaption(e.target.value) }}></input>
                </div>
                <div className="field">
                    <label className="label">Image Url</label>
                    <input type="url"
                        value={url}
                        required={true}
                        placeholder="Enter meme Url"
                        onChange={(e) => { setUrl(e.target.value) }}>

                    </input>
                </div>
                <button className="btn" type="submit">Submit Meme</button>
            </form>
        </div>
    );
}

export default SubmitMeme;
