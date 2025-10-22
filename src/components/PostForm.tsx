import { useState } from "react";
import type { FormEvent } from "react";
import type { Post } from "../types/Post";

interface Props {
  post?: Post;
  onSubmit: (post: Omit<Post, "id" | "date">) => void;
  onCancel: () => void;
}

export const PostForm = ({ post, onSubmit, onCancel }: Props) => {
  const [title, setTitle] = useState(post?.title || "");
  const [author, setAuthor] = useState(post?.author || "");
  const [thumbnail, setThumbnail] = useState(post?.thumbnail || "");
  const [content, setContent] = useState(post?.content || "");
  const [category, setCategory] = useState<Post["category"]>(post?.category || "Công nghệ");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.length < 10) return alert("Tiêu đề phải ít nhất 10 ký tự");
    if (author.length < 3) return alert("Tác giả phải ít nhất 3 ký tự");
    if (content.length < 50) return alert("Nội dung phải ít nhất 50 ký tự");
    onSubmit({ title, author, thumbnail, content, category });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tiêu đề</label>
        <input value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Tác giả</label>
        <input value={author} onChange={e => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Thumbnail URL</label>
        <input value={thumbnail} onChange={e => setThumbnail(e.target.value)} />
      </div>
      <div>
        <label>Nội dung</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} rows={10}></textarea>
      </div>
      <div>
        <label>Thể loại</label>
        <select value={category} onChange={e => setCategory(e.target.value as Post["category"])}>
          <option>Công nghệ</option>
          <option>Du lịch</option>
          <option>Ẩm thực</option>
          <option>Đời sống</option>
          <option>Khác</option>
        </select>
      </div>
      <button type="submit">{post ? "Cập nhật" : "Đăng bài"}</button>
      <button type="button" onClick={onCancel}>Hủy</button>
    </form>
  );
};
