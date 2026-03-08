import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { updateAbout } from "@/store/slices/aboutSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Save, Plus, X } from "lucide-react";
import { toast } from "sonner";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const AboutEditor = () => {
  const dispatch = useAppDispatch();
  const about = useAppSelector((state) => state.about);
  const [form, setForm] = useState(about);
  const [newTech, setNewTech] = useState("");

  const handleSave = () => {
    dispatch(updateAbout(form));
    toast.success("About section updated!");
  };

  const addTech = () => {
    if (newTech.trim() && !form.techStack.includes(newTech.trim())) {
      setForm({ ...form, techStack: [...form.techStack, newTech.trim()] });
      setNewTech("");
    }
  };

  const removeTech = (tech: string) => {
    setForm({ ...form, techStack: form.techStack.filter((t) => t !== tech) });
  };

  return (
    <div>
      <AdminPageHeader
        title="About Section"
        description="Edit your bio, stats, and tech stack."
        actions={
          <Button onClick={handleSave} className="gap-2">
            <Save className="w-4 h-4" /> Save Changes
          </Button>
        }
      />
      <div className="space-y-6 bg-card border border-border rounded-xl p-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Bio</label>
          <Textarea rows={4} value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Years Experience</label>
            <Input type="number" value={form.yearsExperience} onChange={(e) => setForm({ ...form, yearsExperience: +e.target.value })} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Projects Completed</label>
            <Input type="number" value={form.projectsCompleted} onChange={(e) => setForm({ ...form, projectsCompleted: +e.target.value })} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Clients Satisfied</label>
            <Input type="number" value={form.clientsSatisfied} onChange={(e) => setForm({ ...form, clientsSatisfied: +e.target.value })} />
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Tech Stack</label>
          <div className="flex flex-wrap gap-2">
            {form.techStack.map((tech) => (
              <span key={tech} className="flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-mono px-3 py-1.5 rounded-lg border border-primary/20">
                {tech}
                <button onClick={() => removeTech(tech)} className="hover:text-destructive"><X className="w-3 h-3" /></button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add technology..."
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTech())}
            />
            <Button variant="outline" size="icon" onClick={addTech}><Plus className="w-4 h-4" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEditor;
