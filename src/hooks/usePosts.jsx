import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  // useMemo - мемоизация, запись в кэш способа сортировки и массива,
  // если они неизменны, не будет отрабатывать по новой, а
  // возьмет запомненные данные из кэша
  // отработает по новой только если изменен алгоритм сортировки
  // или массив постов
  const sortedPosts = useMemo(() => {
    console.log(" GET SORTED POSTS ");
    if (sort) {
      return [...posts.sort((a, b) => a[sort].localeCompare(b[sort]))];
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query),
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
