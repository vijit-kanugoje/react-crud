import React, { useEffect, useState } from "react";

import axios from "axios";

const FetchData = () => {
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(0);

  const addNumber = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const deleteNumber = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div>counter</div>
      <div>{counter}</div>
      <button onClick={addNumber}>Plus 1</button>
      <button onClick={deleteNumber}>Minus 1</button>

      <div style={{ marginTop: "50px" }}>
        <h5>UseEffect Fetching</h5>

        {posts.map((post) => (
          <div key={post.id}>
            <h6>{post.title}</h6>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
