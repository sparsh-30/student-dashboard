import { createSlice } from '@reduxjs/toolkit';

const studentDetailsSclice = createSlice({
  name: 'studentDetails',
  initialState: {
    name: '',
    profileImage: '',
    studentID: '',
    grade: '',
    contactNumber: '',
    emailAddress: '',
    parent: '',
    parentContact: '',
    address: '',
    reports: [],
  },
  reducers: {
    setStudentDetails: (state, action) => {
      state.name = action.payload.name;
      state.profileImage = action.payload.profileImage;
      state.studentID = action.payload.studentID;
      state.grade = action.payload.grade;
      state.contactNumber = action.payload.contactNumber;
      state.emailAddress = action.payload.emailAddress;
      state.parent = action.payload.parent;
      state.parentContact = action.payload.parentContact;
      state.address = action.payload.address;
      state.reports = action.payload.reports;
    },
  },
});

export default studentDetailsSclice.reducer;
export const { setStudentDetails } = studentDetailsSclice.actions;
