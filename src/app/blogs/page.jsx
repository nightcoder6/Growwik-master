import Blogs from "@/components/Blogs/Blogs";
import { getAllBlog } from "@/actions/blog";

export default async function Page() {
  const { data: allBlogs } = await getAllBlog();

  return (
    <>
      <Blogs blogs={allBlogs} />
    </>
  );
}

export const dynamic = "force-dynamic"; // Use SSR for this page instead of Incremental Static Regeneration (ISR) caching
