/*
class Name extends React.Component{

	render(){

		return(

		)
	}
}

리액트의 동일한 구조
*/


class App extends React.Component{

	render(){

		return (

			<div>
				<Second title="Second Title" />
				<h2>next Title</h2>
			</div>
			// 무조건 하나로 감싸주는 녀석이 있어야 한다.(리액트는 컴포넌트 단위이기 때문에)

		)
	}
	// 렌더링을 무조건 해줘야 한다.
}

class Second extends React.Component{

	render(){

		return(

			<h1>{this.props.title}</h1>	// 변수개념. 부모가 준 내용의 타이틀.
			// this.props는 부모가 준 내용
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
// App이라는 클래스를(컴포넌트)호출한다. 

