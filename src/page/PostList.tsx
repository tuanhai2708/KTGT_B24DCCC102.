import type { Post } from "../types/Post";
import { PostCard } from "../components/PostCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  posts: Post[];
  onDelete: (id: number) => void;
}

export const PostList = ({ posts, onDelete }: Props) => {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const filteredPosts = posts.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Danh sách bài viết ({filteredPosts.length})</h2>
      <div>
        <button onClick={() => navigate("/create")}>Viết bài mới</button>
        <input
          placeholder="Tìm theo tiêu đề..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>
      <div className="post-grid">
        {filteredPosts.map(p => (
          <PostCard key={p.id} post={p} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};
