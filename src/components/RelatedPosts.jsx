export default function RelatedPosts() {
  const relatedPosts = [
    {
      id: "1",
      title: "Tips Menjawab Pertanyaan Sulit dalam Wawancara",
      excerpt:
        "Panduan lengkap untuk menjawab pertanyaan yang sulit dan menjebak dalam wawancara kerja.",
      image:
        "https://www.blogtyrant.com/wp-content/uploads/2015/08/blog-design-examples.png",
      category: "Karir",
      readTime: "5 menit",
    },
    {
      id: "2",
      title: "Cara Menulis CV yang Menarik Perhatian Recruiter",
      excerpt:
        "Pelajari cara membuat CV yang menonjol dan menarik perhatian recruiter dalam hitungan detik.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJmGQU-YJkAWvjqyS0zA6Ul5zqRPNBK_8YA&s",
      category: "Karir",
      readTime: "4 menit",
    },
    {
      id: "3",
      title: "Persiapan Mental Menghadapi Wawancara Kerja",
      excerpt:
        "Strategi mengatasi kecemasan dan mempersiapkan mental sebelum wawancara kerja.",
      image:
        "https://www.elegantthemes.com/blog/wp-content/uploads/2018/11/shutterstock_1049564585-960.jpg",
      category: "Karir",
      readTime: "3 menit",
    },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Artikel Terkait</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>{post.category}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-bold text-lg mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {post.excerpt}
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-sky-600 hover:text-sky-800 font-medium text-sm"
              >
                Baca selengkapnya →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
