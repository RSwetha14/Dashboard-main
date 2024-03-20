import React, { useEffect, useState } from 'react';
import Course from '../interfaces/courselist/courselist';
import { Link } from 'react-router-dom';

const CourseList: React.FC = () => {
  const [batch, setBatches] = useState<Course[]>([]);

  useEffect(() => {
    // Fetch students from the API
    const fetchBatches = async () => {
      try {
        const response = await fetch('http://localhost:4000/addcourse');
        const result = await response.json();
        const { data } = result;
        setBatches(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchBatches();
  }, []);

  return (
    <div>
      <h2>Course List</h2>
      <div>
        <Link to="/addcourse">
          <button style={{ float: 'right' }}>
            Add New course
          </button>
        </Link>
        <br />
        </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Course Name</th>
            <th>Category Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {batch.map((newbatch, index) => (
            <tr key={newbatch.id}>
              <td>{index + 1}</td>
              <td>{newbatch.courseName}</td>
              <td>{newbatch.categoryName}</td>
              <td>{newbatch.location}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
