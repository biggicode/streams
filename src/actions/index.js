import streams from "../apis/streams"
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from "../actions/types"
import { formValues } from "redux-form"

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
}

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth
    const response = await streams.post("/streams", { ...formValues, userId })

    dispatch({ type: CREATE_STREAM, payload: response.data })
    //Some programatic navigation to get the user back to the root route
  }
}

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get("/streams")

    dispatch({ type: FETCH_STREAMS, payload: response.data })
  }
}

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/stream/${id}`)

    dispatch({ type: FETCH_STREAM, payload: response.data })
  }
}

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete("/streams/${id}")

    dispatch({ type: DELETE_STREAM, payload: id })
  }
}

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.put(`/stream/${id}`, formValues)

    dispatch({ type: EDIT_STREAM, payload: response.data })
  }
}
