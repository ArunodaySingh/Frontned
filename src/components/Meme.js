import React,{useState} from 'react';
import axios from "axios";
import '../style/style.css';

function Meme({ memes })
{
  const [caption, setCaption] = useState('')
  const [url, setUrl] = useState('')
  const [id, setId] = useState('')

  const handleSubmit = (e) => {
       console.log(id);
      axios.patch('https://xmemeapi1.herokuapp.com/memes'+id, {
          url: url,
          caption: caption

      }).then((response) => {
          console.log("meme updated successfully")

      }, (error) => {
          console.log("Sorry! cannot update your meme right now")
      });

  }

  const obj=
  {
  boxShadow:"5px 5px 15px -3px rgba(0,0,0,0.3)",
  color:"pink"
  }
  const btn={
    display:"block",
    width:"100%",
    positon:"relative",
    color:"green",
    boxShadow:"0.5 0.5 0.5 -3.5"
  }

    return (
        <div className="meme">

            <h2 style={obj} >Checkout already submitted Memes</h2>
            <div className="steps">
            <h3 >Steps to Update your meme</h3>
            <ul >

                <li>Enter your meme I'd</li>
                <li>Enter your new Caption</li>
                <li>Enter your new meme URL</li>

            </ul>
            </div>

            {memes.map(function(meme,i)
              {
                if(i<=100)
                {
                  return (
                      <div className="new-meme" >
                          <div className="content">
                              <p className="name">Submitted by:  {meme.name}</p>
                              <p className="caption">{meme.caption}</p>

                              <img className="meme-image" on src={meme.url} alt="image" />
                              <form  onSubmit={handleSubmit}>
                              <div >

                                  <input style={btn} type="id"
                                      value={id}
                                      required={true}
                                      placeholder="Enter Meme Id "
                                      onChange={(e) => { setId(e.target.value) }}>

                                  </input>
                              </div>
                              <div >

                                  <input style={btn} type="caption"
                                      value={caption}
                                      required={true}
                                      placeholder="Enter meme Caption"
                                      onChange={(e) => { setCaption(e.target.value) }}>

                                  </input>
                              </div>
                                  <div >

                                      <input style={btn}type="url"
                                          value={url}
                                          required={true}
                                          placeholder="Enter meme Url"
                                          onChange={(e) => { setUrl(e.target.value) }}>

                                      </input>
                                  </div>

                                  <button  type="submit" style={btn} >Update Meme</button>
                              </form>

                          </div>
                      </div>
                  )
                }
            })}
        </div>


    );
}

export default Meme;
