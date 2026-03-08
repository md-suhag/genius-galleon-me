import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addPost, removePost, updatePost, togglePublish, type BlogPost } from "@/store/slices/blogSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Save, Plus, Trash2, Edit2, X, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const emptyPost: Omit<BlogPost, "id"> = {
  title: "", slug: "", excerpt: "", content: "", coverImage: "",
  tags: [], author: "Alex Chen", published: false,
  createdAt: new Date().toISOString().split("T")[0],
  updatedAt: new Date().toISOString().split("T")[0],
  readTime: "3 min read",
};

const BlogEditor = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.blog);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState(emptyPost);
  const [tagInput, setTagInput] = useState("");

  const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const addTag = () => {
    if (tagInput.trim() && !form.tags.includes(tagInput.trim())) {
      setForm({ ...form, tags: [...form.tags, tagInput.trim()] });
      setTagInput("");
    }
  };

  const handleSave = () => {
    if (!form.title.trim()) return;
    const slug = form.slug || generateSlug(form.title);
    const now = new Date().toISOString().split("T")[0];
    if (editing) {
      dispatch(updatePost({ ...form, slug, updatedAt: now, id: editing.id }));
      setEditing(null);
      toast.success("Post updated!");
    } else {
      dispatch(addPost({ ...form, slug, createdAt: now, updatedAt: now, id: Date.now().toString() }));
      toast.success("Post created!");
    }
    setAdding(false);
    setForm(emptyPost);
  };

  const startEdit = (p: BlogPost) => { setEditing(p); setForm(p); setAdding(true); };
  const cancel = () => { setEditing(null); setAdding(false); setForm(emptyPost); };

  return (
    <div>
      <AdminPageHeader
        title="Blog Posts"
        description="Create and manage your blog articles."
        actions={!adding && <Button onClick={() => setAdding(true)} className="gap-2"><Plus className="w-4 h-4" /> New Post</Button>}
      />

      {adding && (
        <div className="bg-card border border-border rounded-xl p-6 mb-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-foreground">{editing ? "Edit Post" : "New Post"}</h3>
            <button onClick={cancel}><X className="w-4 h-4 text-muted-foreground" /></button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Title</label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value, slug: generateSlug(e.target.value) })} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Slug</label>
              <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="font-mono text-xs" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground">Excerpt</label>
            <Textarea rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} placeholder="Brief summary..." />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground">Content (Markdown)</label>
            <Textarea rows={12} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="font-mono text-xs" placeholder="# Your blog post content..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Cover Image URL</label>
              <Input value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })} placeholder="https://..." />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Author</label>
              <Input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Read Time</label>
              <Input value={form.readTime} onChange={(e) => setForm({ ...form, readTime: e.target.value })} placeholder="5 min read" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground">Tags</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {form.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 bg-primary/10 text-primary text-xs font-mono px-2.5 py-1 rounded-md border border-primary/20">
                  {tag}<button onClick={() => setForm({ ...form, tags: form.tags.filter(t => t !== tag) })}><X className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <Input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="Add tag..." onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())} />
              <Button variant="outline" size="sm" onClick={addTag}>Add</Button>
            </div>
          </div>

          <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
            <div>
              <span className="text-sm text-foreground">Published</span>
              <p className="text-xs text-muted-foreground">Make this post visible on the blog</p>
            </div>
            <Switch checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v })} />
          </div>

          <Button onClick={handleSave} className="gap-2"><Save className="w-4 h-4" /> {editing ? "Update" : "Create"} Post</Button>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="bg-card border border-border rounded-xl p-5 flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="text-sm font-medium text-foreground">{post.title}</h3>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${post.published ? "text-primary bg-primary/10 border-primary/20" : "text-muted-foreground bg-muted border-border"}`}>
                  {post.published ? "Published" : "Draft"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-mono mb-1">/{post.slug}</p>
              <p className="text-xs text-muted-foreground line-clamp-1">{post.excerpt}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-1 shrink-0">
              <button
                onClick={() => { dispatch(togglePublish(post.id)); toast.success(post.published ? "Unpublished" : "Published!"); }}
                className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-muted"
                title={post.published ? "Unpublish" : "Publish"}
              >
                {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              <button onClick={() => startEdit(post)} className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-muted"><Edit2 className="w-4 h-4" /></button>
              <button onClick={() => { dispatch(removePost(post.id)); toast.success("Deleted!"); }} className="p-2 text-muted-foreground hover:text-destructive rounded-lg hover:bg-muted"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogEditor;
