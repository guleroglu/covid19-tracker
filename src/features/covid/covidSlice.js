import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
  loading: false,
  error: null,
  country: "UK",
};

export const fetchData = createAsyncThunk("covid/fetchData", async () => {
  try {
    const res = await axios.get(
      `https://api.collectapi.com/corona/countriesData`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: "apikey 3cDHH07eLRNAJB4Mu8RXzT:5ih33hOVm34qyyVJ8fc80X",
        },
      }
    );
    return res.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
});

export const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    selectCountry: (state, action) => {
      state.country = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { checkItems, selectCountry } = covidSlice.actions;
export default covidSlice.reducer;
