import React from 'react';
import {connect} from 'react-redux';
import { Form, Input, Button,Icon } from 'antd';
import createHistory from 'history/createHashHistory';
import {increase} from '../../redux/actions/index'
import './index.less'

class Add extends React.Component{
    show(){
        
    }

    render(){
        const {num,increase} = this.props

    	return(
    		<div>
                <h1>{num}</h1>
                <h2>aa</h2>
    			<h1>hello react</h1>
    		    <button  onClick={() => increase(1)}>hello react</button>
    		</div>
    	)
    }
}

const getNumber = state => {
    return {
        num: state.auth.num
    }
}

export default connect(
    getNumber,
    {increase}
)(Add)