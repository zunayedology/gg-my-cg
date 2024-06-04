import React from 'react';

const CourseInput = ({ index, courseIndex, handleCourseChange }) => {
  const gradePoints = [
    4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, 0.7, 0.0
  ];

  return (
    <div className="flex mb-4">
      <input
        type="text"
        maxLength={7}
        placeholder={`Course Title ${courseIndex + 1}`}
        className="border p-2 mr-2 flex-grow bg-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        onChange={(e) => handleCourseChange(index, courseIndex, 'title', e.target.value)}
      />
      <select
        className="border p-2 w-1/2 bg-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        onChange={(e) => handleCourseChange(index, courseIndex, 'grade', e.target.value)}
      >
        <option value="">Grade Point</option>
        {gradePoints.map((point) => (
          <option key={point} value={point}>{point}</option>
        ))}
      </select>
    </div>
  );
};

export default CourseInput;
