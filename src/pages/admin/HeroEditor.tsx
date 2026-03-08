import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { updateHero } from "@/store/slices/heroSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";
import { toast } from "sonner";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const HeroEditor = () => {
  const dispatch = useAppDispatch();
  const hero = useAppSelector((state) => state.hero);
  const [form, setForm] = useState(hero);

  const handleSave = () => {
    dispatch(updateHero(form));
    // TODO: Replace with API call — e.g. await api.put('/hero', form);
    toast.success("Hero section updated!");
  };

  return (
    <div>
      <AdminPageHeader
        title="Hero Section"
        description="Edit the main landing section of your portfolio."
        actions={
          <Button onClick={handleSave} className="gap-2">
            <Save className="w-4 h-4" /> Save Changes
          </Button>
        }
      />
      <div className="space-y-6 bg-card border border-border rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Greeting</label>
            <Input value={form.greeting} onChange={(e) => setForm({ ...form, greeting: e.target.value })} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Name</label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Title / Role</label>
          <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Subtitle</label>
          <Textarea rows={3} value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">CTA Text</label>
            <Input value={form.ctaText} onChange={(e) => setForm({ ...form, ctaText: e.target.value })} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">CTA Link</label>
            <Input value={form.ctaLink} onChange={(e) => setForm({ ...form, ctaLink: e.target.value })} />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Resume Link</label>
          <Input value={form.resumeLink} onChange={(e) => setForm({ ...form, resumeLink: e.target.value })} />
        </div>
        <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
          <div>
            <p className="text-sm font-medium text-foreground">Available for Hire</p>
            <p className="text-xs text-muted-foreground">Show availability badge on hero</p>
          </div>
          <Switch checked={form.availableForHire} onCheckedChange={(v) => setForm({ ...form, availableForHire: v })} />
        </div>
      </div>
    </div>
  );
};

export default HeroEditor;
