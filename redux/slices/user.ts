import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ResponseUserAuth} from '../../utils/api/type';
import {RootState} from '../store';
import {HYDRATE} from 'next-redux-wrapper';


export interface UserState {
    data: ResponseUserAuth | null;
}

const initialState: UserState = {
    data: null,
};

export const user = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<ResponseUserAuth>) => {
            state.data = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.data = action.payload.user.data;
        },
    },
});

export const {setUserData} = user.actions;
export const selectUserData = (state: RootState) => state.user.data;

export default user.reducer;
