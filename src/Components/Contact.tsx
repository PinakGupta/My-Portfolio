import React, { useState } from "react";
import { IconMail, IconUser, IconMessage, IconSend, IconPhone, IconMapPin, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import toast from "react-hot-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all required fields");
            setIsSubmitting(false);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address");
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulate form submission (replace with actual submission logic)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            toast.success("Message sent successfully! I'll get back to you soon.");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: IconMail,
            label: "Email",
            value: "pinakgupta99@gmail.com",
            href: "mailto:pinakgupta99@gmail.com"
        },
        {
            icon: IconPhone,
            label: "Phone",
            value: "+91 8264558604",
            href: "tel:+918264558604"
        },
        {
            icon: IconMapPin,
            label: "Location",
            value: "Jalandhar, Punjab, India",
            href: "https://maps.google.com/?q=Jalandhar,Punjab,India"
        }
    ];

    const socialLinks = [
        {
            icon: IconBrandLinkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/pinak-gupta-3a18b6273/",
            color: "hover:text-blue-400"
        },
        {
            icon: IconBrandGithub,
            label: "GitHub",
            href: "https://github.com/PinakGupta",
            color: "hover:text-gray-300"
        }
    ];

    return (
        <div className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono" id="Contact">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold text-white mb-4">
                    <span className="text-primaryColor">06.&nbsp;</span>Get In Touch
                </h1>
                <div className="w-24 h-1 bg-primaryColor mx-auto rounded-full mb-4"></div>
                <p className="text-textColor text-lg md-mx:text-base sm-mx:text-sm max-w-2xl mx-auto">
                    Have a question or want to work together? I'd love to hear from you.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Information */}
                <div 
                    data-aos="fade-right" 
                    data-aos-duration="800"
                    className="space-y-8"
                >
                    <div className="bg-bgColor/50 backdrop-blur-sm border border-primaryColor/60 rounded-2xl p-8 shadow-[0_0_15px_0_#64FFDA50] hover:shadow-[0_0_25px_0_#64FFDA70] transition-all duration-500">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <IconMail className="text-primaryColor" size={28} />
                            Let's Connect
                        </h2>
                        
                        <p className="text-textColor mb-8 leading-relaxed">
                            I'm always interested in new opportunities, collaborations, and interesting projects. 
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            {contactInfo.map((info, index) => (
                                <a 
                                    key={index}
                                    href={info.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-3 rounded-lg border border-primaryColor/30 hover:border-primaryColor hover:bg-primaryColor/5 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-primaryColor/10 rounded-lg flex items-center justify-center group-hover:bg-primaryColor/20 transition-colors duration-300">
                                        <info.icon className="text-primaryColor group-hover:scale-110 transition-transform duration-300" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-primaryColor text-sm font-medium">{info.label}</p>
                                        <p className="text-white group-hover:text-primaryColor transition-colors duration-300">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 border border-primaryColor/40 rounded-lg flex items-center justify-center hover:border-primaryColor transition-all duration-300 ${social.color} group`}
                                >
                                    <social.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div 
                    data-aos="fade-left" 
                    data-aos-duration="800"
                    className="bg-bgColor/50 backdrop-blur-sm border border-primaryColor/60 rounded-2xl p-8 shadow-[0_0_15px_0_#64FFDA50] hover:shadow-[0_0_25px_0_#64FFDA70] transition-all duration-500"
                >
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <IconMessage className="text-primaryColor" size={28} />
                        Send Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div className="relative group">
                            <label className="block text-primaryColor text-sm font-medium mb-2">
                                Name *
                            </label>
                            <div className="relative">
                                <IconUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primaryColor/60 group-focus-within:text-primaryColor transition-colors duration-300" size={20} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 bg-bgColor border border-primaryColor/40 rounded-lg text-white placeholder-textColor/60 focus:border-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor/20 transition-all duration-300"
                                    placeholder="Your full name"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="relative group">
                            <label className="block text-primaryColor text-sm font-medium mb-2">
                                Email *
                            </label>
                            <div className="relative">
                                <IconMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primaryColor/60 group-focus-within:text-primaryColor transition-colors duration-300" size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 bg-bgColor border border-primaryColor/40 rounded-lg text-white placeholder-textColor/60 focus:border-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor/20 transition-all duration-300"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        {/* Subject Field */}
                        <div className="relative group">
                            <label className="block text-primaryColor text-sm font-medium mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-bgColor border border-primaryColor/40 rounded-lg text-white placeholder-textColor/60 focus:border-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor/20 transition-all duration-300"
                                placeholder="What's this about?"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="relative group">
                            <label className="block text-primaryColor text-sm font-medium mb-2">
                                Message *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-bgColor border border-primaryColor/40 rounded-lg text-white placeholder-textColor/60 focus:border-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor/20 transition-all duration-300 resize-none"
                                placeholder="Tell me about your project or idea..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`relative w-full px-8 py-4 bg-primaryColor text-bgColor font-bold rounded-lg overflow-hidden group transition-all duration-300 ${
                                isSubmitting 
                                    ? 'opacity-70 cursor-not-allowed' 
                                    : 'hover:shadow-[0_0_25px_0_#64FFDA70] hover:scale-[1.02]'
                            }`}
                        >
                            {/* Button background animation */}
                            <span className="absolute inset-0 bg-gradient-to-r from-primaryColor to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            
                            {/* Button content */}
                            <span className="relative flex items-center justify-center gap-3">
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-bgColor/30 border-t-bgColor rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <IconSend size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                                        Send Message
                                    </>
                                )}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;