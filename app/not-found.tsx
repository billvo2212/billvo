import Link from "next/link";
import { Window } from "@/components/terminal/Window";

export default function NotFound() {
  return (
    <div className="space-y-6">
      <div className="text-sm text-fg-muted">
        <span className="text-mono-green">billvo@portfolio:~$</span> <span className="text-fg">cd /unknown</span>
      </div>
      <Window title="zsh: 404">
        <pre className="text-mono-pink text-sm md:text-base whitespace-pre overflow-x-auto">{`
   __ __ ____  __ __
  / // // __ \\/ // /
 / // // / / / // /_
/__  //_/ /_/__  __/
  /_/        /_/

zsh: command not found: ${""}
no such file or directory.
`}</pre>
        <p className="text-fg-dim mt-4 text-sm">
          this path doesn&apos;t exist. maybe you meant one of these:
        </p>
        <ul className="mt-3 text-sm space-y-1">
          <li><Link className="link" href="/">cd ~</Link></li>
          <li><Link className="link" href="/projects">cd ~/projects</Link></li>
          <li><Link className="link" href="/writing">cd ~/writing</Link></li>
        </ul>
      </Window>
    </div>
  );
}
