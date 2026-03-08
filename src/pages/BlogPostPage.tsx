import { useParams, Link } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

const BlogPostPage = () => {
  const { slug } = useParams();
  const { posts } = useAppSelector((state) => state.blog);
  const post = posts.find((p) => p.slug === slug && p.published);

  if (!post) {
    return (
      <div className="min-h-screen bg-background noise-bg">
        <Navbar />
        <div className="pt-28 px-6 text-center">
          <p className="text-muted-foreground font-mono">Post not found.</p>
          <Link to="/blog" className="text-primary font-mono text-sm mt-4 inline-block hover:underline">← Back to blog</Link>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("# ")) return <h1 key={i} className="text-3xl font-heading font-bold text-foreground mt-8 mb-4">{line.slice(2)}</h1>;
      if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-heading font-semibold text-foreground mt-6 mb-3">{line.slice(3)}</h2>;
      if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-heading font-medium text-foreground mt-4 mb-2">{line.slice(4)}</h3>;
      if (line.startsWith("```")) return <div key={i} className="my-1" />;
      if (line.startsWith("- **")) {
        const match = line.match(/- \*\*(.+?)\*\*\s*—?\s*(.*)/);
        if (match) return <li key={i} className="text-sm text-muted-foreground ml-4 mb-1"><strong className="text-foreground">{match[1]}</strong>{match[2] ? ` — ${match[2]}` : ""}</li>;
      }
      if (line.startsWith("- ")) return <li key={i} className="text-sm text-muted-foreground ml-4 mb-1">{line.slice(2)}</li>;
      if (line.match(/^\d+\./)) return <li key={i} className="text-sm text-muted-foreground ml-4 mb-1 list-decimal">{line.replace(/^\d+\.\s*/, "")}</li>;
      if (line.trim() === "") return <div key={i} className="h-2" />;
      return <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-2">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-background noise-bg">
      <ScrollProgress />
      <Navbar />

      <article className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Back */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to blog
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-muted-foreground font-mono">
              <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.createdAt}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-[10px] font-mono text-primary/70 bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10">
                  <Tag className="w-2.5 h-2.5" />{tag}
                </span>
              ))}
            </div>

            {/* Cover */}
            {post.coverImage && (
              <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover rounded-xl bg-muted mb-8" />
            )}

            {/* Content */}
            <div className="prose-custom">
              {renderContent(post.content)}
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
