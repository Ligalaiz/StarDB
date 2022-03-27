import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@src/store';

const useTypedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useTypedUseSelector };
