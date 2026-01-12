import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import developerCoding from "@/assets/developer-coding.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const Blog = () => {
  const blogPosts = [
    {
      image: blog1,
      author: "Emily Johnson",
      title: "How To Own Web Design Agency For Free",
      excerpt: "Explore the essential steps to launching your own web design agency without breaking the bank.",
    },
    {
      image: blog2,
      author: "John Martin",
      title: "5 Difficult Things About Web Design Agency",
      excerpt: "Discover the challenges every web design agency faces and how to overcome them.",
    },
    {
      image: blog3,
      author: "Christopher Wilson",
      title: "Web Design Agency Is So Famous, But Why?",
      excerpt: "Understand the factors that contribute to the success and popularity of web design agencies.",
    },
    {
      image: teamMeeting,
      author: "Andrew Moore",
      title: "5 Difficult Things About Web Design Agency",
      excerpt: "Learn about the common hurdles in running a web design agency and strategies to navigate them.",
    },
    {
      image: developerCoding,
      author: "William Lewis",
      title: "How To Own Web Design Agency For Free",
      excerpt: "A comprehensive guide to starting a web design agency with minimal investment.",
    },
    {
      image: teamCollaboration,
      author: "Jessica Alford",
      title: "5 Difficult Things About Web Design Agency",
      excerpt: "Insights into the most challenging aspects of managing a web design agency.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 group">
  <div className="h-72 w-full relative overflow-hidden">
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/70 
                    transition-colors duration-300 
                   ">
    </div>

    {/* Image */}
    <img
      src={blog1}
      alt="Blog"
      className="w-full h-full object-cover mix-blend-overlay"
    />

    {/* Text Content */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-primary-foreground animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Blog
        </h1>
        <p className="max-w-xl mx-auto text-primary-foreground/80">
          Stay updated with the latest insights, tips, and trends in web development and design.
        </p>
      </div>
    </div>

  </div>
</section>


      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group animate-fade-up group-hover:[#2047F4]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-primary font-medium text-sm mb-2">{post.author}</p>
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  {/* <span className="text-sm bg-primary text-[#2047F4]-foreground px-3 py-1 rounded">
                    {post.date}
                  </span> */}
                  {/* <Link to="#" className="text-primary hover:underline flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link> */}
                </div>
              </article>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <button className="btn-primary">
              Load More
            </button>
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
