import { Link } from "react-router-dom";
import { Palette, Code, Search, Smartphone, Layout as LayoutIcon, BarChart3, Settings, Lightbulb, Target, ChartLine, Gem } from "lucide-react";
import Layout from "@/components/Layout";
import rectangle from "@/assets/customer.png";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Graphic Design",
      description: "Get responsive website designs with user friendly interface for any type of business.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Get responsive website designs with user friendly interface for any type of business.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Seo & Advertising",
      description: "Get responsive website designs with user friendly interface for any type of business.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Application",
      description: "Get responsive website designs with user friendly interface for any type of business.",
    },
    {
      icon: <LayoutIcon className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Get responsive website designs with user friendly interface for any type of business.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "Get responsive website designs with user friendly interface for any type of business.",
    },
  ];

  const growthFeatures = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Coordination",
      description: "To ideate the best solutions, we always start with figuring out your business goals by keeping close coordination with you. Getting...",
      highlighted: true,
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Flexible Technologies",
      description: "We design systems that grow with your business, adapting to new demands and opportunities as they arise.",
      highlighted: false,
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "End-to-End Project",
      description: "From strategy to deployment, we guide you through every step, making complex transformations manageable and successful.",
      highlighted: false,
    },
    {
      icon: <ChartLine className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description: "To ideate the best solutions, we always start with figuring out your business goals by keeping close coordination with you.",
      highlighted: false,
    },
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Our team crafts software tailored precisely to your business needs, ensuring seamless integration and outstanding...",
      highlighted: false,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Empowering Your Vision with <span className="text-[#2047F4]">Advanced Solutions</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                Explore a suite of custom software, tailored to drive innovation, streamline operations, and propel your business forward
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-all duration-300 hover-lift">
                Learn More
              </Link>
            </div>

            {/* 3D-style floating cards */}
            <div className="relative h-80 hidden lg:block animate-slide-in-right">
              <div className="absolute top-0 right-0 bg-primary-foreground text-foreground px-6 py-4 rounded-xl shadow-elevated animate-float">
                <p className="font-semibold">UI/UX Design</p>
              </div>
              <div className="absolute top-20 right-20 bg-stat-dark text-primary-foreground px-6 py-4 rounded-xl shadow-elevated animate-float delay-100">
                <p className="font-semibold">Mobile Application</p>
              </div>
              <div className="absolute top-40 right-10 bg-stat-dark text-primary-foreground px-6 py-4 rounded-xl shadow-elevated animate-float delay-200">
                <p className="font-semibold">SEO</p>
              </div>
              <div className="absolute bottom-0 right-24 bg-stat-blue text-primary-foreground px-6 py-4 rounded-xl shadow-elevated animate-float delay-300">
                <p className="font-semibold">Web development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3 text-#2C35A5">What We Do?</p>
            <h2 className="section-title text-#282C4B">Services That Help You Grow</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="service-card animate-fade-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Growth Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Augment Your Business Growth!
            </h2>
            <p className="text-primary-foreground/80">
              We specialize in creating innovative software solutions designed to scale with your business. Our team combines cutting-edge technology with deep industry expertise to deliver applications and services that streamline processes, enhance customer engagement, and drive efficiency. From custom development to seamless integration, we're here to empower your growth at every stage, enabling you to stay ahead in a competitive digital landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {growthFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`rounded-xl p-5 animate-fade-up ${
                  feature.highlighted
                    ? "bg-background text-foreground"
                    : "bg-primary-foreground/10 border border-primary-foreground/20"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  feature.highlighted ? "bg-primary/10 text-primary" : "bg-primary-foreground/20"
                }`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className={`text-sm ${
                  feature.highlighted ? "text-muted-foreground" : "text-primary-foreground/70"
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Our Customers</p>
            <h2 className="section-title">Our Happy Customers</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <img
                src={rectangle}
                alt="Happy customer"
                className="rounded-2xl w-full max-w-md mx-auto shadow-card"
              />
            </div>

            <div className="animate-fade-up">
              <div className="bg-[#2047F4] w-14 h-14 rounded-xl flex items-center justify-center text-primary-foreground text-3xl mb-6">
                "
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                "HR Solutions are incredibly accommodating, diligent and competent. They understand the scope, needs and importance of both concerned parties within the interviewing and hiring process - That really helps with building a life and career"
              </p>
              <p className="font-semibold text-[#282C4B]xl">James Thomas</p>
              <p className="text-muted-foreground">UI Designer</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
