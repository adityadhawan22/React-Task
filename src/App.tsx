import { useEffect, useState } from "react";
import "./App.css";
import { Post } from "./components/Posts";
import { PostsType, PostsSchema } from "./helpers/schema";

function App() {
  const [posts, setPosts] = useState<PostsType>([]);

  const fetchPosts = async () => {
    const data = await fetch("http://localhost:3001/posts");
    const response = await data.json();

    const postsResponse = PostsSchema.parse(response);
    setPosts(postsResponse);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const searchPosts = () => {
    // TODO: Implement search
  };

  return (
    <>
      <input type="text" onChange={searchPosts} placeholder="Search..." />
      <h2>Post Feed:</h2>
      {posts.map((post) => (
        <Post key={post.id} name={"TODO:"} title={post.title} />
      ))}
    </>
  );
}

export default App;
