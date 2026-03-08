import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { updateContact } from "@/store/slices/contactSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save } from "lucide-react";
import { toast } from "sonner";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const ContactEditor = () => {
  const dispatch = useAppDispatch();
  const contact = useAppSelector((state) => state.contact);
  const [form, setForm] = useState(contact);

  const handleSave = () => {
    dispatch(updateContact(form));
    toast.success("Contact info updated!");
  };

  return (
    <div>
      <AdminPageHeader
        title="Contact Info"
        description="Update your contact details and social links."
        actions={<Button onClick={handleSave} className="gap-2"><Save className="w-4 h-4" /> Save Changes</Button>}
      />
      <div className="space-y-6 bg-card border border-border rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Email</label><Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
          <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Phone</label><Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Location</label><Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} /></div>
          <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Availability Status</label><Input value={form.availabilityStatus} onChange={(e) => setForm({ ...form, availabilityStatus: e.target.value })} /></div>
        </div>

        <hr className="border-border" />
        <h3 className="text-sm font-medium text-foreground">Social Links</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">GitHub</label><Input value={form.github} onChange={(e) => setForm({ ...form, github: e.target.value })} /></div>
          <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">LinkedIn</label><Input value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} /></div>
          <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Twitter</label><Input value={form.twitter} onChange={(e) => setForm({ ...form, twitter: e.target.value })} /></div>
          <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Discord</label><Input value={form.discord} onChange={(e) => setForm({ ...form, discord: e.target.value })} /></div>
        </div>

        <div className="space-y-2"><label className="text-xs font-medium text-muted-foreground">Calendly Link</label><Input value={form.calendlyLink} onChange={(e) => setForm({ ...form, calendlyLink: e.target.value })} /></div>
      </div>
    </div>
  );
};

export default ContactEditor;
