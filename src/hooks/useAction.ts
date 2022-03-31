import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { stardbRequest, dataRequest } from '@src/module';
import {
  randomPlanetActions,
  dataActions,
  authActions,
} from '@src/store/reducer';
import { useMemo } from 'react';

const useAction = () => {
  const dispatch = useDispatch();
  return useMemo(
    () =>
      bindActionCreators(
        {
          stardbRequest,
          dataRequest,
          ...randomPlanetActions,
          ...dataActions,
          ...authActions,
        },
        dispatch,
      ),
    [dispatch],
  );
};

export { useAction };
