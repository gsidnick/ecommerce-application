import { useStore } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

export const useAppStore = (): Store<RootState> => useStore<RootState>();
