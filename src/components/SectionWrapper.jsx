// Demonstrates: `title` and `subtitle` (string props) + `children` prop.
// Whatever JSX the parent nests between <SectionWrapper> tags arrives here
// as `props.children` and is rendered wherever we place {children}.
function SectionWrapper({ title, subtitle, children }) {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <div className="mb-12 max-w-xl">
        <h2 className="font-serif text-3xl text-stone-900 sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base leading-relaxed text-stone-500">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

export default SectionWrapper;
