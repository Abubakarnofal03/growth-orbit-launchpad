import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Clock, TrendingUp, Brain, Code, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How SMARB Technologies is Redefining AI Solutions in 2024",
      excerpt: "Discover how our innovative AI and machine learning approaches are transforming businesses across industries, from RAG systems to computer vision implementations.",
      content: "At SMARB Technologies, we're pioneering the next generation of AI solutions that truly understand and solve real business problems...",
      author: "SMARB Tech Team",
      date: "2024-12-01",
      readTime: "8 min read",
      category: "AI Solutions",
      tags: ["AI", "Machine Learning", "Business Automation", "Innovation"],
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Top 5 Ways Businesses Benefit from Automation with SMARB Technologies",
      excerpt: "Learn how automation solutions from SMARB Technologies can streamline operations, reduce costs, and boost productivity for businesses of all sizes.",
      content: "Business automation is no longer a luxury—it's a necessity for companies looking to stay competitive in today's fast-paced market...",
      author: "Digital Strategy Team",
      date: "2024-11-28",
      readTime: "6 min read",
      category: "Business Automation",
      tags: ["Automation", "Productivity", "Cost Reduction", "Efficiency"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "The Future of Software Development in 2025: SMARB Technologies Perspective",
      excerpt: "Explore emerging trends in software development and how SMARB Technologies is preparing for the future of custom software solutions.",
      content: "The software development landscape is evolving rapidly, with new technologies and methodologies emerging every year...",
      author: "Development Team Lead",
      date: "2024-11-25",
      readTime: "10 min read",
      category: "Software Development",
      tags: ["Software Development", "Future Trends", "Technology", "Innovation"],
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "RAG Systems: Revolutionizing Document Intelligence",
      excerpt: "Deep dive into Retrieval-Augmented Generation systems and how SMARB Technologies implements them for intelligent document processing.",
      content: "Retrieval-Augmented Generation (RAG) represents a breakthrough in how we process and understand documents...",
      author: "AI Research Team",
      date: "2024-11-20",
      readTime: "12 min read",
      category: "AI Technology",
      tags: ["RAG", "NLP", "Document Processing", "AI"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Digital Marketing Strategies That Actually Work in 2024",
      excerpt: "Proven digital marketing strategies from SMARB Technologies that drive real results for businesses in today's competitive landscape.",
      content: "Digital marketing continues to evolve, and what worked yesterday might not work today...",
      author: "Marketing Strategy Team",
      date: "2024-11-15",
      readTime: "7 min read",
      category: "Digital Marketing",
      tags: ["Digital Marketing", "SEO", "Growth Strategy", "Brand Building"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Custom Software vs Off-the-Shelf Solutions: Making the Right Choice",
      excerpt: "SMARB Technologies expert guide to choosing between custom software development and off-the-shelf solutions for your business needs.",
      content: "One of the most critical decisions businesses face is whether to invest in custom software development or use existing solutions...",
      author: "Business Consultant",
      date: "2024-11-10",
      readTime: "9 min read",
      category: "Business Strategy",
      tags: ["Custom Software", "Business Strategy", "ROI", "Decision Making"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      featured: false
    }
  ];

  const categories = ["All", "AI Solutions", "Software Development", "Digital Marketing", "Business Strategy"];

  return (
    <>
      <SEOHead 
        title="SMARB Technologies Blog | AI Solutions & Software Development Insights"
        description="Expert insights on AI solutions, software development, and digital marketing strategies from the SMARB Technologies team. Stay updated with the latest technology trends."
        canonicalUrl="https://www.smarbtechnologies.com/blog"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://www.smarbtechnologies.com/" },
          { name: "Blog", url: "https://www.smarbtechnologies.com/blog" }
        ]}
      />
      <Layout>
      {/* SEO-optimized breadcrumb navigation */}
      <nav className="pt-24 pb-4 px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li className="text-foreground">Blog</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            SMARB Technologies <span className="text-primary">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Expert insights on AI solutions, software development, and digital marketing strategies from the SMARB Technologies team.
          </motion.p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-strong transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                        <Calendar className="h-4 w-4 ml-2" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-medium transition-all duration-300 h-full">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors flex-grow">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4">
                      <div className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch with SMARB Technologies to discuss how our AI solutions and software development expertise can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/#contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/#services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default Blog;