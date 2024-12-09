import React from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { useResources } from "../hooks/resources";
import { metaUrl } from "../lib";

type CertProps = {
  Id: string | number;
  title: string;
  date: string;
};

const Education = () => {
  const education = [
    {
      degree: " MSc Information Systems & Business Analysis",
      institution: "Aston University ",
      year: "2024-Present",
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
    },
    {
      degree: "Master of Business Administration",
      institution: "University of Bolton,Bolton, UK",
      year: "2020-2021",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    },
    {
      degree: "BSc Mathematics & Statistics",
      institution: "University of Cape Coast ,Cape Coast, Ghana",
      year: "2010-2014",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    },
  ];

  const certifications = [
    {
      name: "Chartered HRM Professional, Ghana– Level 3 ",
      year: "2023",
      icon: <Award className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "EduQual Level 7 – Business Management ",
      year: "2020",
      icon: <Award className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "HR Payroll  ",
      year: "2020",
      icon: <Award className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Full Stack Advanced HR Analytics Certificate  ",
      year: "2018",
      icon: <Award className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Power BI Data Analytics and Business Intelligence ",
      year: "2019",
      icon: <Award className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Data Analytics and Reporting with MS Excel ",
      year: "2018",
      icon: <Award className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Occupational Health & Safety Certificates ",
      year: "2016",
      icon: <Award className="h-6 w-6 text-blue-600" />,
    },
  ];
  const { data, error, isLoading } = useResources({
    queryKey: ["education", metaUrl.education_list],
    url: metaUrl.education_list,
  });
  const query = useResources({
    queryKey: ["certifications", metaUrl.certification_list],
    url: metaUrl.certification_list,
  });
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Education & Certifications</h2>

        <div className="grid md:grid-cols-1 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-5">
                {data &&
                  data.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center space-x-3 mb-3">
                        <Award className="h-6 w-6 text-blue-600" />
                        <h4 className="font-semibold text-lg">{item.school}</h4>
                      </div>
                      <p className="text-gray-600">{item.program}</p>
                      <p className="text-gray-500 text-sm">{item.year}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Certifications</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-5">
                {query.data &&
                  query.data.map((cert: CertProps) => (
                    <div key={cert.Id} className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center space-x-3 mb-3">
                        <Award className="h-6 w-6 text-blue-600" />
                        <h4 className="font-semibold text-lg">{cert.title}</h4>
                      </div>
                      <p className="text-gray-500 ml-7 text-sm">{cert.date}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
