import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addService, removeService, updateService, type Service } from "@/store/slices/servicesSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Save, Plus, Trash2, Edit2, X } from "lucide-react";
import { toast } from "sonner";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const empty: Omit<Service, "id"> = { title: "", description: "", icon: "Globe" };

const ServicesEditor = () => {
  const dispatch = useAppDispatch();
  const { services } = useAppSelector((state) => state.services);
  const [editing, setEditing] = useState<Service | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState(empty);

  const handleSave = () => {
    if (!form.title.trim()) return;
    if (editing) {
      dispatch(updateService({ ...form, id: editing.id }));
      setEditing(null);
    } else {
      dispatch(addService({ ...form, id: Date.now().toString() }));
    }
    setAdding(false);
    setForm(empty);
    toast.success(editing ? "Updated!" : "Added!");
  };

  const startEdit = (s: Service) => { setEditing(s); setForm(s); setAdding(true); };
  const cancel = () => { setEditing(null); setAdding(false); setForm(empty); };

  const iconOptions = ["Globe", "Server", "Cloud", "Palette", "Smartphone", "Shield", "Database", "Cpu"];

  return (
    <div>
      <AdminPageHeader
        title="Services"
        description="Manage the services you offer."
        actions={!adding && <Button onClick={() => setAdding(true)} className="gap-2"><Plus className="w-4 h-4" /> Add</Button>}
      />

      {adding && (
        <div className="bg-card border border-border rounded-xl p-6 mb-6 space-y-4">
          <div className="flex justify-between"><h3 className="text-sm font-medium text-foreground">{editing ? "Edit" : "New"} Service</h3><button onClick={cancel}><X className="w-4 h-4 text-muted-foreground" /></button></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Title</label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Icon</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })}>
                {iconOptions.map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Description</label><Textarea rows={2} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
          <Button onClick={handleSave} className="gap-2"><Save className="w-4 h-4" /> {editing ? "Update" : "Add"}</Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {services.map((service) => (
          <div key={service.id} className="bg-card border border-border rounded-xl p-5 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-foreground">{service.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
              <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded mt-2 inline-block">Icon: {service.icon}</span>
            </div>
            <div className="flex gap-1 shrink-0">
              <button onClick={() => startEdit(service)} className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-muted"><Edit2 className="w-4 h-4" /></button>
              <button onClick={() => { dispatch(removeService(service.id)); toast.success("Removed!"); }} className="p-2 text-muted-foreground hover:text-destructive rounded-lg hover:bg-muted"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesEditor;
