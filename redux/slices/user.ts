import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ResponseUserAuth} from '../../utils/api/type';
import {RootState} from '../store';


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
    extraReducers: () => {

    },
});

export const {setUserData} = user.actions;
export const selectUserData = (state: RootState) => state.user.data;

export default user.reducer;
