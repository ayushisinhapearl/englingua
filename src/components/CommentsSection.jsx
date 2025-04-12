"use client";

import { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState([
    {
      id: "1",
      author: "Budi Santoso",
      authorImage:
        "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg",
      date: "2 hari yang lalu",
      content:
        "Artikel yang sangat membantu! Saya akan menggunakan tips ini untuk wawancara minggu depan.",
      likes: 5,
    },
    {
      id: "2",
      author: "Siti Rahayu",
      authorImage:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
      date: "5 hari yang lalu",
      content:
        "Terima kasih atas artikelnya. Saya selalu gugup saat wawancara, tapi dengan kalimat-kalimat ini saya merasa lebih percaya diri.",
      likes: 3,
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now().toString(),
      author: "Anda",
      authorImage:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
      date: "Baru saja",
      content: newComment,
      likes: 0,
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  const handleLike = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  return (
    <div className="mt-16 border-t border-gray-200 pt-8">
      <h2 className="text-2xl font-bold mb-8">Komentar ({comments.length})</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
              alt="Your avatar"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500">
              <textarea
                rows={3}
                name="comment"
                id="comment"
                className="block w-full py-3 px-4 border-0 resize-none focus:ring-0 focus:outline-none sm:text-sm"
                placeholder="Tambahkan komentar..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-3 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Kirim Komentar
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <div className="flex-shrink-0">
              <img
                src={comment.authorImage || "/placeholder.svg"}
                alt={comment.author}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-medium text-gray-900">
                  {comment.author}
                </h3>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="mt-1 text-sm text-gray-700">{comment.content}</p>
              <div className="mt-2 flex items-center space-x-4">
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-gray-900 flex items-center"
                  onClick={() => handleLike(comment.id)}
                >
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    ></path>
                  </svg>
                  {comment.likes} Suka
                </button>
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Balas
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
