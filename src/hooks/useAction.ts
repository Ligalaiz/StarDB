import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { stardbRequest, dataRequest } from '@src/module';
import { randomPlanetActions, dataActions } from '@src/store/reducer';
import { useMemo } from 'react';

const useAction = () => {
  const dispatch = useDispatch();
  return useMemo(
    () =>
      bindActionCreators(
        { stardbRequest, dataRequest, ...randomPlanetActions, ...dataActions },
        dispatch,
      ),
    [dispatch],
  );
};
export { useAction };
