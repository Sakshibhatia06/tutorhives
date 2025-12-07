import Image from "next/image";

// Fetch post by slug
async function getPost(slug: string) {
  const res = await fetch(
    `https://snow-manatee-405536.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data[0];
}

// Dynamic Metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return {
    title: post?.title?.rendered || "Blog",
    description:
      post?.excerpt?.rendered?.replace(/<[^>]+>/g, "").slice(0, 160) ||
      "Read our blog article.",
  };
}

// Main Blog Detail Page
export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div className="p-8 text-center text-gray-600">Blog not found.</div>;
  }

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;

  return (
    <div className="px-5 md:px-10 lg:px-0 max-w-5xl mx-auto mt-20 py-16">
      {/* Blog Title */}
      <h1
        className="text-4xl md:text-5xl font-bold text-black leading-tight"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      {/* Featured Image */}
      {featuredImage && (
        <div className="mt-10">
          <Image
            src={featuredImage}
            alt={post.title.rendered}
            width={1200}
            height={600}
            className="rounded-lg w-full object-cover"
          />
        </div>
      )}

      {/* Blog Content */}
      <div
        className="mt-10 text-black prose prose-lg max-w-none
          prose-headings:text-black
          prose-p:text-black
          prose-li:text-black
          prose-strong:text-black
          prose-a:text-blue-600
          prose-img:rounded-lg
          leading-relaxed space-y-6"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
}
