import { NextSeo } from "next-seo";
export default function Custom404() {
  return (
    <>
      <NextSeo
        title="Page Not found - WishMeCard"
        description="Page Not found."
        canonical="https://www.canonical.ie/"
        openGraph={{
          title: "404 - WishMeCard",
          description: "404 - WishMeCard",
          url: "https://www.example.com/articles/article-title",
          type: "article",
          article: {
            publishedTime: "2017-06-21T23:04:13Z",
            modifiedTime: "2018-01-21T18:04:43Z",
            expirationTime: "2050-12-21T22:04:11Z",
            section: "Section II",
            authors: [
              "https://www.example.com/authors/@firstnameA-lastnameA",
              "https://www.example.com/authors/@firstnameB-lastnameB",
            ],
            tags: ["Tag A", "Tag B", "Tag C"],
          },
          images: [
            {
              url: "https://www.test.ie/images/cover.jpg",
              width: 850,
              height: 650,
              alt: "Photo of text",
            },
          ],
        }}
      />
      <div
        className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-indigo-600
    to-blue-400
  "
      >
        <div className="px-40 py-20 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <a
              href="#"
              className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
            >
              Go home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
