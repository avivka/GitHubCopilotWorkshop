export default function TeamsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">NBA Teams</h1>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
        <p className="text-lg text-gray-500">
          Build this page in the <strong>Prompt Engineering</strong> exercise
          (Task 2).
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Use the <code>/api/teams</code> endpoint and the{" "}
          <code>component-generator.prompt.md</code> prompt file to create a
          full teams listing with conference filtering.
        </p>
      </div>
    </div>
  );
}
