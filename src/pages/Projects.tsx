import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import project from "@/assets/project.png";
import teamMeeting from "@/assets/team.jpg";
import developerCoding from "@/assets/developer-coding.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import blog1 from "@/assets/blog-1.jpg";

const Projects = () => {
  const projectDetails = {
    client: "Thomas",
    location: "United Kingdom",
    date: "March 22, 2023",
    website: "info@tecishsol.com",
  };

  const features = [
    {
      title: "User-Friendly Interface",
      description: "Simplified and responsive interface for smooth navigation and a pleasant shopping experience.",
    },
    {
      title: "Fast Loading Speeds",
      description: "Optimized for quick load times, ensuring that users can browse and purchase products without delays.",
    },
    {
      title: "Robust Product Management",
      description: "Advanced product categorization, inventory tracking, and order management tools tailored for e-commerce efficiency.",
    },
    {
      title: "Secure Payment Integration",
      description: "Multiple secure payment options to enhance buyer trust and transaction convenience.",
    },
    {
      title: "Scalability and Flexibility",
      description: "Designed to scale effortlessly, adapting to growing business demands and diverse user needs.",
    },
    {
      title: "Intuitive User Interface",
      description: "A clean, responsive design ensures easy navigation and enhances user engagement.",
    },
  ];

  const relatedProjects = [
    {
      image: blog1,
      title: "Tech Website Solution",
      category: "Technology",
    },
    {
      image: teamMeeting,
      title: "Flashost",
      category: "E-commerce",
    },
    {
      image: developerCoding,
      title: "Flashost",
      category: "Development",
    },
    {
      image: teamCollaboration,
      title: "Flashost",
      category: "Business",
    },
    {
      image: project,
      title: "Flashost",
      category: "Technology",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="h-80 w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-black/90"></div>
          <img
            src={teamMeeting}
            alt="Our Projects"
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
              <p className="max-w-xl mx-auto text-primary-foreground/80">
                Explore our diverse portfolio of successful projects, each crafted with precision and innovation to meet unique business challenges and deliver lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Image */}
            <div className="animate-fade-up">
              <img
                src={project}
                alt="Flashost project"
                className="rounded-xl shadow-card w-full"
              />
            </div>

            {/* Project Info */}
            <div className="animate-slide-in-right">
              <h2 className="section-title mb-6">Project Details</h2>
              
              <div className="bg-secondary rounded-lg overflow-hidden mb-8">
                <div className="grid grid-cols-2">
                  <div className="p-4 border-b border-border">
                    <p className="text-sm font-medium text-muted-foreground">Client</p>
                    <p className="font-semibold">{projectDetails.client}</p>
                  </div>
                  <div className="p-4 border-b border-border bg-background">
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p className="font-semibold">{projectDetails.location}</p>
                  </div>
                  <div className="p-4 bg-background">
                    <p className="text-sm font-medium text-muted-foreground">Date</p>
                    <p className="font-semibold">{projectDetails.date}</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-muted-foreground">website</p>
                    <p className="font-semibold">{projectDetails.website}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="mt-12">
            <p className="text-muted-foreground mb-8 max-w-4xl">
              Flashost is a cutting-edge e-commerce platform designed to provide users with a seamless shopping experience, focused on speed, ease of use, and adaptability. Built with a scalable architecture, Flashost caters to a wide audience and supports businesses in managing online sales with advanced features and intuitive design. provide users with a seamless shopping experience, focused on speed, ease of use, and adaptability.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="animate-fade-up text-[#282C4B]" style={{ animationDelay: `${index * 0.05}s` }}>
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-foreground rounded-full"></span>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground ml-4 mt-1">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Related Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden animate-fade-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-primary-foreground font-semibold text-lg">{project.title}</p>
                    <p className="text-primary">{project.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
            {relatedProjects.slice(3).map((project, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden animate-fade-up cursor-pointer"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-primary-foreground font-semibold text-lg">{project.title}</p>
                    <p className="text-primary">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
