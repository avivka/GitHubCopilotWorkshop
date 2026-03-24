export default function PlayerComparePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Player Comparison</h1>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
        <p className="text-lg text-gray-500">
          Build this page in the <strong>Spec-Driven Development</strong>{" "}
          exercise (Task 5).
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Write a spec as a prompt file, then use agent mode to implement a
          side-by-side player comparison using the{" "}
          <code>/api/player-compare</code> endpoint.
        </p>
      </div>
    </div>
  );
}
