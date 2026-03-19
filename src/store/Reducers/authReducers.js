import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async(info, {rejectedWithValue, fulfillWithValue}) => {
         console.log(info)
        try {
            const {data} = await api.post('/admin-login',info,{withCredentials: true})
            //console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            //console.log(error.response.data)
            return rejectedWithValue(error.response.data)
        }
    }
)

export const authReducer = createSlice({
    name: 'auth',
    initialState:{
        successMessage :  '',
        errorMessage : '',
        loader: false,
        userInfo : ''
    },
    reducers : {

    },
    extraReducers: (builder) => {
        builder
        .addCase(admin_login.pending, (state, {payload}) => {
            state.loader = true;
        })
        .addCase(admin_login.rejected, (state, {payload}) => {
            state.loader = false;
            state.errorMessage = payload.error
        })
    }
})

export default authReducer.reducer