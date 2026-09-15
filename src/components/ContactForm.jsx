import { useState } from "react";
import { Send } from "lucide-react";

// Demonstrates: a DEFAULT PROP (`buttonText`) set via destructuring, and a
// FUNCTION prop (`onSubmit`) the child calls with its local form state.
function ContactForm({ buttonText = "Send message", onSubmit }) {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleChange = (field) => (event) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formState);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          value={formState.name}
          onChange={handleChange("name")}
          placeholder="Your name"
          className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 outline-none transition-colors focus:border-rose-400"
        />
        <input
          required
          type="email"
          value={formState.email}
          onChange={handleChange("email")}
          placeholder="Your email"
          className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 outline-none transition-colors focus:border-rose-400"
        />
      </div>
      <textarea
        required
        rows={4}
        value={formState.message}
        onChange={handleChange("message")}
        placeholder="Tell me about your project"
        className="w-full resize-none rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 outline-none transition-colors focus:border-rose-400"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-rose-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-800"
      >
        {buttonText}
        <Send size={15} />
      </button>
    </form>
  );
}

export default ContactForm;
