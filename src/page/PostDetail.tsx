import { useParams, useNavigate } from "react-router-dom";
import type { Post } from "../types/Post";

interface Props {
  posts: Post[];
  onDelete: (id: number) => void;
}

export const PostDetail = ({ posts, onDelete }: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === Number(id));
  if (!post) return <div>Không tìm thấy bài viết</div>;

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      onDelete(post.id);
      navigate("/");
    }
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.thumbnail} alt={post.title} />
      <p>Tác giả: {post.author}</p>
      <p>Ngày: {post.date}</p>
      <p>Thể loại: {post.category}</p>
      <p>{post.content}</p>
      <button onClick={() => navigate("/")}>Quay lại</button>
      <button onClick={() => navigate(`/posts/edit/${post.id}`)}>Chỉnh sửa</button>
      <button onClick={handleDelete}>Xóa bài viết</button>
    </div>
  );
};
