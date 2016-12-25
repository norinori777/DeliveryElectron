import React from 'react'
import {render} from 'react-dom'
import Main from '../jsx/main.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import main from './redux/reducers/main.js'

// stateの初期化
const initialState = {

}
const store = createStore(main, initialState)


render(
	<Provider store={store}>
		<Main />
	</Provider>,
	document.getElementById('main')
)
