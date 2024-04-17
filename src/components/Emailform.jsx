import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
const Emailform = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    number: "",
    email: "",  
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (document.getElementById('name').value !== '' && document.getElementById('number').value !== '' && document.getElementById('email').value !== '' && document.getElementById('text').value !== '') {
      emailjs
        .sendForm('service_gtssbkg', 'template_rdt2k7c', form.current, {
          publicKey: 'LSDT0o-MnV4WWn46U',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            window.location.reload(true)
          },
          (error) => {
            console.log('FAILED..', error.text);
          },
        );
    }
    else {
      alert('Please fill in all fields');
    }
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      number: /^(0|[1-9]\d*)$/,
      email: /^\S+@\S+\.\S+$/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "Name is invalid.";
    }
    if (!regex.number.test(formData.number)) {
      errors.number = "Number is invalid.";
    }
    if (!regex.email.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      number: "",
      email: "",
    });
    setFormErrors({
      name: "",
      number: "",
      email: "",
    });
  };
  return (
    < >
      <form className="registration-form mt-5 " onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          // className={formErrors.name ? "error" : ""}
          />
          {formErrors.name && (
            <p className="error-message">{formErrors.name}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="number">Number:</label>
          <input
            type="number"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className={formErrors.number ? "error" : ""}
          />
          {formErrors.number && (
            <p className="error-message">{formErrors.number}</p>
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={formErrors.email ? "error" : ""}
          />
          {formErrors.email && (
            <p className="error-message">{formErrors.email}</p>
          )}
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            type="message"
            name="message"
            id='text'
            className='px-3 py-2 w-100 border border-black rounded-lg outline-none '
          />

        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {showSuccessPopup && (
        <div className="success-popup">
          <p>Form submitted successfully!</p>
          <button onClick={handlePopupClose}>Close</button>
        </div>
      )}
    </>
  );
};
export default Emailform;