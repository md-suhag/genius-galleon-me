import { Link } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

const BlogPage = () => {
  const { posts } = useAppSelector((state) => state.blog);
  const published = posts.filter((p) => p.published);

  return (
    <div className="min-h-screen bg-background noise-bg">
      <ScrollProgress />
      <Navbar />

      <section className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="font-mono text-sm text-primary mb-2">{"// blog"}</p>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
              Thoughts & <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-muted-foreground max-w-lg">
              Sharing insights on web development, architecture patterns, and the tools I use daily.
            </p>
          </motion.div>

          {/* Posts */}
          <div className="space-y-6">
            {published.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:bg-primary/[0.02] card-hover"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {post.coverImage && (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full sm:w-40 h-28 object-cover rounded-lg bg-muted"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 text-xs text-muted-foreground font-mono">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.createdAt}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <h2 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.map((tag) => (
                            <span key={tag} className="flex items-center gap-1 text-[10px] font-mono text-primary/70 bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10">
                              <Tag className="w-2.5 h-2.5" />{tag}
                            </span>
                          ))}
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {published.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-mono text-sm">No posts published yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
