import React from "react";
import AssignmentCard from "./AssignmentCard";
import { useResources } from "../../hooks/resources";
import { metaUrl } from "../../lib";
import { Loader } from "lucide-react";

const AssignmentsPortfolio = () => {
  const { data, error, isLoading } = useResources({
    queryKey: ["assignments_porfolio", metaUrl.assignment_portfolio],
    url: metaUrl.assignment_portfolio,
  });
  const assignments = [
    {
      title: "Developing Business Systems",
      company: "Envison Growth",
      date: "September 2024 - Present",
      description:
        "Led the implementation of advanced analytics tools to track employee performance metrics and engagement levels across departments.",
      outcome: "Improved employee retention by 25% through data-driven insights and recommendations.",
      grade: "A+",
    },
    {
      title: "Aston Global Advantage",
      company: "Group 49",
      date: "September 2024 - November 2024",
      description:
        "Analyzed historical recruitment data to identify bottlenecks and inefficiencies in the hiring process.",
      outcome: "Reduced time-to-hire by 40% and improved quality of hires through standardized metrics.",
      grade: "A",
    },
    {
      title: "Managing Project",
      company: "Group 2",
      date: "September 2024 - Present",
      description:
        "Designed and implemented comprehensive employee engagement surveys using advanced statistical methods.",
      outcome: "Identified key drivers of engagement, leading to a 30% improvement in employee satisfaction scores.",
      grade: "A+",
    },
    {
      title: "Consultant Toolbox",
      company: "Sarbusol Inc",
      date: "Oct 2024 - Dec 2024",
      description: "Conducted detailed analysis of compensation structures across different roles and departments.",
      outcome: "Developed equitable pay scales resulting in 15% improvement in pay satisfaction.",
      grade: "A",
    },
  ];

  return (
    <section className="py-16 bg-white" id="assignments">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Assignments Portfolio</h2>
        {isLoading && (
          <div className="flex justify-center">
            <Loader className="animate-spin" />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data && data.map((assignment: any) => <AssignmentCard key={assignment.Id} {...assignment} />)}
        </div>
      </div>
    </section>
  );
};

export default AssignmentsPortfolio;
