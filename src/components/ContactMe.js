import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactMe.css";

export const ContactMe = () => {
    const formInitialDetails = {
        name: '',
        email: '',
        message: ''
    }
    
    const [formDetails, setformDetails] = useState(formInitialDetails);
    const [contactmeButtonText, setcontactmeButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const [errors, setErrors] = useState({}); // Track field-level errors
    const [isLoading, setIsLoading] = useState(false); // Track form submission state

    // Form validation helper function
    const validateForm = () => {
        const newErrors = {};
        
        // Validate name (required, minimum 3 characters)
        if (!formDetails.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formDetails.name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters";
        }

        // Validate email (required, valid format)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formDetails.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formDetails.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Validate message (required, minimum 10 characters)
        if (!formDetails.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formDetails.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        return newErrors;
    };

    // Update form field with validation clearing
    const onFormUpdate = (category, value) => {
        setformDetails({
            ...formDetails,
            [category]: value
        });
        // Clear error for this field when user starts typing
        if (errors[category]) {
            setErrors({
                ...errors,
                [category]: ''
            });
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form before submission
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setStatus({
                success: false,
                message: "Please fix the errors above"
            });
            return;
        }

        // Clear previous errors
        setErrors({});
        setIsLoading(true);
        setcontactmeButtonText('Sending...');

        try {
            // Simulate form submission (replace with actual EmailJS config)
            // For now, we'll show a success message after 1.5 seconds
            await new Promise(resolve => setTimeout(resolve, 1500));

            setStatus({
                success: true,
                message: "Message sent successfully! I'll get back to you soon."
            });
            setformDetails(formInitialDetails);
            setcontactmeButtonText('Send');
            
            // Clear status message after 5 seconds
            setTimeout(() => {
                setStatus({});
            }, 5000);
        } catch (error) {
            setStatus({
                success: false,
                message: "Error sending message. Please try again later."
            });
            setcontactmeButtonText('Send');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h1>Let's Connect</h1>
                        <span>
                            Have a project in mind or want to discuss opportunities? 
                            I'd love to hear from you. Feel free to reach out through the form 
                            or connect with me on my social media channels.
                        </span>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.name} 
                                        placeholder="Name" 
                                        onChange={(e) => onFormUpdate('name', e.target.value)}
                                    ></input>
                                    {errors.name && <span className="form-error">{errors.name}</span>}
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="email" 
                                        value={formDetails.email} 
                                        placeholder="Email" 
                                        onChange={(e) => onFormUpdate('email', e.target.value)}
                                    ></input>
                                    {errors.email && <span className="form-error">{errors.email}</span>}
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea 
                                        type="text" 
                                        value={formDetails.message} 
                                        placeholder="Message" 
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                    ></textarea>
                                    {errors.message && <span className="form-error">{errors.message}</span>}
                                </Col>
                                <Col>
                                    <button type="submit" disabled={isLoading}>
                                        <span>{contactmeButtonText}</span>
                                    </button>
                                </Col>
                                {
                                    status.message && 
                                    <Col sm={12}>
                                        <div className={`status-message ${status.success ? 'status-success' : 'status-error'}`}>
                                            {status.message}
                                        </div>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}