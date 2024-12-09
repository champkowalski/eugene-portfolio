import React from "react";
import ProjectCard from "./ProjectCard";
import { useResources } from "../../hooks/resources";
import { metaUrl } from "../../lib";
import { Loader } from "lucide-react";

const AssignmentGallery = () => {
  const { isLoading, data, error } = useResources({
    url: metaUrl.skills_assignment,
    queryKey: ["skills_assignment", metaUrl.skills_assignment],
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills Obtained from Assignments</h2>
        {isLoading && (
          <div className="flex justify-center">
            <Loader className="animate-spin" />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data && data.map((project, index) => <ProjectCard key={project.Id} {...project} />)}
        </div>
      </div>
    </section>
  );
};

export default AssignmentGallery;
