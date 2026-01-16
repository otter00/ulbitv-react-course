import { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "C#", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);
  //const [value, setValue] = useState("test");

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

      <h1>Posts list</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default App;
