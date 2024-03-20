import React, { useEffect, useState } from 'react';
import Batch from '../interfaces/batchlist/batchlist';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Staffs from '../interfaces/staffslist';

const BatchList: React.FC = () => {
  const [batch, setBatches] = useState<Batch[]>([]);
  const [ staffs, setStaffs] = useState<Staffs[]>([]);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await fetch('http://localhost:4000/add-batch');
        const result = await response.json();
        const { data } = result;
        setBatches(data);
        //console.log(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    const fetchStaffs = async () => {
      try {
        const response = await fetch('http://localhost:4000/teachersdetails');
        const result = await response.json();
        const { data } = result;
        setStaffs(data);
      } catch (error) {
        console.error('Error fetching staffs:', error);
      }
    };
    fetchBatches();
    fetchStaffs();
  }, []);
  return (
    <div>
      <Button component={Link} to="/batchwisedetails">Student-wise Batch</Button>
      <div>
        <Link to="/addbatch">
          <button style={{ float: 'right' }}>
            Add New Batch
          </button>
        </Link>
        <br />
        </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Batch Name</th>
            <th>Program Name</th>
            <th>Staff Name</th>
          </tr>
        </thead>
        <tbody>
          {batch.map((newbatch, index) => (
            <tr key={newbatch._id}>
              <td>{index + 1}</td>
              <td>{newbatch.batchName}</td>
              <td>{newbatch.programType}</td>
              <td>{staffs.find(staff => staff.id === newbatch.staffId)?.staffName}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BatchList;
