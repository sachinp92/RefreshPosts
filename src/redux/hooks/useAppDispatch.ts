import {useDispatch} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

import {RootState} from '../reducers/types';

const useAppDispatch = (): ThunkDispatch<RootState, unknown, AnyAction> =>
  useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

export default useAppDispatch;
