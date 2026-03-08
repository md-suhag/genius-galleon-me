import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addProject, removeProject, updateProject, type Project } from "@/store/slices/projectsSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Save, Plus, Trash2, Edit2, X } from "lucide-react";
import { toast } from "sonner";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const emptyProject: Omit<Project, "id"> = {
  title: "", description: "", image: "", tags: [], liveUrl: "", githubUrl: "", featured: false,
};

const ProjectsEditor = () => {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector((state) => state.projects);
  const [editing, setEditing] = useState<Project | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState(emptyProject);
  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    if (tagInput.trim() && !form.tags.includes(tagInput.trim())) {
      setForm({ ...form, tags: [...form.tags, tagInput.trim()] });
      setTagInput("");
    }
  };

  const handleSave = () => {
    if (!form.title.trim()) return;
    if (editing) {
      dispatch(updateProject({ ...form, id: editing.id }));
      setEditing(null);
      toast.success("Project updated!");
    } else {
      dispatch(addProject({ ...form, id: Date.now().toString() }));
      setAdding(false);
      toast.success("Project added!");
    }
    setForm(emptyProject);
  };

  const startEdit = (p: Project) => {
    setEditing(p);
    setForm(p);
    setAdding(true);
  };

  const cancel = () => {
    setEditing(null);
    setAdding(false);
    setForm(emptyProject);
  };

  return (
    <div>
      <AdminPageHeader
        title="Projects"
        description="Manage your portfolio projects."
        actions={
          !adding && <Button onClick={() => setAdding(true)} className="gap-2"><Plus className="w-4 h-4" /> Add Project</Button>
        }
      />

      {/* Form */}
      {adding && (
        <div className="bg-card border border-border rounded-xl p-6 mb-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-foreground">{editing ? "Edit Project" : "New Project"}</h3>
            <button onClick={cancel} className="text-muted-foreground hover:text-foreground"><X className="w-4 h-4" /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Title</label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Image URL</label>
              <Input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="https://..." />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground">Description</label>
            <Textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Live URL</label>
              <Input value={form.liveUrl} onChange={(e) => setForm({ ...form, liveUrl: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">GitHub URL</label>
              <Input value={form.githubUrl} onChange={(e) => setForm({ ...form, githubUrl: e.target.value })} />
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
            <span className="text-sm text-foreground">Featured Project</span>
            <Switch checked={form.featured} onCheckedChange={(v) => setForm({ ...form, featured: v })} />
          </div>
          <Button onClick={handleSave} className="gap-2"><Save className="w-4 h-4" /> {editing ? "Update" : "Add"} Project</Button>
        </div>
      )}

      {/* List */}
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-card border border-border rounded-xl p-5 flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-medium text-foreground truncate">{project.title}</h3>
                {project.featured && <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">Featured</span>}
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-1 shrink-0">
              <button onClick={() => startEdit(project)} className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-muted"><Edit2 className="w-4 h-4" /></button>
              <button onClick={() => { dispatch(removeProject(project.id)); toast.success("Removed!"); }} className="p-2 text-muted-foreground hover:text-destructive rounded-lg hover:bg-muted"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsEditor;
