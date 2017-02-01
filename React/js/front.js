class Download extends React.Component{

	render(){

		return (

			<li><a href={this.props.url}>{this.props.contents}</a></li>
			// 여기서 this.props는 부모를 가르킨다
			// 부모란 호출하는 대상

	      )

	}

}

// <Download url={global_download[0].url} contents={global_download[0].content}/>
// <Download url={global_download[1].url} contents={global_download[1].content}/>
// <Download url={global_download[2].url} contents={global_download[2].content}/>
// <Download url={global_download[3].url} contents={global_download[3].content}/>

class Header extends React.Component{

	render(){

		return (

			<header>
				<div className="header_left">
					<div className="email">riahnrhyme@gmail.com</div>
				</div>
				<div className="header_right">
					<div className="download_title">기본파일 다운로드</div>
					<ul className="download">

						{global_download.map((aa,bb) =>{return <Download url={aa.url} contents={aa.content}/>})}
						
					</ul>
				</div>
			</header>

	      )
	}
}

// {global_download.map((aa,bb) =>{return <Download url={aa.url} contents={aa.content}/>})}
// es6방식

class App extends React.Component{

	render(){

		return (

			<div className="container">

				<Header />

			</div>
	      // 무조건 하나로 감싸주는 녀석이 있어야 한다.(리액트는 컴포넌트 단위이기 때문에)

	      )
	}
  // 렌더링을 무조건 해줘야 한다.
}


ReactDOM.render(<App />, document.getElementById('root'));
// App이라는 클래스를(컴포넌트)호출한다. 

