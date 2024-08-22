import { createSlice } from "@reduxjs/toolkit"
import { Dark_Mode } from "../../config/constant"

const userSlice = createSlice({
  name: 'user',

  initialState: {
    id: null,
    name: 'GNAIL',
    email: null,
    address: null,
    themeFlag: Dark_Mode
  },

  reducers: {
    setUser(state, action) {
      const { id, name, email, address } = action.payload
      state.id = id
      state.name = name
      state.email = email
      state.address = address
    },

    resetUser(state) {
      state.id = null
      state.name = null
      state.email = null
      state.address = null
    },

    setThemeFlag(state, action) {
      state.themeFlag = action.payload
    }
  },

  extraReducers: (builder) => {
  }
})  
export const { setUser, resetUser, setThemeFlag  } = userSlice.actions

export default userSlice.reducer