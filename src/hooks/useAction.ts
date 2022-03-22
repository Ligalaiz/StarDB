import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { stardbRequest, dataRequest } from '@src/module';
import { randomPlanetActions, dataActions } from '@src/store/reducer';

const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { stardbRequest, dataRequest, ...randomPlanetActions, ...dataActions },
    dispatch,
  );
};
export { useAction };
