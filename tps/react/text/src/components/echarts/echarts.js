import React from 'react'
import Child from './child'

export default class Test extends React.Component{

	state={
		hello:'react'
	}

	show = () => {
		
	}

	alts = (e) =>{
		const words=e.target.value
		this.setState({hello:words})
	}

	render(){
		const text=this.state.hello
		return(
			<div>
				<h2>{text}</h2>
				<Child words='hello parent' alts={this.alts}></Child>
			</div>
		)
	}
}