// types.ts

interface Batch {
    _id: string;
    batchId: string,
    batchName: string;
    programType: string;
    courseName: string;
    subjectName: string;
    staffId: string;
    batchStartDate: string;
    batchEndDate: string;
    // Add more fields as needed
  }
  
  export default Batch;
  