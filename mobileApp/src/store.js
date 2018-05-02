import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { payloadHandler } from './middleware'
import appReducer from './reducer'

export const store = createStore(appReducer, applyMiddleware(
  payloadHandler,
  logger,
))