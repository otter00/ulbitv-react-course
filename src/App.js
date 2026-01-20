import { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "C#", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      {/* <h1>{value}</h1>
      <input
        onChange={(event) => setValue(event.target.value)}
        type="text"
        value={value}
      /> */}

      <Counter />
      <ClassCounter />

      <PostForm create={createPost} />

      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title={"Список постов 1"} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;

// 01.05.00
