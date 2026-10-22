"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { hobbies } from "@/data/hobbies";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

type Props = {
  onClose: () => void;
  onNavigate: (path: string) => void;
};

type Ctx = {
  nav: (p: string) => void;
  pathname: string;
  args: string[];
  bootedAt: number;
};

type Line = { prompt?: string; output?: string; kind?: "info" | "error" | "ok" };

// --- virtual filesystem ---------------------------------------------------

const PAGES = ["about", "projects", "now", "hobbies", "photos", "writing", "uses", "resume"];

function listFiles(pathname: string): string[] {
  const seg = pathname.replace(/^\//, "").split("/")[0];
  switch (seg) {
    case "":
      return PAGES.map((p) => `${p}/`).concat(["README.md"]);
    case "hobbies":
      return hobbies.map((h) => h.filename);
    case "projects":
      return projects.map((p) => `${p.slug}/`);
    case "writing":
      return ["hello-terminal.mdx", "one-thing-a-week.mdx"];
    case "about":
      return ["about.md"];
    case "now":
      return [".now"];
    case "uses":
      return ["uses.md"];
    case "resume":
      return ["resume.md"];
    case "photos":
      return Array.from({ length: 6 }, (_, i) => `IMG_${String(i + 1).padStart(3, "0")}.jpg`);
    default:
      return [];
  }
}

function readFile(pathname: string, name: string): string | null {
  const seg = pathname.replace(/^\//, "").split("/")[0];
  if (seg === "" && name === "README.md") {
    return profile.about.join("\n\n");
  }
  if (seg === "hobbies") {
    const h = hobbies.find((h) => h.filename === name);
    return h ? `# ${h.title}\n\n${h.body}` : null;
  }
  if (seg === "now" && name === ".now") {
    return "see: cd now";
  }
  return null;
}

// --- fun strings ----------------------------------------------------------

const FORTUNES = [
  "the best code is no code",
  "shipping is a feature",
  "there are only two hard things in CS: cache invalidation and naming things",
  "weeks of coding can save hours of planning",
  "it works on my machine ¯\\_(ツ)_/¯",
  "premature optimization is the root of all evil — knuth",
  "always leave the campground cleaner than you found it",
  "the computer is a bicycle for the mind",
];

const NEOFETCH = `
       .--.             billvo@portfolio
      |o_o |            ----------------
      |:_/ |            OS      : billvo-os 0.2.0 (monokai)
     //   \\ \\           Host    : vercel edge
    (|     | )          Kernel  : next.js 14 · react 18
   /'\\_   _/\`\\          Shell   : zsh (simulated)
   \\___)=(___/          Theme   : Monokai
                        Font    : JetBrains Mono
                        Terms   : ⌘K · esc to close
`.trimEnd();

const SL = String.raw`
      ====        ________                ___________
  _D _|  |_______/        \__I_I_____===__|_________|
   |(_)---  |   H\________/ |   |        =|___ ___|
   /     |  |   H  |  |     |   |         ||_| |_||
  |      |  |   H  |__--------------------| [___] |
  | ________|___H__/__|_____/[][]~\_______|       |
  |/ |   |-----------I_____I [][] []  D   |=======|__
__/ =| o |=-O=====O=====O=====O \ ____Y___________|__
 |/-=|___|=    ||    ||    ||    |_____/~\___/
  \_/      \__/  \__/  \__/  \__/      \_/
`;

function cowsay(msg: string) {
  const text = msg || "moo";
  const line = "-".repeat(text.length + 2);
  return ` ${line}
< ${text} >
 ${line}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;
}

function banner(text: string) {
  // Minimalist "banner" — just wrap in a box
  const t = text || "hello";
  const line = "─".repeat(t.length + 2);
  return `┌${line}┐
│ ${t} │
└${line}┘`;
}

// --- commands -------------------------------------------------------------

type Cmd = {
  desc: string;
  usage?: string;
  action?: (ctx: Ctx) => string | void;
};

const COMMANDS: Record<string, Cmd> = {
  help: { desc: "list available commands" },
  man: { desc: "show manual for a command", usage: "man <cmd>" },
  ls: {
    desc: "list files in current directory",
    usage: "ls [-l]",
    action: ({ pathname, args }) => {
      const flagLong = args.includes("-l") || args.includes("-la") || args.includes("-lah");
      const files = listFiles(pathname);
      if (files.length === 0) return "ls: nothing here";
      if (flagLong) {
        return files
          .map((f) => {
            const isDir = f.endsWith("/");
            const perms = isDir ? "drwxr-xr-x" : "-rw-r--r--";
            const size = Math.floor(Math.random() * 9000 + 100);
            return `${perms}  bill  staff  ${String(size).padStart(5)}  Oct 20 ${f}`;
          })
          .join("\n");
      }
      return files.join("  ");
    },
  },
  cat: {
    desc: "print file contents",
    usage: "cat <file>",
    action: ({ pathname, args }) => {
      if (args.length === 0) return "cat: missing operand";
      const name = args[0];
      const content = readFile(pathname, name);
      if (content === null) return `cat: ${name}: no such file`;
      return content;
    },
  },
  cd: { desc: "change directory", usage: "cd <path>" },
  pwd: {
    desc: "print working directory",
    action: ({ pathname }) => {
      const path = pathname === "/" ? "/home/billvo" : `/home/billvo${pathname}`;
      return `${path}    -- we're always in the present`;
    },
  },
  tree: {
    desc: "print directory tree",
    action: () => `~/
├── about/
│   └── about.md
├── projects/        ${projects.length} items
├── now/             # what i'm doing right now
├── hobbies/         ${hobbies.length} files
├── photos/          # travel + film
├── writing/
│   ├── hello-terminal.mdx
│   └── one-thing-a-week.mdx
├── uses/
├── resume/
└── secret/          ???`,
  },
  echo: { desc: "echo text back", usage: "echo <text>" },
  whoami: { desc: "print current user", action: () => "bill vo — software engineer, UBCO '25" },
  date: { desc: "print date", action: () => new Date().toString() },
  uptime: {
    desc: "how long this session has been running",
    action: ({ bootedAt }) => {
      const s = Math.floor((Date.now() - bootedAt) / 1000);
      const m = Math.floor(s / 60);
      return `up ${m}m ${s % 60}s · 1 user · load avg: 0.07, 0.08, 0.09`;
    },
  },
  uname: {
    desc: "print system info",
    usage: "uname [-a]",
    action: ({ args }) => {
      if (args.includes("-a")) return "billvo-os 0.2.0 vercel-edge next.js/14.1.4 x86_64 billvo";
      return "billvo-os";
    },
  },
  history: { desc: "show command history" },
  clear: { desc: "clear the screen" },
  which: {
    desc: "locate a command",
    usage: "which <cmd>",
    action: ({ args }) => {
      if (args.length === 0) return "which: missing argument";
      const c = args[0];
      return COMMANDS[c] ? `/usr/bin/${c}` : `${c} not found`;
    },
  },
  neofetch: { desc: "stylized system info", action: () => NEOFETCH },
  fortune: {
    desc: "a random thought",
    action: () => FORTUNES[Math.floor(Math.random() * FORTUNES.length)],
  },
  cowsay: {
    desc: "a cow says things",
    usage: "cowsay <text>",
    action: ({ args }) => cowsay(args.join(" ")),
  },
  banner: {
    desc: "print text in a box",
    usage: "banner <text>",
    action: ({ args }) => banner(args.join(" ")),
  },
  sl: { desc: "a steam locomotive", action: () => SL },
  vim: {
    desc: "the editor you can never leave",
    action: () => "entering vim... :q! doesn't work. :wq doesn't work. you live here now.",
  },
  nano: {
    desc: "a kinder editor",
    action: () => "nano: file saved. you're free to go. (we don't have nano either.)",
  },
  yes: {
    desc: "print y forever (just kidding)",
    usage: "yes [text]",
    action: ({ args }) => {
      const t = args.join(" ") || "y";
      return (`${t}\n`.repeat(5) + `... (ctrl-c to stop)`).trim();
    },
  },
  sudo: {
    desc: "elevate privileges",
    action: () => "bill is not in the sudoers file. this incident will be reported.",
  },
  "rm -rf /": {
    desc: "do not try this at home",
    action: () => "nice try — vfs::readonly 😏",
  },
  "hire-me": {
    desc: "contact info",
    action: () => `mail  : ${profile.email}\ngithub: ${profile.github}\nlinkedin: ${profile.linkedin}`,
  },
  curl: {
    desc: "transfer data from a server",
    usage: "curl <url>",
    action: ({ args }) =>
      args.length === 0
        ? "curl: try `curl billvo.dev`"
        : `GET ${args[0]} ... 200 OK\n(response elided — this is a terminal, not a real curl)`,
  },
  ping: {
    desc: "ping a host",
    usage: "ping <host>",
    action: ({ args }) =>
      `PING ${args[0] || "localhost"}: 56 data bytes\n64 bytes: time=0.042 ms\n64 bytes: time=0.051 ms\n^C`,
  },
  secret: { desc: "???", action: ({ nav }) => nav("/secret") },
  download: {
    desc: "download the resume as pdf",
    usage: "download",
    action: () => {
      if (typeof window !== "undefined") {
        const a = document.createElement("a");
        a.href = "/resume.pdf";
        a.download = "bill-vo-resume.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
      return "fetching resume.pdf... done. check your downloads folder.";
    },
  },
  exit: { desc: "close prompt" },
};

// Build a quick nav lookup for `cd <page>` -------------------------------
const VALID_PATHS = new Set([
  "/",
  "/about",
  "/projects",
  "/now",
  "/hobbies",
  "/photos",
  "/writing",
  "/uses",
  "/resume",
  "/secret",
]);

// Resolve a `cd` argument against the current working directory, bash-style.
// Supports: absolute (/x), home (~), parent (..), self (.), previous (-),
// trailing slashes, and multi-segment arguments like `../projects` or `../../`.
function resolveCd(arg: string, cwd: string, prev: string): string | null {
  if (!arg || arg === "~" || arg === "~/") return "/";
  if (arg === "-") return prev;

  // Build segments from either an absolute path or cwd + relative path.
  const isAbs = arg.startsWith("/") || arg.startsWith("~/");
  const base = isAbs ? "/" : cwd;
  const argPath = arg.replace(/^~\//, "/").replace(/^\//, "");

  const segs = base.split("/").filter(Boolean);
  for (const part of argPath.split("/").filter(Boolean)) {
    if (part === ".") continue;
    if (part === "..") {
      segs.pop();
      continue;
    }
    segs.push(part);
  }

  const resolved = "/" + segs.join("/");
  const normalized = resolved === "/" ? "/" : resolved.replace(/\/$/, "");
  return VALID_PATHS.has(normalized) ? normalized : null;
}

export default function CommandInput({ onClose, onNavigate }: Props) {
  const pathname = usePathname();
  const [history, setHistory] = useState<Line[]>([
    { prompt: "", output: "type `help` to list commands · esc to close", kind: "info" },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const bootedAt = useRef<number>(Date.now());
  const prevDir = useRef<string>("/");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
  }, [mounted]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  function push(prompt: string, output?: string | void, kind?: Line["kind"]) {
    setHistory((h) => {
      const next: Line[] = [...h, { prompt }];
      if (typeof output === "string") next.push({ output, kind });
      return next;
    });
  }

  function run(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;
    setCmdHistory((h) => [...h, cmd]);
    setHistIdx(null);

    const [name, ...args] = cmd.split(/\s+/);
    const ctx: Ctx = {
      nav: onNavigate,
      pathname,
      args,
      bootedAt: bootedAt.current,
    };

    // special forms
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    if (cmd === "exit") {
      onClose();
      return;
    }
    if (name === "help") {
      const entries = Object.entries(COMMANDS).filter(([k]) => !k.includes(" "));
      const labels = entries.map(([k, v]) => v.usage ?? k);
      const width = Math.max(...labels.map((l) => l.length)) + 2;
      const grouped = entries
        .map(([k, v], i) => `  ${labels[i].padEnd(width)} ${v.desc}`)
        .join("\n");
      push(cmd, `available commands — try \`man <cmd>\` for details:\n${grouped}\n\nhidden: try \`rm -rf /\`, ↑↑↓↓←→←→ba`);
      return;
    }
    if (name === "man") {
      const target = args[0];
      if (!target) {
        push(cmd, "What manual page do you want?", "error");
        return;
      }
      const c = COMMANDS[target];
      if (!c) {
        push(cmd, `No manual entry for ${target}`, "error");
        return;
      }
      push(
        cmd,
        `NAME\n    ${target} — ${c.desc}\n\nSYNOPSIS\n    ${c.usage ?? target}\n\n(press q to quit — just kidding, keep going)`,
      );
      return;
    }
    if (name === "history") {
      const out = cmdHistory.map((c, i) => `  ${String(i + 1).padStart(3)}  ${c}`).join("\n");
      push(cmd, out || "(no history yet)");
      return;
    }
    if (name === "cd") {
      const arg = args[0] ?? "";
      const dest = resolveCd(arg, pathname, prevDir.current);
      if (dest) {
        prevDir.current = pathname;
        push(cmd);
        onNavigate(dest);
        return;
      }
      push(cmd, `cd: no such file or directory: ${arg || "~"}`, "error");
      return;
    }
    if (name === "echo") {
      push(cmd, args.join(" "));
      return;
    }
    if (cmd === "rm -rf /") {
      push(cmd, COMMANDS["rm -rf /"].action!(ctx) as string);
      return;
    }

    const c = COMMANDS[name];
    if (c?.action) {
      const out = c.action(ctx);
      push(cmd, out ?? undefined);
      return;
    }
    push(cmd, `zsh: command not found: ${name}`, "error");
  }

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-bg/50 backdrop-blur-lg flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="window w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="window-chrome">
          <div className="flex gap-1.5">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="ml-2">zsh — command input</span>
        </div>
        <div
          ref={scrollRef}
          className="p-4 h-80 overflow-y-auto text-sm whitespace-pre-wrap font-mono"
        >
          {history.map((l, i) => (
            <div key={i} className="mb-1">
              {l.prompt !== undefined && l.prompt !== "" && (
                <div>
                  <span className="text-mono-green">$</span>{" "}
                  <span className="text-fg">{l.prompt}</span>
                </div>
              )}
              {l.output && (
                <div
                  className={
                    l.kind === "error"
                      ? "text-mono-pink"
                      : l.kind === "info"
                        ? "text-fg-muted italic"
                        : l.kind === "ok"
                          ? "text-mono-green"
                          : "text-fg-dim"
                  }
                >
                  {l.output}
                </div>
              )}
            </div>
          ))}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              run(input);
              setInput("");
            }}
            className="flex items-center gap-2"
          >
            <span className="text-mono-green">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "ArrowUp") {
                  e.preventDefault();
                  if (cmdHistory.length === 0) return;
                  const nextIdx =
                    histIdx === null ? cmdHistory.length - 1 : Math.max(0, histIdx - 1);
                  setHistIdx(nextIdx);
                  setInput(cmdHistory[nextIdx]);
                } else if (e.key === "ArrowDown") {
                  e.preventDefault();
                  if (histIdx === null) return;
                  const nextIdx = histIdx + 1;
                  if (nextIdx >= cmdHistory.length) {
                    setHistIdx(null);
                    setInput("");
                  } else {
                    setHistIdx(nextIdx);
                    setInput(cmdHistory[nextIdx]);
                  }
                } else if (e.key === "Tab") {
                  e.preventDefault();
                  const matches = Object.keys(COMMANDS).filter((k) => k.startsWith(input));
                  if (matches.length === 1) setInput(matches[0]);
                }
              }}
              className="flex-1 bg-transparent outline-none text-fg caret-mono-green"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </div>
      </div>
    </div>,
    document.body,
  );
}
