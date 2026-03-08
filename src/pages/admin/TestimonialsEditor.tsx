import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addTestimonial, removeTestimonial, updateTestimonial, type Testimonial } from "@/store/slices/testimonialsSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Save, Plus, Trash2, Edit2, X, Star } from "lucide-react";
import { toast } from "sonner";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const empty: Omit<Testimonial, "id"> = { name: "", role: "", company: "", content: "", avatar: "", rating: 5 };

const TestimonialsEditor = () => {
  const dispatch = useAppDispatch();
  const { testimonials } = useAppSelector((state) => state.testimonials);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState(empty);

  const handleSave = () => {
    if (!form.name.trim()) return;
    if (editing) {
      dispatch(updateTestimonial({ ...form, id: editing.id }));
      setEditing(null);
    } else {
      dispatch(addTestimonial({ ...form, id: Date.now().toString() }));
    }
    setAdding(false);
    setForm(empty);
    toast.success(editing ? "Updated!" : "Added!");
  };

  const startEdit = (t: Testimonial) => { setEditing(t); setForm(t); setAdding(true); };
  const cancel = () => { setEditing(null); setAdding(false); setForm(empty); };

  return (
    <div>
      <AdminPageHeader
        title="Testimonials"
        description="Manage client reviews and ratings."
        actions={!adding && <Button onClick={() => setAdding(true)} className="gap-2"><Plus className="w-4 h-4" /> Add</Button>}
      />

      {adding && (
        <div className="bg-card border border-border rounded-xl p-6 mb-6 space-y-4">
          <div className="flex justify-between"><h3 className="text-sm font-medium text-foreground">{editing ? "Edit" : "New"} Testimonial</h3><button onClick={cancel}><X className="w-4 h-4 text-muted-foreground" /></button></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Name</label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
            <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Role</label><Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} /></div>
            <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Company</label><Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Avatar URL</label><Input value={form.avatar} onChange={(e) => setForm({ ...form, avatar: e.target.value })} placeholder="https://..." /></div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Rating</label>
              <div className="flex gap-1 pt-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} onClick={() => setForm({ ...form, rating: n })}>
                    <Star className={`w-5 h-5 ${n <= form.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Content</label><Textarea rows={3} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} /></div>
          <Button onClick={handleSave} className="gap-2"><Save className="w-4 h-4" /> {editing ? "Update" : "Add"}</Button>
        </div>
      )}

      <div className="space-y-3">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-card border border-border rounded-xl p-5 flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <div className="flex">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}</div>
              </div>
              <p className="text-xs text-muted-foreground">{t.role} at {t.company}</p>
              <p className="text-xs text-muted-foreground mt-2 italic">"{t.content}"</p>
            </div>
            <div className="flex gap-1 shrink-0">
              <button onClick={() => startEdit(t)} className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-muted"><Edit2 className="w-4 h-4" /></button>
              <button onClick={() => { dispatch(removeTestimonial(t.id)); toast.success("Removed!"); }} className="p-2 text-muted-foreground hover:text-destructive rounded-lg hover:bg-muted"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsEditor;
