import { createSlice } from "@reduxjs/toolkit";
const stateSlice = createSlice({
    name: 'states',
    initialState: {
        output: "titles",
    },
    reducers: {
      setoutput(state,action){
        state.output=action.payload
      }
    },
  })


  export default stateSlice.reducer
  export const {setoutput}=stateSlice.actions