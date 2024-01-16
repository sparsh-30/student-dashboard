import { configureStore } from '@reduxjs/toolkit';
import studentDetailsSlice from './studentDetailsSlice';

const store = configureStore({
  reducer: {
    studentDetails: studentDetailsSlice,
  },
});

export default store;
