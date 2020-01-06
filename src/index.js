import React from 'react'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage';
import { localStorageKey } from './_params'
import appReducer from './redux/reducers'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppC from './components/AppC'

import setupObjectStore from './setup/setupObjectStore'
import startMainLoop from './graphics/startMainLoop'
import { windowResizeHandler, keyUpHandler, keyDownHandler } from './handlers'

// Object store via thunk with extra argument
const objStore = {}
const thunkMiddleware = thunk.withExtraArgument(objStore)

// Local storage
const appReducerWithStorage = storage.reducer(appReducer);
const localStorageEngine = createEngine(localStorageKey);
const localStorageMiddleware = storage.createMiddleware(localStorageEngine);

// Create store with all middleware
// Local storage takes plain actions, so goes after thunk
const middlewares = [thunkMiddleware, localStorageMiddleware]
const reduxStore = createStore(appReducerWithStorage, applyMiddleware(...middlewares))

// Load any pre-existing state from local storage - this is async
const load = storage.createLoader(localStorageEngine);
console.log(`Loading any previously saved state from key ${localStorageKey} in local storage`)
// localStorage.removeItem(localStorageKey)   // TEST LINE ONLY - test what happens if save state is removed
load(reduxStore)
    .then((newState) => console.log('Loaded state:', newState))
    .catch(() => console.log('Failed to load previous state'));


render(
  <Provider store={reduxStore}>
    <AppC />
  </Provider>,
  document.getElementById('root')
)

// Can only initialise object store once page elements are available
window.addEventListener('load', () => {
  setupObjectStore(objStore, reduxStore)
  startMainLoop(objStore, reduxStore.getState)
})

window.addEventListener('resize', e => windowResizeHandler(e, objStore, reduxStore))
window.addEventListener('keyup', e => keyUpHandler(e, objStore, reduxStore))
window.addEventListener('keydown', e => keyDownHandler(e, objStore, reduxStore))
