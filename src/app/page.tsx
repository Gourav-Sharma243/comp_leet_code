import CodeEditor from "./dashboard/CodeEditor";
import PowersPanel from "./dashboard/PowersPanel";

export default function Home() {
  return (
    <main className="flex h-screen p-4">
      {/* Left: Code Editor (Expanded to 80%) */}
      <div className="w-4/5">
        <CodeEditor />
      </div>

      {/* Right: Powers Panel (20%) */}
      <div className="w-1/5">
        <PowersPanel />
      </div>
    </main>
  );
}
