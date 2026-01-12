import { Link } from "react-router-dom";
import { CheckCircle, Award, Clock, DollarSign, Play, Facebook, Linkedin, Twitter } from "lucide-react";
import Layout from "@/components/Layout";
import rectangle from "@/assets/rectangle.png";
import head from "@/assets/head.png";
import dxz from "@/assets/dxz.png";
import teamCollaboration from "@/assets/about.png";
import developerCoding from "@/assets/developer-coding.jpg";
import customer from "@/assets/customer.png";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

const About = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best Price Guaranteed",
      description: "Be sure the cheapest price available and a these exclusivity",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best Price Guaranteed",
      description: "Be sure the cheapest price are these available and a these exclusivity fast",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best Price Guaranteed",
      description: "Be sure the cheapest price available and a these are exclusivity fast",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Advanced Innovative Agency",
      description: "Our experienced developers are skilled in the latest technologies, making innovative and high-quality websites for your business needs.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Customized Solutions",
      description: "We tailor every project to meet the unique requirements of each client, delivering solutions that perfectly align with your business goals.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "We understand the importance of time in business, which is why we prioritize efficient project management to deliver on schedule.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Affordable Pricing",
      description: "We offer competitive rates without compromising on quality, making us an excellent choice for cost-effective solutions.",
    },
  ];

  const teamMembers = [
    {
      image: teamMember1,
      name: "Thomas",
      role: "Senior Front-end Developer",
      description: "Our front-end developer crafts pixel-perfect UI with modern tech for smooth, user-friendly interfaces.",
    },
    {
      image: teamMember2,
      name: "Emily",
      role: "Product Manager",
      description: "Our product manager transforms insights into strategy, ensuring every feature solves the right problem at the right time.",
    },
    {
      image: teamMember3,
      name: "Micheal",
      role: "UX/UI Designer",
      description: "Our UI/UX designer blends research, design, and usability to create meaningful experiences that drive user satisfaction.",
    },
    {
      image: teamMember4,
      name: "Sarah",
      role: "Data Analyst",
      description: "Our data analyst uncovers trends and patterns, turning complex data into clear business intelligence",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="h-80 w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-black/60"></div>
          <img
            src={head}
            alt="About us hero"
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
              <p className="max-w-xl mx-auto text-primary-foreground/80">
                Empowering businesses with innovative software solutions, tailored to drive growth and success in the digital era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="section-subtitle mb-3 text-[#2C35A5]">Our Story</p>
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="section-title mb-6">
  We offer the best{" "}
  <span className="text-[#030F80]">Design Services</span> in town.
</h2>

            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <p className="text-muted-foreground">
                At TECHISOL, we specialize in creating tailored digital solutions that drive growth and innovation. From custom software development to seamless mobile and web applications.
              </p>
              <p className="text-muted-foreground">
                Our experienced team is dedicated to delivering high-quality technology solutions that meet your business needs. Let us help you transform your ideas into powerful digital experiences.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#2C34A426] text-[#282C4B]-foreground rounded-xl p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-black-foreground/0 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-[#5F606B]-foreground/80 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>


          {/* Video Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden">
              <img
                src={dxz}
                alt="Team meeting"
                className="w-full h-64 object-cover hover-scale"
              />
            </div>
            <div className="rounded-xl overflow-hidden relative group cursor-pointer">
              <img
                src={developerCoding}
                alt="Developer coding"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-destructive flex items-center justify-center text-primary-foreground animate-bounce-subtle">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One Stop Solution Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={teamCollaboration}
                alt="Team collaboration"
                className="rounded-xl shadow-card"
              />
            </div>

            <div className="animate-fade-up">
              <h2 className="section-title mb-6 text-[#282C4B]">
                One Stop Solution For All Your HR Needs
              </h2>
              <p className="text-muted-foreground mb-6">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>

              <div className="flex gap-4 mb-6">
                <button className="text-[#2C35A5] font-medium border-b-2 border-primary pb-2">
                  Our mission
                </button>
                {/* <button className="text-muted-foreground font-medium pb-2 hover:text-primary transition-colors">
                  Our Vision
                </button> */}
              </div>

              <p className="text-muted-foreground mb-8">
                Our mission is to empower businesses by delivering innovative software solutions that drive growth, efficiency, and customer satisfaction. We are committed to excellence, quality, and the success of our clients.
              </p>

              <Link to="/features" className="bg-[#2047F4] btn-primary rounded-[30px] inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3 text-[#2C35A5]">Choose Us</p>
            <h2 className="section-title text-[#282C4B]">Why Choose Us?</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src={rectangle}
                alt="Team meeting"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6 text-[#282C4B]">
              {whyChooseUs.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="feature-icon flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3 text-[#2C35A5]">Our Team</p>
            <h2 className="section-title text-[#282C4B]">Meet the team behind the agency success</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-soft animate-fade-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-[#0866FF] flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#27A7E8] flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3 text-[#2C35A5]">Our Customers</p>
            <h2 className="section-title text-[#282C4B]">Our Happy Customers</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <img
                src={customer}
                alt="Happy customer"
                className="rounded-2xl w-full max-w-md mx-auto shadow-card"
              />
            </div>

            <div className="animate-fade-up">
              <div className="bg-[#2047F4] w-14 h-14 rounded-xl flex items-center justify-center text-primary-foreground text-3xl mb-6">
                "
              </div>
              <p className="text-[#282C4B]-foreground mb-6 text-lg">
                "HR Solutions are incredibly accommodating, diligent and competent. They understand the scope, needs and importance of both concerned parties within the interviewing and hiring process - That really helps with building a life and career"
              </p>
              <p className="font-semibold text-xl text-[#282C4B]">James Thomas</p>
              <p className="text-muted-foreground">UI Designer</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
