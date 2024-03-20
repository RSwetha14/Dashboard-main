"use client"; 

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
interface Option {
  label: React.ReactNode;
  value: string;
  className?: string;
  data?: {
    [dataAttribute: string]: string | number
  };
}
interface Group {
  type: "group";
  name: string;
  items: Option[];
}
interface ReactDropdownProps {
  options: (Group | Option | string)[];
  baseClassName?: string;
  className?: string;
  controlClassName?: string;
  placeholderClassName?: string;
  menuClassName?: string;
  arrowClassName?: string;
  disabled?: boolean;
  arrowClosed?: React.ReactNode,
  arrowOpen?: React.ReactNode,
  onChange?: (arg: Option) => void;
  onFocus?: (arg: boolean) => void;
  value?: Option | string;
  placeholder?: String;
}

function MyComponent(props:ReactDropdownProps) {

  const [batches, setBatches] = useState([
    { id: 1,  status: 'Present' },
    { id: 2,  status: 'Absent' },
    { id: 3,  status: 'Present'},
    { id: 4,  status: 'Present'},
    { id: 5,  status: 'Present' },
    { id: 6,  status: 'Present' },
    { id: 7,  status: 'Present' },
]);

// const handleCheckboxChange = (batchId: any) => {
//     setBatches(batches.map(batch => 
//         batch.id === batchId ? { ...batch, selected: !batch.selected } : batch
//     ));
// };

  const [value, onChange] = useState<Value>(new Date());

  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');

  const options1 = ['Option 1', 'Option 2', 'Option 3'];
  const options2 = ['Option A', 'Option B', 'Option C'];
  const options3 = ['Apple', 'Banana', 'Orange'];
  const options4 = ['Apple', 'Banana', 'Orange'];

  const handleChange1 = (option: { value: React.SetStateAction<string>; }) => {
    setSelectedOption1(option.value);
  };

  const handleChange2 = (option: { value: React.SetStateAction<string>; }) => {
    setSelectedOption2(option.value);
  };

  const handleChange3 = (option: { value: React.SetStateAction<string>; }) => {
    setSelectedOption3(option.value);
  };

  const handleChange4 = (option: { value: React.SetStateAction<string>; }) => {
    setSelectedOption4(option.value);
  };

//   const infoForOption1 = {
//     'Option 1': 'Information for Option 1',
//     'Option 2': 'Information for Option 2',
//     'Option 3': 'Information for Option 3',
//   };

//   const infoForOption2 = {
//     'Option A': 'Information for Option A',
//     'Option B': 'Information for Option B',
//     'Option C': 'Information for Option C',
//   };

//   const infoForOption3 = {
//     'Apple': 'Information for Apple',
//     'Banana': 'Information for Banana',
//     'Orange': 'Information for Orange',
//   };

//   const infoForOption4 = {
//     'Apple': 'Information for Apple',
//     'Banana': 'Information for Banana',
//     'Orange': 'Information for Orange',
//   };

  
  return (
    <>
   
    
    <div className="dropdown-container-students">


        <div className="dropdown-wrapper-students">
          <h1></h1>
          <Dropdown
            options={options1}
            value={selectedOption1}
            onChange={handleChange1} />
          {/* {selectedOption1 && <p>{infoForOption1[selectedOption1]}</p>} */}
        </div>

        <div className="dropdown-wrapper-students">
          <h1></h1>
          <Dropdown
            options={options2}
            value={selectedOption2}
            onChange={handleChange2} />
          {/* {selectedOption2 && <p>{infoForOption2[selectedOption2]}</p>} */}
        </div>

        <div className="dropdown-wrapper-students">
          <h1></h1>
          <Dropdown
            options={options2}
            value={selectedOption2}
            onChange={handleChange2} />
          {/* {selectedOption2 && <p>{infoForOption2[selectedOption2]}</p>} */}
        </div>

        <div className="dropdown-wrapper-students">
          <h1></h1>
          <Dropdown
            options={options3}
            value={selectedOption3}
            onChange={handleChange3} />
          {/* {selectedOption3 && <p>{infoForOption3[selectedOption3]}</p>} */}
        </div>

        <div className="dropdown-wrapper-students">
          <h1></h1>
          <Dropdown
            options={options4}
            value={selectedOption4}
            onChange={handleChange4} />
          {/* {selectedOption4 && <p>{infoForOption4[selectedOption4]}</p>} */}
        </div>

      </div>

      <h1 style={{textAlign:"center"}}>Attendance</h1>
      
      
      <table className='tablestudents'>
        <thead>
          <tr>
            {/* <th><input type="checkbox" checked={batches.every(batch => batch.selected)} onChange={() => handleCheckboxChange('all')} /></th> */}
            <th>Name</th>
            <th>May 1,2023</th>
            <th>May 2,2023</th>
            <th>May 3,2023</th>
            <th>May 4,2023</th>
            <th>May 4,2023</th>
            <th>May 4,2023</th>
            <th>May 4,2023</th>
          </tr>
        </thead>
        <tbody>
          {batches.map((batch) => (
            <tr key={batch.id}>
              {/* <td>
                <input
                  type="checkbox"
                  checked={batch.selected}
                  onChange={() => handleCheckboxChange(batch.id)} />
              </td> */}
              <td>{batch.status}</td>
              <td>{batch.status}</td>
              <td>{batch.status}</td>
              <td>{batch.status}</td>
              <td>{batch.status}</td>
              <td>{batch.status}</td>
              <td>{batch.status}</td>
              <td>{batch.status}</td>
            </tr>
          ))}
        </tbody>
      </table></>
      
    //  </div>
     
  );
}

export default MyComponent;