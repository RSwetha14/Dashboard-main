import React, { useEffect, useState } from 'react';
import '../components/mobilizationform/tablestyle.css';
import Student from '../interfaces/studentlist/studentlist';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import ReactPaginate from 'react-paginate';

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [programType, setProgramType] = useState<string>('');
  //const [selectedProgramType, setSelectedType] = useState<string>('');
  const [activeTab, setActiveTab] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const studentsPerPage = 20;

  useEffect(() => {
    // Fetch students from the API
    const fetchStudents = async () => {
      const status = "Select";
      try {
        const response = await fetch(`http://localhost:4000/mobilizationform?preScreening=${status}&programType=${programType}`);
        const result = await response.json();
        const { data } = result;
        console.log("selectedType",data);
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, [programType]);

  const handleTypeChange = (studentId: string, selectedType: string): void => {
    // Find the student to update
    const updatedStudents = students.map(student => {
      if (student.studentId === studentId) {
        // Disable the dropdown after selection
        student.disabled = true;
        // Update the preScreening status
        student.preScreening = selectedType;
        // Send the student details to the server individually
        //sendStudentDetails(student.studentId, student);
      }
      return student;
    });

    setStudents(updatedStudents);
  };

  const sendStudentDetails = async (studentId:string, student: Student): Promise<void> => {
    try {
      const response = await fetch(`  ${studentId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          preScreening: student.preScreening,
          selectedType: student.selectedType, 
           // Update the addToBatch value to true
          // Add any other data needed for the update
        }),
      });

      if (response.ok) {
        console.log(`Student ${student.studentId} details sent successfully!`);
      } else {
        console.error(`Failed to send details of student ${student.studentId}`);
      }
    } catch (error) {
      console.error('Error sending student details:', error);
    }
  };

  const handleSubmit = async (): Promise<void> => {
    console.log("students",students)
    const selectedStudentsDetails = students.filter(student => student.disabled);

    if (selectedStudentsDetails.length === 0) {
      alert('Please select at least one student');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/studentdetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedStudentsDetails),
      });

      if (response.ok) {
        alert('Selected students updated successfully!');
        selectedStudentsDetails.forEach(student => {
          sendStudentDetails(student.studentId, student);
        });
      } else {
        alert('Failed to update selected students');
      }
    } catch (error) {
      console.error('Error updating selected students:', error);
      alert('Failed to update selected students');
    }
    window.location.reload();
  };

  const offset = currentPage * studentsPerPage;
  const currentPageStudents = students.slice(offset, offset + studentsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const downloadCsvFile = async () => {
    try {
      const response = await fetch('http://localhost:4000/mobilizationform/');
      const result = await response.json();
      const  { data }= result;
      const csvContent = convertToCsv(data);

      const blob = new Blob([csvContent], { type: 'text/csv' });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'mobilizationdata.csv';

      link.click();

      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error downloading Excel file:', error);
    }
  };

  const convertToCsv = (data: Student[]) => {
    const header = Object.keys(data[0]).join(',');
    const rows = data.map(student => Object.values(student).join(','));
    return header + '\n' + rows.join('\n');
  };

  const downloadExcelFile = async () => {
    try {
      const response = await fetch('http://localhost:4000/mobilizationform/');
      const result = await response.json();
      const  { data }= result;
      const csvContent = convertToExcel(data);

      const blob = new Blob([csvContent], { type: 'text/excel' });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'mobilizationdata.excel';

      link.click();

      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error downloading Excel file:', error);
    }
  };

  const convertToExcel = (data: Student[]) => {
    const header = Object.keys(data[0]).join(',');
    const rows = data.map(student => Object.values(student).join(','));
    return header + '\n' + rows.join('\n');
  };


//   const handleProgramTypeChange = (e: SelectChangeEvent<string>) => {
//     const selectedType = e.target.value;
//     setProgramType(selectedType);
//     //fetchBatchWiseStudents(selectedBatch);
// };

  return (
    <div>
      <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
        <TabList>
        <Tab>
            <Button component={Link} to="/students">Mobilization List</Button>
        </Tab>
        <Tab>
            <Button component={Link} to="/prescreening">Pre Screening Students</Button>
        </Tab>
        <Tab>
            <Button component={Link} to="/selectedstudents">Selected Students</Button>
        </Tab>
        <Tab>
            <Button component={Link} to="/studentattendance">Attendance Reports</Button>
        </Tab>
        </TabList>
      </Tabs>
      <div>
        <button onClick={handleSubmit} style={{ float: 'right' }}>
          Update Pre-screening Status
        </button>
      </div>
      <div>
      <Button onClick={downloadCsvFile}>Download Csv</Button>
    </div>
    <div>
      <Button onClick={downloadExcelFile}>Download Excel</Button>
    </div>
      <br />
      <div>
                <label>Select Type: </label>
                <select value={programType} onChange={(e) => setProgramType(e.target.value)}>
                    <option value="">Select Type</option>
                    <option value="Educational" >Educational</option>
                    <option value="Vocational">Vocational</option>
                    <option value="Other Trainings">Other Trainings</option>
                </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Qualification</th>
            <th>Pre-Screening Action</th>
          </tr>
        </thead>
        <tbody>
          {currentPageStudents.map((student, index) => (
            <tr key={student.studentId}>
              <td>{index + 1}</td>
              <td>{student.studentName}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.qualification}</td>
              <td>
                <select
                  value={student.preScreening || ''}
                  onChange={(e) => handleTypeChange(student.studentId, e.target.value)}
                  // disabled={student.disabled || student.preScreening === 'Selected' || student.preScreening === 'Rejected'}
                >
                  <option value="">Select Status</option>
                  <option value="Selected">Selected</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(students.length / studentsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default StudentList;
