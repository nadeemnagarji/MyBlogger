import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import authReducer from './authSlice'
const store = configureStore({
    reducer:authReducer

})

export default store;