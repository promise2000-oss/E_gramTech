import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-primary-foreground animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="max-w-xl mx-auto text-primary-foreground/80">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="service-card animate-fade-up">
                <div className="feature-icon mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                <p className="text-muted-foreground text-sm">
                  123 Business Street,<br />
                  London, United Kingdom
                </p>
              </div>

              <div className="service-card animate-fade-up delay-100">
                <div className="feature-icon mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Phone Number</h3>
                <p className="text-muted-foreground text-sm">
                  +234 816 794 9054<br />
                  +1 (555) 123-4567
                </p>
              </div>

              <div className="service-card animate-fade-up delay-200">
                <div className="feature-icon mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Address</h3>
                <p className="text-muted-foreground text-sm">
                  info@tecishsol.com<br />
                  support@tecishsol.com
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-in-right">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="section-title mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary flex items-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
