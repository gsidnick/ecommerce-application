import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';

export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>();
