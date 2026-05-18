import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper";
import { accountsApi } from "../api/accountsApi"

export interface Store {
  user: Record<string, any>
}

const initialState: Store = {
  user: [],
}

export const storeSlice = createSlice({
  name: "djangoSlice",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = []
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action: any) => {
      const serverData = action.payload.djangoSlice;
      // Проверяем просто наличие данных, так как у объекта нет length
      if (serverData && serverData.user && Object.keys(serverData.user).length > 0) {
        state.user = serverData.user;
      }
    });
    builder.addMatcher(
      accountsApi.endpoints.retrieveProfile.matchFulfilled,
      (state, action) => {
        // В action.payload должны быть данные пользователя
        state.user = action.payload; 
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const { logout } = storeSlice.actions

export default storeSlice.reducer
