// Demonstrates: destructuring with a DEFAULT VALUE for `featured` (boolean),
// so parents can omit it entirely and it safely falls back to false.
function SkillBadge({ skillName, icon: Icon, featured = false }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-100 ${
        featured
          ? "border-rose-300 bg-rose-50"
          : "border-stone-200 bg-white"
      }`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
          featured ? "bg-rose-600 text-white" : "bg-rose-50 text-rose-600"
        }`}
      >
        <Icon size={17} />
      </span>
      <span className="font-medium text-stone-700">{skillName}</span>
    </div>
  );
}

export default SkillBadge;
