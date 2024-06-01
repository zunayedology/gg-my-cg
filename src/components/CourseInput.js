import React from 'react';

const CourseInput = ({ index, courseIndex, handleCourseChange }) => {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder={`Course Title ${courseIndex + 1}`}
        className="border p-2 mr-2 flex-grow bg-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        onChange={(e) => handleCourseChange(index, courseIndex, 'title', e.target.value)}
      />
      <input
        type="number"
        placeholder="Grade Point"
        className="border p-2 w-250 bg-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        onChange={(e) => handleCourseChange(index, courseIndex, 'grade', e.target.value)}
      />
    </div>
  );
};

export default CourseInput;
