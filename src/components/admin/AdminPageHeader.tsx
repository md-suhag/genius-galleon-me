import { ReactNode } from "react";

interface AdminPageHeaderProps {
  title: string;
  description: string;
  actions?: ReactNode;
}

const AdminPageHeader = ({ title, description, actions }: AdminPageHeaderProps) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
    <div>
      <h1 className="text-2xl font-heading font-bold text-foreground">{title}</h1>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
    {actions && <div className="flex items-center gap-2">{actions}</div>}
  </div>
);

export default AdminPageHeader;
