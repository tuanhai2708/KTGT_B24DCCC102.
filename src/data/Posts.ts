import type { Post } from "../types/Post";

export const initialPosts: Post[] = [
  {
    id: 1,
    title: "Bài viết công nghệ đầu tiên",
    author: "Tuấn Trần",
    thumbnail: "https://picsum.photos/400/200?random=1",
    content: "Nội dung chi tiết...",
    category: "Công nghệ",
    date: "2025-10-22",
  },
  {
    id: 2,
    title: "Du lịch mùa thu",
    author: "Nguyễn Văn A",
    thumbnail: "https://picsum.photos/400/200?random=2",
    content: "Nội dung chi tiết...",
    category: "Du lịch",
    date: "2025-10-20",
  },
  // Thêm các bài viết khác
];
