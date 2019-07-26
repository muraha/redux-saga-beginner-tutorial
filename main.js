import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// import Counter from './components/Counter'
import App from './App'
import reducer from './reducers/reducers'
import rootSaga  from './middleware/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({ type })

function render() {
  ReactDOM.render(
    // <Counter
    //   value={store.getState()}
    //   onIncrement={() => action('INCREMENT')}
    //   onDecrement={() => action('DECREMENT')}
    //   onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
    <App />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
