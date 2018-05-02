import { ASYNC_START, ASYNC_END } from '@constants/actionTypes'

export const payloadHandler = store => next => action => {
  if (action.payload != undefined && action.payload.then != undefined) {
    store.dispatch({ type: ASYNC_START })
    action.payload
      .then(
        (payload) => {
          const [response, result] = payload
          const { ok, status } = response
          store.dispatch({
            ...action,
            payload: { ok, status, ...result },
          })
          store.dispatch({ type: ASYNC_END })
          if (ok && action.done != undefined)
            action.done()
          else if (action.miss != undefined)
            action.miss()
        },
        error => {
          store.dispatch({
            ...action,
            error: true,
            payload: error,
          })
          store.dispatch({ type: ASYNC_END })
          if (action.miss != undefined)
            action.miss()
        }
      )
    return
  }
  return next(action)
}
