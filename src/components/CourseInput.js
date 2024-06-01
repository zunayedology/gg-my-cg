import React from 'react';

const CourseInput = ({ index, courseIndex, handleCourseChange }) => {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder={`Course Title ${courseIndex + 1}`}
        className="border p-2 mr-2 flex-grow"
        onChange={(e) => handleCourseChange(index, courseIndex, 'title', e.target.value)}
      />
      <input
        type="number"
        placeholder="Grade Point"
        className="border p-2 w-24"
        onChange={(e) => handleCourseChange(index, courseIndex, 'grade', e.target.value)}
      />
    </div>
  );
};

export default CourseInput;
