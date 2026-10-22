import Link from "next/link";
import { Window } from "@/components/terminal/Window";

export default function SecretPage() {
  return (
    <div className="space-y-6">
      <div className="text-sm text-fg-muted">
        <span className="text-mono-green">billvo@portfolio:~$</span>{" "}
        <span className="text-fg">sudo access --level=insider</span>
      </div>
      <Window title="hidden/">
        <pre className="text-mono-green text-xs md:text-sm whitespace-pre overflow-x-auto leading-tight">{`
   _____                     __       ____
  / ___/___  _____________  / /_     / __ )____  _  __
  \\__ \\/ _ \\/ ___/ ___/ _ \\/ __/    / __  / __ \\| |/_/
 ___/ /  __/ /__/ /  /  __/ /_     / /_/ / /_/ />  <
/____/\\___/\\___/_/   \\___/\\__/    /_____/\\____/_/|_|
`}</pre>
        <div className="mt-6 space-y-4 text-fg-dim text-sm">
          <p>
            <span className="text-mono-yellow">{"// "}</span>
            you found it. you&apos;re probably either a dev or someone who googles too much. either way, nice.
          </p>
          <p>
            here&apos;s a thing most people don&apos;t know about me:{" "}
            <span className="text-mono-blue">TODO: fill this in with a weirdly specific personal fact</span>.
          </p>
          <p>
            and here&apos;s a wallpaper:{" "}
            <a className="link" href="https://unsplash.com/s/photos/monokai">
              /dev/pretty-pixels
            </a>
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-border text-sm">
          <Link className="link" href="/">cd ~</Link>
        </div>
      </Window>
    </div>
  );
}
