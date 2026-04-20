import Image from "next/image";

export default async function Home() {
  return (
    <div className=" p-4 h-full">
      <div className="flex justify-center pb-10">
        <Image
          src="/github-copilot-main.jpeg"
          alt="copilot"
          width="1024"
          height="768"
        />
      </div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to the GitHub Copilot Standalone Workshop
        </h1>
        <p className="text-lg mb-6">
          This hands-on workshop teaches you how to leverage AI-powered
          development through a real NBA sports application. All exercises use
          GitHub Copilot directly in VS Code — no github.com features required.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold text-lg mb-2">
              Part 1: Foundations (3h)
            </h2>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Task 0 — Setup &amp; Model Selection</li>
              <li>Task 1 — Core Copilot Basics</li>
              <li>Task 2 — Prompt Engineering</li>
              <li>Task 3 — Agents</li>
              <li>Task 4 — Plan Mode &amp; Review</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold text-lg mb-2">
              Part 2: Advanced (2h)
            </h2>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Task 5 — Spec-Driven Development</li>
              <li>Task 6 — MCP Servers</li>
              <li>Task 7 — CLI &amp; OpenCode</li>
              <li>Task 8 — Extensions &amp; Wrap-Up</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
