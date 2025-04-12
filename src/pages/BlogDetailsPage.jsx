import { ShareIcon, SearchIcon } from "lucide-react";
import RelatedPosts from "../components/RelatedPosts";
import CommentSection from "../components/CommentsSection";

export default function BlogDetails({ params }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300 hover:text-gray-700"
              >
                Bahasa
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Budaya
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Perjalanan
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Karir
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Kehidupan siswa
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Cerita siswa
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Blog Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Kalimat yang berguna saat wawancara kerja
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Author"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">Oleh Erin</p>
                <p className="text-xs text-gray-500">
                  in{" "}
                  <a href="#" className="text-gray-900 hover:underline">
                    Karir
                  </a>{" "}
                  · 3 menit
                </p>
              </div>
            </div>
            <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
              <ShareIcon className="h-4 w-4 mr-1" />
              Share
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-10">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg"
              alt="Featured image"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            Beberapa prospek membuat jantung Anda berdetak lebih kencang saat
            wawancara kerja. Menakutkan meskipun tampaknya duduk dan
            mendiskusikan diri Anda dengan manajer perekrutan, itu adalah
            sesuatu yang 99% orang telah lalui. Tapi jangan khawatir! Dengan
            sedikit latihan (dan beberapa kalimat yang tidak akan gagal), Anda
            akan berjalan menuju wawancara kerja dengan penampilan yang menarik
            seperti es krim di musim panas.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Untuk membantu Anda mempersiapkan diri, kami telah mengumpulkan
            beberapa kalimat mudah yang mencakup apa yang biasanya Anda
            diskusikan dalam wawancara kerja:{" "}
            <span className="font-semibold">
              kepribadian Anda, kelebihan, pengalaman, dan mengapa Anda
              menginginkan pekerjaan itu, tentu saja.
            </span>
          </p>

          <h2 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-6">
            Menggambarkan kepribadian Anda
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Saat mereka duduk dengan kandidat, pewawancara (calon bos Anda)
            mencari tahu apakah orang yang diwawancarai (Anda) akan cocok atau
            tidak cocok dengan tim mereka.
          </p>

          {/* Call to Action */}
          <div className="bg-sky-500 text-white p-8 rounded-lg my-12">
            <h3 className="text-2xl font-bold mb-2">
              Cari tahu tingkat bahasa inggris kamu dalam hitungan menit
            </h3>
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 border border-white rounded-full text-white hover:bg-sky-600 transition">
                Selengkapnya
              </button>
            </div>
          </div>

          <h2 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-6">
            Bersiaplah untuk menjalankan dan menjelaskan poin-poin utama dalam
            CV Anda
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Gunakan kesempatan untuk menguraikan apa yang ada di CV Anda dan
            berikan rincian lebih lanjut.
          </p>

          <h2 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-6">
            Pengalaman Kerja
          </h2>

          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li className="text-lg text-gray-700">
              Saya bekerja di ritel selama tujuh tahun dan dipromosikan menjadi
              manajer di tahun kedua saya
            </li>
            <li className="text-lg text-gray-700">
              Saya belajar di University of Queensland
            </li>
            <li className="text-lg text-gray-700">
              Saya bekerja untuk Anderson dan Assoc, sebagai pengacara
            </li>
          </ul>
        </div>

        {/* Related Posts */}
        <RelatedPosts />

        {/* Comment Section */}
        <CommentSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Tentang Kami
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900"
                  >
                    Tentang
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900"
                  >
                    Karir
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Kategori
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900"
                  >
                    Bahasa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900"
                  >
                    Budaya
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900"
                  >
                    Karir
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Berlangganan
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Dapatkan artikel terbaru langsung ke email Anda.
              </p>
              <div className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
                <button
                  type="submit"
                  className="ml-3 bg-sky-500 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Langganan
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-500 text-center">
              &copy; 2025 Blog Karir. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
