import React from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { useState } from "react";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  //const bodyInputRef = useRef();
  const addNewPost = (e) => {
    // предотвращает обновление страницы по умолчанию при нажатии на кнопку
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    // после того, как ввели данные в инпуты и опубликовали пост,
    // очищаем инпуты
    setPost({ title: "", body: "" });
    // current - DOM-элемент и его значение
    //console.log(bodyInputRef.current.value);
  };

  return (
    <div>
      <form>
        {/* управляемый компонент */}
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />

        {/* неуправляемый компонент
        <MyInput 
        ref={bodyInputRef} 
        type="text" 
        placeholder="Описание поста" /> */}

        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
