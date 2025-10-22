import { useNavigate } from "react-router-dom";
import { PostForm } from "../components/PostForm";
import type { Post } from "../types/Post";


interface Props {
  onAdd: (post: Omit<Post, "id" | "date">) => void;
}

export const CreatePost = ({ onAdd }: Props) => {
  const navigate = useNavigate();
  const handleSubmit = (data: Omit<Post, "id" | "date">) => {
    onAdd(data);
    alert("Đăng bài thành công!");
    navigate("/");
  };
  return <PostForm onSubmit={handleSubmit} onCancel={() => navigate("/")} />;
};
