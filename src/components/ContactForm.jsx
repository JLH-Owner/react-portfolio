import { useState } from 'react';

function ContactForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // TODO: Use this array in the return statement below
    const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && email && message) {
      console.error('Please enter your name, email, and a short message for me to contact you.');
    }

    props.onSubmit({
      value: {
      name,
      email,
      message,
      }
    });

    setInput(setName, setEmail, setMessage);    
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          name="contactInput"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Your email"
          value={email}
          name="contactInput"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <br></br>
        <input
          type="textarea"
          placeholder="Your message"
          value={message}
          name="contactInput"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <br></br>
        {/*<div className="dropdown">*/}
          {/*<button className={`dropbtn ${preferred}`}>*/}
            {/*{preferred || 'Priority'}*/}
          {/*</button>*/}
          {/*<div className="dropdown-content">*/}
            {/* TODO: Add an onClick event that will set the corresponding preferred contact from the `preferredContact` array */}
            {/*<p onClick={preferredContact}>Phone</p>*/}
           {/* <p onClick={preferredContact}>Email</p>*/}
          {/*</div>*/}
        {/*</div>*/}
        <button type="submit" className="contact-button">Submit</button>
      </form>
    </div>
  ) : (
  
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="contact-input"
          onChange={handleChange}
        ></input>
        {/*<div className="dropdown">
          <button className={`dropbtn ${preferred}`}>
            {preferred || 'Priority'}
          </button>
          {/* <div className="dropdown-content"> */}
            {/* TODO: Add an onClick event that will set the corresponding preferred contact from the `preferredContact` array */}
            {/*<p onClick={preferredContact}>Phone</p>*/}
            {/*<p onClick={preferredContact}>Email</p>*/}
          {/*</div>*/}
        {/*</div>*/}
        <button className="contact-button">Update</button>
      </form>
    </div>
  );
}


export default ContactForm;