import React, { useState, useEffect } from 'react';
import { FaSearch, FaBars, FaFacebook, FaTwitter, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AboutUsPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ["50 care.jpg", "handcare.jpg", "elder lady home care.jpg"]; // Add paths to your images

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const categories = [
        { name: 'Home', id: 1, link: '/' },
        { name: 'About Us', id: 4, link: '/about-us' },
        { name: 'Services', id: 2, link: '/services' },
        { name: 'blog', id: 3, link: '/blog' },
        { name: 'Contact Us', id: 5, link: '/contact' },
    ];

    const footerCategories = [
        {
            name: 'About Us',
            id: 5,
            dropdownItems: ['Mission', 'Team', 'History', 'Careers', 'Partnerships']
        },
        {
            name: 'Visit Us',
            id: 6,
            dropdownItems: ['123 Anywhere  St., Any City, ST 12345', '+2347084649728', 'homehealthcare@gmail.com']
        },
        {
            name: 'Quick Link',
            id: 7,
            dropdownItems: ['About us', 'Services', 'Collections']
        }
    ];

    const handleWhatsAppClick = () => {
        const message = 'Hello! I have a question.';
        axios.post('/api/send-whatsapp', { message })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="about-us-page">
            <nav className="navbar">
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + '/logo.JPG'} alt="Logo" style={{ width: '70px', height: 'auto', borderRadius: '10px' }} />
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FaBars />
                </div>
                <div className={`menu-links ${isMenuOpen ? 'active' : ''}`}>
                    {categories.map(category => (
                        <Link key={category.id} to={category.link} onClick={toggleMenu} className="nav-link">
                            {category.name}
                        </Link>
                    ))}
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <button><FaSearch /></button>
                </div>
            </nav>

            <div className="hero" style={{ position: "relative" }}>
                <img src={images[currentImageIndex]} alt="Hero Image" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                <div className="hero-text" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    {/* <h1>Welcome to My Portfolio</h1> */}
                </div>
            </div>

            <div className="about-us-section">
                <div className="container">
                    <div className="about-us-content">
                        <div className="about-us-text">
                            <h2>About Us</h2>
                            <p>
                                <strong>Welcome to Home healthcare Services Agency</strong>
                            </p>
                            <p>
                                At Home healthcare, we understand the importance of living comfortably in your own home, surrounded by loved ones and cherished memories. That's why we're dedicated to providing exceptional homecare services that cater to your unique needs and preferences.
                            </p>
                            <p>
                                <strong>Our Mission</strong>
                                <br />
                                Our mission is to deliver personalized, top-notch care that empowers individuals to maintain their independence, dignity, and quality of life. We strive to create a supportive and nurturing environment that fosters growth, well-being, and peace of mind.
                            </p>
                            <p>
                                <strong>Our Values</strong>
                            </p>
                            <ul>
                                <li>Compassion: We care for our clients with empathy, kindness, and understanding.</li>
                                <li>Excellence: We strive for exceptional quality in every aspect of our services.</li>
                                <li>Integrity: We operate with transparency, honesty, and ethical standards.</li>
                                <li>Respect: We value the autonomy, privacy, and individuality of each client.</li>
                            </ul>
                            <p>
                                <strong>Our Team</strong>
                                <br />
                                Our team of skilled professionals is passionate about delivering outstanding care and support. From our caregivers to our administrative staff, we're dedicated to making a positive impact in the lives of our clients and their families.
                            </p>
                            <p>
                                <strong>Our Services</strong>
                                <br />
                                We offer a range of services tailored to meet your specific needs, including:
                            </p>
                            <ul>
                                <li>Personal care and assistance</li>
                                <li>Medication management and monitoring</li>
                                <li>Meal preparation and nutrition</li>
                                <li>Light housekeeping and organization</li>
                                <li>Companionship and socialization</li>
                                <li>Skilled nursing care and rehabilitation</li>
                                <li>Respite care and temporary support</li>
                            </ul>
                        </div>
                        <div className="about-us-image">
                            <img src="/handcare.JPG" alt="About Us Image" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                            <figcaption>
                                <strong>Why Choose Us?</strong>
                                <br />
                                - Personalized care plans tailored to your unique needs
                                <br />
                                - Flexible scheduling and affordable pricing
                                <br />
                                - Ongoing training and development for our caregivers
                                <br />
                                - Continuous quality improvement and assurance
                                <br />
                                - Compassionate and responsive customer service
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                
                {footerCategories.map(category => (
                    <div className="footer-column" key={category.id}>
                        <h2>{category.name}</h2>
                        <ul>
                            {category.dropdownItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/${item}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                 {/* Social media icons */}
    <div className="footer-column social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
            <a href="https://www.facebook.com/share/hgi5x3MKEztwx8hd/?mibextid=K35XfP"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="https://www.instagram.com/mazidukeduchess?igsh=MndnZjJja2tzNzI0&utm_source=qr"><FaInstagram /></a>
            {/* Add more social media icons as needed */}
        </div>
        <div className="logo">
                    <img 
                        src={process.env.PUBLIC_URL + '/logo.JPG'} 
                        alt="Logo" 
                        style={{ 
                            width: '70px', 
                            height: 'auto',
                            borderRadius: '10px'  // Adjust the border radius as per your design
                        }} 
                    />
                </div>
    </div>
    
 </footer>

<div className="copyright">
    <p>© 2015 home healthcare services. All rights reserved.</p>
</div>

{/* WhatsApp button */}

<div className="whatsapp-container">
<div className="whatsapp-text-container">
<span className="whatsapp-text">How can I help you ?</span>
</div>
    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <FaWhatsapp />
    </button>
    </div>  
</div>
    );
};

export default AboutUsPage;