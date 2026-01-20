import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import herowoman from "@/assets/hero-woman.png";
import teamMeeting from "@/assets/team-meeting.jpg";
import developerCoding from "@/assets/developer-coding.jpg";
import Grouptestimonials from "@/assets/Grouptestimonials.png";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const Index = () => {
  const services = [
    {
      icon: "💡",
      title: "AI services",
      description: "Leverage agile frameworks to provide a robust high level synopsis for innovative overviews",
    },
    {
      icon: "💻",
      title: "Software development",
      description: "Bring to the table win-win survival strategies to ensure proactive domination",
    },
    {
      icon: "⚙️",
      title: "DevOps",
      description: "Grow the holistic world view of disruptive innovation via workplace diversity",
    },
  ];

  const blogPosts = [
    {
      image: blog1,
      author: "Jessica Alford",
      authorColor: "#717488",
      title: "How To Own Web Design Agency For Free",
      date: "Oct 22",
    },
    {
      image: blog2,
      author: "Jessica Alford", color: "#717488",
      title: "5 Difficult Things About Web Design Agency",
      date: "Oct 22",
    },
    {
      image: blog3,
      author: "Jessica Alford",
      title: "Web Design Agency Is So Famous, But Why?",
      date: "Oct 22",
    },
    {
      image: blog3,
      author: "Jessica Alford",
      title: "Web Design Agency Is So Famous, But Why?",
      date: "Oct 22",
    },
    {
       image: blog2,
      author: "Jessica Alford",
      title: "5 Difficult Things About Web Design Agency",
      date: "Oct 22",
    },
    {
      image: blog1,
      author: "Jessica Alford",
      title: "How To Own Web Design Agency For Free",
      date: "Oct 22",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient hero-shape pt-32 pb-40 md:pb-52 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Empowering Your Vision with Cutting-Edge Software Solutions
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                Delivering innovative, reliable, and scalable software to drive your business forward. Let's turn your ideas into impactful digital experiences.
              </p>
              <Link to="/services" className="bg-[#fff] inline-block text-[#282C4B] px-4 py-2 rounded-[20px]">
                Learn More
              </Link>
            </div>

            <div className="relative animate-slide-in-right hidden lg:block">
              <img
                src={herowoman}
                alt="Professional woman with laptop"
                className="rounded-2xl shadow-elevated max-w-md ml-auto"
              />
              {/* Phone CTA Card */}
              <div className="absolute bottom-[-5] -left-8 bg-white text-[#282C4B] p-6 rounded-xl shadow-elevated animate-bounce-subtle">
                <p className="text-sm mb-1">For Further Inquiries Call:</p>
                <p className="text-2xl font-bold flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +234 816 794 9054
                </p>
                <p className="text-sm text-[#282C4B]/80 mt-2">
                  Ready to elevate your business? Contact us to explore tailored software solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={teamMeeting}
                  alt="Team meeting"
                  className="rounded-xl shadow-card hover-scale"
                />
                <img
                  src={developerCoding}
                  alt="Developer coding"
                  className="rounded-xl shadow-card mt-8 hover-scale"
                />
              </div>
              {/* Testimonial faces circle */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background overflow-hidden">
                    <img
                      src={Grouptestimonials}
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up">
              <p className="section-subtitle mb-3">———  About us</p>
              <h2 className="section-title mb-6">
                Empowering Your Vision with Cutting-Edge Software Solutions
              </h2>
              <p className="text-muted-foreground mb-6">
                We're top notch Award Winning Agency. We are Experienced in Providing Innovative Creative Services to Our Clients Worldwide.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3" >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Innovation-Led Strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Scalable Custom Architecture</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>End-to-End Digital Transformation</span>
                </li>
              </ul>

              {/* Stats */}
              <div className="flex gap-4">
                <div className="stat-card bg-stat-blue" style={{ backgroundColor: "#282C4B" }}>
                  <p className="text-3xl" >3K+</p>
                  <p className="text-sm font-normal">Complete Projects</p>
                </div>
                <div className="stat-card bg-stat-dark" style={{backgroundColor: "#F94C30"}}>
                  <p className="text-3xl">3K+</p>
                  <p className="text-sm font-normal">Company Served</p>
                </div>
                <div className="stat-card bg-stat-blue" style={{ backgroundColor: "#242997"}}>
                  <p className="text-3xl">3K+</p>
                  <p className="text-sm font-normal">Complete Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#EAF9FF]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <p className="section-subtitle mb-3">Services</p>
              <h2 className="section-title mb-4">Services Overview</h2>
              <p className="text-muted-foreground">
                We will bring the breathe of our experience and industry knowledge to help you succeed
              </p>
            </div>

            <div className="lg:w-2/3 grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="service-card animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="feature-icon mb-4 text-2xl">{service.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Our Testimonials</p>
            <h2 className="section-title">
              What <span className="line-through text-muted-foreground">Our</span> Clients Says?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="text-8xl text-primary/20 absolute -top-8 -left-4">"</div>
              <img
                src={Grouptestimonials}
                alt="Client testimonial"
                // className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-primary/20"
                width={400}
                height={400}
              />
            </div>

            <div>
              <div className="bg-[#2B34A3] w-12 h-12 rounded-lg flex items-center justify-center text-primary-foreground text-2xl mb-6">
                "
              </div>
              <p className="text-lg text-muted-foreground mb-6 italic">
                "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer Sprache aussieht."
              </p>
              <p className="font-semibold text-lg">Alexander Gibson</p>
              {/* <div className="flex gap-2 mt-6">
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-[#2B34A3] transition-colors">
                  ‹
                </button>
                <button className="w-10 h-10 rounded-full bg-[#2B34A3] text-primary-foreground flex items-center justify-center hover:bg-[#2B34A3]/90 transition-colors">
                  ›
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-4">
              <span className="bg-[#2047F4] text-primary-foreground text-xs px-3 py-1 rounded">Oct</span>
              <h2 className="section-title">Latest News From Our Blog</h2>
              <span className="bg-[#2047F4] text-primary-foreground text-xs px-3 py-1 rounded">Oct 22</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.title}
                className="group animation-fade-up"
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-[#717488] font-medium text-sm mb-2">{post.author}</p>
                <h3 className="font-semibold text-lg mb-3 group-hover:text-[#2047F4] transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-[#2047F4] text-primary-foreground px-3 py-1 rounded">
                    {post.date}
                  </span>
                  <Link to="/blog" className="text-primary hover:underline flex items-center gap-1">
                    {/* <ArrowRight className="w-4 h-4" /> */}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog" className="bg-[#262A97] inline-block text-white px-4 py-2 rounded-[20px]">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
