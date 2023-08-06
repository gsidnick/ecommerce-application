import * as ActionCreator from '../store/actionCreators';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

type Actions = typeof ActionCreator;

export const useActions = (): Actions => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreator, dispatch);
};
