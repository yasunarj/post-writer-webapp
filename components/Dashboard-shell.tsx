import { cn } from "@/lib/utils";

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

const DashboardShell = ({ children, className, ...props }: DashboardShellProps) => {
  return (
    <div className={cn("grid items-center gap-8", className)} {...props}>
      {children}
    </div>
  );
};

export default DashboardShell;
