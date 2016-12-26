import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {connect} from 'react-redux'
import SimpleHeader from './SimpleHeader.js'
import {getTimeLimit} from '../js/redux/actions'

class Main extends Component {
    componentDidMount(){
        getTimeLimit(this.props.dispatch)
    }
    render(){
        return (
            <div>
                <SimpleHeader path={'/icon/menu-1.png'}
                    title={this.props.title}
                    dispatch={this.props.dispatch} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect (mapStateToProps)(Main)
