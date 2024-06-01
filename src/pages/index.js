import React, { useState } from 'react';
import Semester from '../components/Semester';
import DarkModeToggle from '../components/DarkModeToggle';

const Home = () => {
  const [semesters, setSemesters] = useState([]);
  const [cgpa, setCgpa] = useState(null);

  const handleAddSemester = () => {
    setSemesters([...semesters, { courses: [] }]);
  };

  const handleCourseNumberChange = (semesterIndex, numCourses) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].courses = Array.from({ length: Number(numCourses) }, () => ({
      title: '',
      grade: ''
    }));
    setSemesters(updatedSemesters);
  };

  const handleCourseChange = (semesterIndex, courseIndex, field, value) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].courses[courseIndex][field] = value;
    setSemesters(updatedSemesters);
  };

  const calculateCgpa = () => {
    const totalSemesters = semesters.length;
    let totalCgpa = 0;

    semesters.forEach(semester => {
      const totalGrades = semester.courses.reduce((sum, course) => sum + Number(course.grade || 0), 0);
      totalCgpa += totalGrades / semester.courses.length;
    });

    setCgpa(totalCgpa / totalSemesters);
  };

  return (
    <div className="container mx-auto p-8 dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-5xl mb-8">GG mah CG</h1>
      <p className="mb-5">
        It's a simple CGPA Calculator App built using Next.js, TailwindCSS, and Shadcn UI.
      </p>
      <DarkModeToggle />
      {semesters.map((semester, index) => (
        <Semester
          key={index}
          index={index}
          courses={semester.courses}
          handleCourseChange={handleCourseChange}
          handleCourseNumberChange={handleCourseNumberChange}
        />
      ))}
      <button onClick={handleAddSemester} className="bg-blue-500 text-white py-2 px-4 rounded mb-4 mr-2 ml-2">
        Add Semester
      </button>
      <button onClick={calculateCgpa} className="bg-green-500 text-white py-2 px-4 rounded mb-4">
        Calculate CGPA
      </button>
      {cgpa !== null && <div className="mt-4 text-xl">Your CGPA: {cgpa.toFixed(2)}</div>}
    </div>
  );
};

export default Home;
