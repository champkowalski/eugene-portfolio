import React from 'react';
import { Calendar, FileText, Award } from 'lucide-react';

interface AssignmentCardProps {
  title: string;
  company: string;
  date: string;
  description: string;
  outcome: string;
  grade?: string;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({
  title,
  company,
  date,
  description,
  outcome,
  grade
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-blue-600 font-medium">{company}</p>
        </div>
        {grade && (
          <div className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
            <Award className="h-4 w-4 text-green-600" />
            <span className="text-green-600 font-medium">{grade}</span>
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-2 text-gray-500 mb-4">
        <Calendar className="h-4 w-4" />
        <span className="text-sm">{date}</span>
      </div>

      <div className="space-y-3">
        <div className="flex items-start space-x-2">
          <FileText className="h-5 w-5 text-gray-400 mt-1" />
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="border-t pt-3">
          <p className="text-gray-700 font-medium">Outcome:</p>
          <p className="text-gray-600">{outcome}</p>
        </div>
      </div>
    </div>
  );
}

export default AssignmentCard;