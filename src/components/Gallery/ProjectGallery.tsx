import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectGallery = () => {
  const projects = [
    {
      title: "Employee Turnover Predictor",
      description: "ML-powered dashboard predicting employee turnover risk with 92% accuracy using historical HR data.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      demoLink: "https://demo.example.com/turnover-predictor",
      technologies: ["Python", "TensorFlow", "React", "Flask"],
    },
    {
      title: "HR Analytics Dashboard",
      description: "Interactive visualization platform for real-time workforce metrics and KPIs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      demoLink: "https://demo.example.com/hr-dashboard",
      technologies: ["D3.js", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Mine Production Bonus Scheme",
      description: "Analytics tool tracking production bonus",
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=800&q=80",
      demoLink: "https://demo.example.com/recruitment-analyzer",
      technologies: ["R", "Shiny", "PostgreSQL", "Tableau"],
    },
    {
      title: "Compensation Analysis Tool",
      description: "Statistical analysis platform for salary benchmarking and equity assessment.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      demoLink: "https://demo.example.com/compensation-tool",
      technologies: ["Python", "Pandas", "Plotly", "FastAPI"],
    },
    {
      title: "Scheme of Service",
      description: "Restructuring Position titles and aligning frameworks to salary structure",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      demoLink: "https://demo.example.com/skills-analyzer",
      technologies: ["PyTorch", "React", "Django", "Neo4j"],
    },
    {
      title: "Employee Engagement Monitor",
      description: "Real-time sentiment analysis dashboard for employee feedback and surveys.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
      demoLink: "https://demo.example.com/engagement-monitor",
      technologies: ["NLP", "Vue.js", "Express", "Redis"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
