import React from 'react'

export default class Child extends React.Component{
	render(){
		return(
			<div>
				<input type="text" value={this.props.words} onChange={this.props.alts}/>
			</div>
		)
	}
}