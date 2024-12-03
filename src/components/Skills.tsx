import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        { name: "Python", level: 90 },
        { name: "R Programming", level: 85 },
        { name: "MS Excel", level: 88 },
        { name: "Tableau", level: 92 },
        { name: "ERP Next", level: 85 },
        { name: "Oracle Fusion", level: 90 },
      ],
    },
    {
      title: "HR Analytics",
      skills: [
        { name: "Business Process Mapping", level: 95 },
        { name: "Human Resources / Industrial Relations", level: 88 },
        { name: "Data Analysis & Reporting (Excel, Power BI)", level: 90 },
        { name: "Project Management", level: 92 },
        { name: "End to end Payroll Management", level: 94 },
        { name: "Budgeting & Financial Analysis", level: 94 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
