import { createSlice } from '@reduxjs/toolkit'

const initialState = null

let timeoutID

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification(state) {
      return initialState
    }
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions

export const showNotification = (content, duration) => {
  return async (dispatch) => {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      dispatch(clearNotification())
    }, duration);
    dispatch(setNotification(content))
  }
}

export default notificationSlice.reducer