import React from 'react';
import CourseInput from './CourseInput';

const Semester = ({ index, courses, handleCourseChange, handleCourseNumberChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl mb-4">Semester {index + 1}</h2>
      <input
        type="number"
        placeholder="Number of Courses"
        className="border p-2 mb-4 w-full bg-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        onChange={(e) => handleCourseNumberChange(index, e.target.value)}
      />
      {courses.map((course, courseIndex) => (
        <CourseInput
          key={courseIndex}
          index={index}
          courseIndex={courseIndex}
          handleCourseChange={handleCourseChange}
        />
      ))}
    </div>
  );
};

export default Semester;
