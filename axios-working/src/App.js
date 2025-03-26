import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  // using promise
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => {
  //     setData(res.data);
  //     // console.log(res.data);
  //   })
  //   .catch((error) => {
  //     setIsError(error.message)
  //       console.log(setIsError);
  //   })
  // }, []);

  //using await
  // get
   const fetchPosts = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsError(error.message)
      }
    };

    // post
    const postData = async () => {
      try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", { title: 'New Post', body: 'This is the post content' });
        console.log('Post created:', response.data);
      } catch (error) {
        console.error('Error creating post:', error);
        setIsError(error.message);
      }
    };

    // patch
    const updatePost = async (postId, updatedData) => {
  try {
    const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedData);
    console.log('Post updated:', response.data);
  } catch (error) {
    console.error('Error updating post:', error);
    setIsError(error.message)
  }
};
 // delete
 const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    console.log('Post deleted:', response.status);
  } catch (error) {
    console.error('Error deleting post:', error);
    setIsError(error.message)
  }
};


  
  useEffect(() => {
    fetchPosts();
    postData();
    updatePost(1, {'title': 'Update Title'})
    // deletePost(1);
    
  },[])

  
  postData()
  return (
    <>
      <h1>Axios Working</h1>
      {isError !== "" && <h2>{setIsError}</h2>}
      <div className="grid">
        {data.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
