import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

const PostList = ({ posts, title, remove }) => {
  const nodeRef = useRef(null);

  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <TransitionGroup>
          <CSSTransition
            key={post.id}
            nodeRef={nodeRef}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        </TransitionGroup>
      ))}
    </div>
  );
};

export default PostList;
