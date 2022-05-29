import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Datafetching = () => {
  const [posts, setPosts] = useState([])
  const [val, setVal] = useState('')

const delay = 1;

  useEffect(( )=> {
    const timeOutId = setTimeout(() =>
    axios.get(`http://hn.algolia.com/api/v1/search?query=${val}`)
      .then(res => {
        console.log(res);
        setPosts(res.data.hits);
      })
      .catch(err=> {
        console.log(err);
      })
      ,1000);
    return () => clearTimeout(timeOutId);
  }, [val])
  


  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-12" style={{ backgroundColor: ' rgb(246, 246, 239)'}}>
        <div className="mt-4">
          {/* <div className="row"> */}
          <h1 style={{textAlign: 'center' , color: 'orange'}}>Prabal Fit Assignment</h1>
      <input type="text" style={{width: '100%'}} value={val} placeholder="Search  here....." onChange={e=> setVal(e.target.value)}/>
      {/* </div> */}
      <ul>
        {
          posts.map(data =>
            <li key={data.created_at_i} >
              <a style={{textDecoration: 'none', color: '#000'}} href={data.url} target="_blank">{data.title}</a></li>
            )
        }
      </ul>
      </div>
      </div>
    </div>
  )
}

export default Datafetching
