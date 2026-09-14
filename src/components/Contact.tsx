import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Twitter, 
  Copy, 
  Check, 
  Send, 
  ArrowRight,
  Phone,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Business Website',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.socials.whatsappNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    // In a production environment with mail client, redirect to mailto:
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Clarity Creative,\n\nMy name is ${formData.name}.\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-title">
          <p>GET IN TOUCH</p>
          <h2>
            LET&apos;S BUILD <span>SOMETHING GREAT</span>
          </h2>
          <p className="section-subtitle-text">
            Have a project in mind? Let&apos;s discuss how I can help bring it to life with modern code and clear solutions.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info & Channels */}
          <div className="contact-info-card">
            <h3 className="text-xl font-extrabold text-white mb-3">
              Direct Contact
            </h3>
            <p className="text-sm text-[#94A3B8] mb-8 leading-relaxed">
              Feel free to reach out directly via email, message on WhatsApp, or connect on Twitter/X. I respond promptly to all new project inquiries.
            </p>

            {/* Email Channel */}
            <div className="contact-item">
              <div className="contact-icon-box">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-grow min-w-0">
                <span className="text-xs text-[#94A3B8] font-semibold block">Email Address</span>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-sm font-bold text-white hover:text-[#A78BFA] transition-colors truncate block"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-[#0E1428] border border-[#1E293B] text-[#94A3B8] hover:text-white hover:border-[#8B5CF6]/50 transition-colors"
                title="Copy email"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp Channel */}
            <div className="contact-item">
              <div className="contact-icon-box">
                <MessageCircle className="w-5 h-5 text-[#22C55E]" />
              </div>
              <div className="flex-grow min-w-0">
                <span className="text-xs text-[#94A3B8] font-semibold block">WhatsApp Direct</span>
                <a 
                  href={personalInfo.socials.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white hover:text-[#22C55E] transition-colors block"
                >
                  {personalInfo.socials.whatsappNumber}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-[#0E1428] border border-[#1E293B] text-[#94A3B8] hover:text-white hover:border-[#22C55E]/50 transition-colors"
                title="Copy phone"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Twitter / X Channel */}
            <div className="contact-item">
              <div className="contact-icon-box">
                <Twitter className="w-5 h-5 text-[#60A5FA]" />
              </div>
              <div className="flex-grow min-w-0">
                <span className="text-xs text-[#94A3B8] font-semibold block">Twitter / X</span>
                <a 
                  href={personalInfo.socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white hover:text-[#60A5FA] transition-colors truncate block"
                >
                  @Toriblackm8j9
                </a>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row gap-3">
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp flex-1"
                id="contact-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-secondary flex-1"
                id="contact-email-btn"
              >
                <Mail className="w-4 h-4 text-[#A78BFA]" />
                <span>SEND EMAIL</span>
              </a>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="contact-form-card">
            <h3 className="text-xl font-extrabold text-white mb-2">
              Send a Project Message
            </h3>
            <p className="text-xs text-[#94A3B8] mb-6">
              Fill out the form below and I will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#0E1428] border border-[#8B5CF6]/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/20 text-[#A78BFA] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Message Dispatched</h4>
                <p className="text-xs text-[#94A3B8]">
                  Thank you for reaching out! Opening your email client to complete transmission. You can also message me on WhatsApp for immediate response.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary !text-xs !py-2 !px-4 mt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="contact-inquiry-form">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alex Johnson"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. alex@example.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-project-type" className="form-label">Project Type</label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="Business Website">Business Website</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Personal Portfolio">Personal Portfolio</option>
                    <option value="Restaurant Website">Restaurant Website</option>
                    <option value="Web Application / Portal">Web Application / Portal</option>
                    <option value="Website Deployment / Redesign">Website Deployment / Redesign</option>
                    <option value="Custom Project">Custom Project</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Project Details &amp; Requirements</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your timeline, goals, pages needed, or features..."
                    className="form-textarea resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  id="submit-contact-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
