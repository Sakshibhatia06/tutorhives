import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  const res = await fetch(
    "https://snow-manatee-405536.hostingersite.com/wp-json/wp/v2/posts?_embed",
    { next: { revalidate: 10 } }
  );
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-30">
      {posts.map((post: any) => {
        const img =
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

        return (
          <div
            key={post.id}
            className="border rounded-lg p-5 shadow-sm bg-white flex flex-col"
          >
            {/* Show image only if exists */}
            {img && (
              <div className="w-full mb-4">
                <Image
                  src={img}
                  alt={post.title.rendered}
                  width={600}
                  height={350}
                  className="rounded-lg w-full object-cover"
                />
              </div>
            )}

            <h2 className="text-xl text-black font-semibold">
              {post.title.rendered}
            </h2>

            <p
              className="text-black mt-2"
              dangerouslySetInnerHTML={{
                __html:
                  post.excerpt.rendered
                    .replace(/<[^>]+>/g, "")
                    .slice(0, 120) + "...",
              }}
            />

            <Link href={`/blog/${post.slug}`} className="mt-auto">
              <button className="mt-4 bg-black text-white px-4 py-2 rounded">
                Read More →
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
