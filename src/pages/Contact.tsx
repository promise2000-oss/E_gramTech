import { useState } from "react";
import { Phone, Mail, Send, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbddljad";

const Contact = () => {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent successfully",
        description: "We’ll get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Formspree error:", error);

      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <Phone className="w-6 h-6 mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Phone Number</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+2348167949054" className="hover:text-primary">
                    +234 816 794 9054
                  </a><br />
                  <a href="tel:+2349126441023" className="hover:text-primary">
                    +234 912 644 1023
                  </a>
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <Mail className="w-6 h-6 mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Email Address</h3>
                <a
                  href="mailto:egramtechglobal@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  egramtechglobal@gmail.com
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-lg border">
                <h2 className="text-2xl font-semibold mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full rounded-lg border px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#1D2597] px-6 py-3 text-white font-medium transition hover:bg-primary/90 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
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
