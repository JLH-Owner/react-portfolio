import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Contact() {
    const [contactInput, setContactInput] = useState({
        contactName: '',
        contactEmail: '',
        contactMessage: '',     
    });
    
    const [notification, setNotification] = useState('');
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactInput({...contactInput, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!contactInput.contactName || !contactInput.contactEmail || !contactInput.contactMessage) {
            setNotification('Invalid: cannot leave field blank.');
        } else if (!/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.test(contactInput.contactEmail)) {
            setNotification('Invalid email address');
        } else {
            setNotification("");
            console.log ("contact sent", contactInput);
            document.getElementById("successMessage").innerHTML = `Your message was sent successfully!`;
        }
    };

    return (
        <section className="form-group" id="contact">
            <h2>Get in Contact</h2>
            <Form onSubmit={handleSubmit}>
                <>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="contact-name">Name</InputGroup.Text>
                    <Form.Control
                        type="text" 
                        placeholder="Enter name"
                        name="contactName"
                        value={contactInput.contactName}
                        onChange={handleChange} 
                    />                
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="contact-email">Email</InputGroup.Text>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="contactEmail"
                        value={contactInput.contactEmail}
                        onChange={handleChange} 
                    />                
                </InputGroup>

                <InputGroup>
                    <InputGroup.Text id="contact-message">Message</InputGroup.Text>
                    <Form.Control 
                        as="textarea"
                        placeholder="Enter message" 
                        name="contactMessage"
                        value={contactInput.contactMessage}
                        onChange={handleChange}
                         />
                </InputGroup>
                </>
                <Button variant="primary" type="submit">
                    Send Message
                </Button>
            </Form>
            <p className={notification ? "": "bg-info"} id="successMessage"></p>
            {notification && <p className="bg-danger">{notification}</p>}
        </section>
    );
}

export default Contact