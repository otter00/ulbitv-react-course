import { useMemo, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "C#", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);

  // const [selectedSort, setSelectedSort] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");

  const [filter, setFilter] = useState({ sort: "", query: "" });

  // const sortPosts = (sort) => {
  //   setSelectedSort(sort);
  //   console.log(sort);
  // };

  // useMemo - мемоизация, запись в кэш способа сортировки и массива,
  // если они неизменны, не будет отрабатывать по новой, а
  // возьмет запомненные данные из кэша
  // отработает по новой только если изменен алгоритм сортировки
  // или массив постов
  const sortedPosts = useMemo(() => {
    console.log(" GET SORTED POSTS ");
    if (filter.sort) {
      return [
        ...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])),
      ];
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query),
    );
  }, [filter.query, sortedPosts]);

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

      {/* <Counter />
      <ClassCounter /> */}

      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Список постов 1"}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;

//
