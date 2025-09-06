import { useState } from "react";
import { saveToLocalStorage } from "../../utils/localStorage";

const LeadForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveToLocalStorage("lead", form);
    setForm({ name: "", email: "", message: "" });
    alert("Thank you for your inquiry!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default LeadForm;