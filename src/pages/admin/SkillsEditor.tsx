import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addSkill, removeSkill, updateSkill, type Skill } from "@/store/slices/skillsSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, Plus, Trash2, Edit2 } from "lucide-react";
import { toast } from "sonner";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const SkillsEditor = () => {
  const dispatch = useAppDispatch();
  const { skills, categories } = useAppSelector((state) => state.skills);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState<Omit<Skill, "id">>({ name: "", level: 80, category: categories[0] });

  const handleAdd = () => {
    if (!form.name.trim()) return;
    dispatch(addSkill({ ...form, id: Date.now().toString() }));
    setForm({ name: "", level: 80, category: categories[0] });
    toast.success("Skill added!");
  };

  const handleUpdate = (skill: Skill) => {
    dispatch(updateSkill(skill));
    setEditing(null);
    toast.success("Skill updated!");
  };

  return (
    <div>
      <AdminPageHeader title="Skills" description="Manage your skills and proficiency levels." />

      {/* Add New */}
      <div className="bg-card border border-border rounded-xl p-5 mb-6">
        <h3 className="text-sm font-medium text-foreground mb-4">Add New Skill</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <Input placeholder="Skill name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input type="number" min={0} max={100} placeholder="Level (0-100)" value={form.level} onChange={(e) => setForm({ ...form, level: +e.target.value })} />
          <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <Button onClick={handleAdd} className="gap-2"><Plus className="w-4 h-4" /> Add</Button>
        </div>
      </div>

      {/* Skills List */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="grid grid-cols-[1fr_80px_120px_80px] gap-4 px-5 py-3 border-b border-border text-xs font-medium text-muted-foreground uppercase tracking-wider">
          <span>Skill</span><span>Level</span><span>Category</span><span>Actions</span>
        </div>
        {skills.map((skill) => (
          <div key={skill.id} className="grid grid-cols-[1fr_80px_120px_80px] gap-4 px-5 py-3 border-b border-border last:border-0 items-center">
            {editing === skill.id ? (
              <>
                <Input defaultValue={skill.name} onBlur={(e) => handleUpdate({ ...skill, name: e.target.value })} className="h-8" autoFocus />
                <Input type="number" defaultValue={skill.level} onBlur={(e) => handleUpdate({ ...skill, level: +e.target.value })} className="h-8" />
                <span className="text-xs text-muted-foreground">{skill.category}</span>
                <Button variant="ghost" size="sm" onClick={() => setEditing(null)}>Done</Button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-foreground">{skill.name}</span>
                  <div className="flex-1 h-1.5 bg-muted rounded-full max-w-[100px]">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
                <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                <span className="text-xs text-muted-foreground">{skill.category}</span>
                <div className="flex gap-1">
                  <button onClick={() => setEditing(skill.id)} className="p-1 text-muted-foreground hover:text-primary"><Edit2 className="w-3.5 h-3.5" /></button>
                  <button onClick={() => { dispatch(removeSkill(skill.id)); toast.success("Removed!"); }} className="p-1 text-muted-foreground hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsEditor;
