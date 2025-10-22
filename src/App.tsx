import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PostList } from "./page/PostList";
import { PostDetail } from "./page/PostDetail";
import { CreatePost } from "./page/CreatePost";
import { EditPost } from "./page/EditPost";
import { initialPosts } from "./data/Posts";
import type { Post } from "./types/Post";

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const deletePost = (id: number) => setPosts(posts.filter(p => p.id !== id));

  const addPost = (newPost: Omit<Post, "id" | "date">) => {
    const id = Math.max(...posts.map(p => p.id)) + 1;
    setPosts([{ ...newPost, id, date: new Date().toISOString().split("T")[0] }, ...posts]);
  };

  const updatePost = (id: number, updatedPost: Omit<Post, "id" | "date">) => {
    setPosts(posts.map(p => p.id === id ? { ...p, ...updatedPost } : p));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList posts={posts} onDelete={deletePost} />} />
        <Route path="/posts" element={<PostList posts={posts} onDelete={deletePost} />} />
        <Route path="/create" element={<CreatePost onAdd={addPost} />} />
        <Route path="/posts/:id" element={<PostDetail posts={posts} onDelete={deletePost} />} />
        <Route path="/posts/edit/:id" element={<EditPost posts={posts} onUpdate={updatePost} />} />
      </Routes>
    </Router>
  );
}

export default App;
