import type { Post } from "../types/Post";
import { useNavigate } from "react-router-dom";

interface Props {
  post: Post;
  onDelete: (id: number) => void;
}

export const PostCard = ({ post, onDelete }: Props) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      onDelete(post.id);
    }
  };

  return (
    <div className="post-card">
      <img src={post.thumbnail} alt={post.title} />
      <h3>{post.title}</h3>
      <p>Tác giả: {post.author}</p>
      <p>Ngày: {post.date}</p>
      <p>{post.content.substring(0, 100)}...</p>
      <button onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
      <button onClick={handleDelete}>Xóa</button>
    </div>
  );
};
