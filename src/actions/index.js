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
  return async (dispatch) => {
    const response = await streams.post("/streams", formValues)

    dispatch({ type: CREATE_STREAM, payload: response.data })
  }
}

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get("/streams")

    dispatch({ type: FETCH_STREAMS, payload: response.data })
  }
}
