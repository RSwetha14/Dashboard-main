import React, { useEffect, useState } from 'react';
import Staffs from '../interfaces/staffslist';
import { Link } from 'react-router-dom';

const StaffsList: React.FC = () => {
  const [batch, setBatches] = useState<Staffs[]>([]);

  useEffect(() => {
    // Fetch students from the API
    const fetchBatches = async () => {
      try {
        const response = await fetch('http://localhost:4000/teachersdetails');
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
      <h2>Staff List</h2>
      <div>
      <Link to="/staffattendance">
          <button style={{ float: 'left' }}>
            Attendance
          </button>
        </Link>
      <Link to="/addstaff">
          <button style={{ float: 'right' }}>
            Add New Staff
          </button>
        </Link>
      <br />
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Staff Name</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {batch.map((newbatch, index) => (
            <tr key={newbatch.staffId}>
              <td>{index + 1}</td>
              <td>{newbatch.staffName}</td>
              <td>{newbatch.phoneNumber}</td>
              <td>{newbatch.address}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffsList;
