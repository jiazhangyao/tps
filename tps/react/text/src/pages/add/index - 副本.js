import React from 'react';
import { Form, Input, Button,Icon } from 'antd';
import createHistory from 'history/createHashHistory';
import './index.less'

const history = createHistory();

export default class Add extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        let username = this.refs.text.value;
       
        if (username === 'admin') {
            // 表单的路由
            history.push('/login');
        }
    };
    render(){
    	return(
    		<div>
    			<h1>hello react</h1>
    			<input type="text" ref="text" />
    			<button onClick={this.handleSubmit}>btn</button>
    		</div>
    	)
    }
}