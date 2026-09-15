// Demonstrates: `value` (number prop) and `label` / `suffix` (string props).
function StatCard({ value, suffix, label }) {
  return (
    <div className="border-l-2 border-rose-200 pl-4">
      <p className="font-serif text-4xl text-rose-800">
        {value}
        <span className="text-rose-400">{suffix}</span>
      </p>
      <p className="mt-1 text-sm text-stone-500">{label}</p>
    </div>
  );
}

export default StatCard;
