import { useParams, useNavigate } from "react-router-dom";
import { PostForm } from "../components/PostForm";
import type { Post } from "../types/Post";

interface Props {
  posts: Post[];
  onUpdate: (id: number, post: Omit<Post, "id" | "date">) => void;
}

export const EditPost = ({ posts, onUpdate }: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === Number(id));
  if (!post) return <div>Không tìm thấy bài viết</div>;

  const handleSubmit = (data: Omit<Post, "id" | "date">) => {
    onUpdate(post.id, data);
    alert("Cập nhật thành công!");
    navigate(`/posts/${post.id}`);
  };

  return <PostForm post={post} onSubmit={handleSubmit} onCancel={() => navigate(`/posts/${post.id}`)} />;
};
