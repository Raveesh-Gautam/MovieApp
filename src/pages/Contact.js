import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({ uname: "", email: "", phone: "" });

  const handleFormData = (e) => {
    e.preventDefault();
    console.log(form); 
    setForm({ uname: "", email: "", phone: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.contactWrapper}>
      <form onSubmit={handleFormData} className={styles.form}>
        <label>Name</label>
        <input
          type="text"
          name="uname"
          value={form.uname}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Phone No.</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
