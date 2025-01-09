"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

function BlogCard({ post, index }) {
  console.log("post in blog card:", post);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={post.link}>
        <Card className="overflow-hidden bg-zinc-900/50 border-zinc-800 hover:border-purple-500/50 transition-colors">
          <div className="aspect-video relative">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2 line-clamp-2 text-[#FFB200]">
              {post.title}
            </h2>
            <p className="text-gray-400 line-clamp-3">{post.description}</p>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-400">
              <CalendarDays className="mr-2 h-4 w-4" />
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}

export default BlogCard;
