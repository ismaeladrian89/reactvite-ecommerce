import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async(info) => {
        console.log(info)
        try{
        const {data} = await api.post('/admin/login', info, 
            {withCredentials: true})
            console.log(data)
        } catch (error) {
                console.log(error.message.data)
        }
    }
)


export const authReducers = createSlice({

    name: 'auth',
    initialState:{
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: ''

    },
    redurcers : {

    },
    extraReducers : () => {

    }
})
export default authReducers.reducer
