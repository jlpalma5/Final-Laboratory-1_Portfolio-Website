import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "visitor"}`);
    const body = encodeURIComponent(`${message}\n\nContact email: ${email}`);
    window.location.href = `mailto:johnlloydpalma54@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div>
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        </label>
        <label>
          Message
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="5" required />
        </label>
        <div className="contact-actions">
          <button type="submit" className="btn btn-primary">Send Email</button>
          <a className="btn" href="mailto:johnlloydpalma54@gmail.com">Or open mail client</a>
        </div>
      </form>
    </div>
  );
}
