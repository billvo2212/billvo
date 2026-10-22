import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Window({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("window", className)}>
      <div className="window-chrome">
        <div className="flex gap-1.5">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="ml-2 truncate">{title}</span>
      </div>
      <div className="p-4 md:p-6">{children}</div>
    </div>
  );
}

export function PageHeader({ cmd, children }: { cmd: string; children?: ReactNode }) {
  return (
    <div className="mb-6">
      <div className="text-sm text-fg-muted">
        <span className="text-mono-green">billvo@portfolio:~$</span>{" "}
        <span className="text-fg">{cmd}</span>
      </div>
      {children && <div className="mt-3 text-fg-dim">{children}</div>}
    </div>
  );
}
