import React from 'react';
import { LineChart, Users, TrendingUp, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Employee Attrition Prediction",
      description: "Developed a machine learning model to predict employee turnover with 92% accuracy",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      tags: ["Python", "Machine Learning", "HR Analytics"]
    },
    {
      title: "Performance Analytics Dashboard",
      description: "Created interactive dashboards for real-time performance monitoring",
      icon: <LineChart className="h-8 w-8 text-blue-600" />,
      tags: ["Tableau", "SQL", "Data Visualization"]
    },
    {
      title: "Recruitment Analytics",
      description: "Optimized hiring process using data-driven insights",
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      tags: ["R", "Statistics", "Recruitment"]
    },
    {
      title: "Workforce Planning Model",
      description: "Built predictive models for optimal workforce allocation",
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      tags: ["Python", "Forecasting", "HR Strategy"]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;