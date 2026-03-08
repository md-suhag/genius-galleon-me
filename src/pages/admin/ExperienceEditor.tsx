import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addExperience, removeExperience, updateExperience, type Experience } from "@/store/slices/experienceSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Save, Plus, Trash2, Edit2, X, Briefcase, GraduationCap } from "lucide-react";
import { toast } from "sonner";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const empty: Omit<Experience, "id"> = { role: "", company: "", period: "", description: "", type: "work" };

const ExperienceEditor = () => {
  const dispatch = useAppDispatch();
  const { experiences } = useAppSelector((state) => state.experience);
  const [editing, setEditing] = useState<Experience | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState(empty);

  const handleSave = () => {
    if (!form.role.trim()) return;
    if (editing) {
      dispatch(updateExperience({ ...form, id: editing.id }));
      setEditing(null);
    } else {
      dispatch(addExperience({ ...form, id: Date.now().toString() }));
    }
    setAdding(false);
    setForm(empty);
    toast.success(editing ? "Updated!" : "Added!");
  };

  const startEdit = (e: Experience) => { setEditing(e); setForm(e); setAdding(true); };
  const cancel = () => { setEditing(null); setAdding(false); setForm(empty); };

  return (
    <div>
      <AdminPageHeader
        title="Experience"
        description="Manage work history and education."
        actions={!adding && <Button onClick={() => setAdding(true)} className="gap-2"><Plus className="w-4 h-4" /> Add</Button>}
      />

      {adding && (
        <div className="bg-card border border-border rounded-xl p-6 mb-6 space-y-4">
          <div className="flex justify-between"><h3 className="text-sm font-medium text-foreground">{editing ? "Edit" : "New"} Entry</h3><button onClick={cancel}><X className="w-4 h-4 text-muted-foreground" /></button></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Role / Degree</label><Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} /></div>
            <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Company / Institution</label><Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Period</label><Input value={form.period} onChange={(e) => setForm({ ...form, period: e.target.value })} placeholder="2020 - Present" /></div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Type</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value as 'work' | 'education' })}>
                <option value="work">Work</option><option value="education">Education</option>
              </select>
            </div>
          </div>
          <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Description</label><Textarea rows={2} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
          <Button onClick={handleSave} className="gap-2"><Save className="w-4 h-4" /> {editing ? "Update" : "Add"}</Button>
        </div>
      )}

      <div className="space-y-3">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-card border border-border rounded-xl p-5 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-muted">
                {exp.type === "work" ? <Briefcase className="w-4 h-4 text-primary" /> : <GraduationCap className="w-4 h-4 text-primary" />}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{exp.role}</p>
                <p className="text-xs text-muted-foreground">{exp.company} • {exp.period}</p>
                <p className="text-xs text-muted-foreground mt-1">{exp.description}</p>
              </div>
            </div>
            <div className="flex gap-1 shrink-0">
              <button onClick={() => startEdit(exp)} className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-muted"><Edit2 className="w-4 h-4" /></button>
              <button onClick={() => { dispatch(removeExperience(exp.id)); toast.success("Removed!"); }} className="p-2 text-muted-foreground hover:text-destructive rounded-lg hover:bg-muted"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceEditor;
