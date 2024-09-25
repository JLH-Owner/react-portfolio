import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <a href="https://github.com/JLH-Owner">GitHub</a>
      <br></br>
      <a href="https://www.linkedin.com/">LinkedIn</a>
      <br></br>
      <a href="jlhclientsolutions@gmail.com">Email</a>
      <br></br>
      {/*<a href tel="8039021971">Phone</a>
      <br></br>*/}
      <ContactForm />
    </div>
  );
}


