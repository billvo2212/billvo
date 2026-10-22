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
            <span className="text-mono-blue">I'm scared of ghost ... like idk man .. haven't seen one but I created one in my head to scare myself</span>.
          </p>
          <p>
            and here&apos;s the one that makes me terrify the most{" "}
            <a className="link" href="https://www.google.com/search?sca_esv=319c8d9d6011a834&sxsrf=APpeQnun-KBwFUxPyZI_NE4Ybo03rA_eCg:1792638995208&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832SMIiTl3t-JZ4hGJOxPbHYRQDtz5om-6srRFNP4UK_6edrYqFyYjVoLL0-Wmdmyc0u13h2Xl3P-7Fmh0o6KIonLSStrYX7-J-cMLG287nQ7raf0FkoLkOJb1mfQmtNYyMRhn-hrlv2gKJDeHb5aiCA66AyzkImpJHz_-TdiqyVBEHRiSEA&q=momo&sa=X&ved=2ahUKEwip-pPU1MyXAxUAdTIDHRAQC7UQtKgLegQIGxAB&biw=3440&bih=1318&dpr=1#sv=CAMSUxoyKhBlLTFJM0xTTEd5TGlDQlZNMg4xSTNMU0xHeUxpQ0JWTToOYWxGTlN0TjhpejUtV00gBCoXCgFzEhBlLTFJM0xTTEd5TGlDQlZNGAEwAVACGAcg_pHYqQtKCBACGAEgAigB">
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
