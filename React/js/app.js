class Subject extends React.Component{

	render(){

		return(

			<li><span className="date_tag">{this.props.date}</span><span className="lesson_title">{this.props.subjectname}</span></li>
		)

	}
	// render
}
// component

class Subject_category extends React.Component{

	render(){

		return(

			<div className="lesson_part">{this.props.title}</div>

		)
		// return
	}
	// render
}
// component

class Class_summary extends React.Component{

	render(){

		return(

				<div className="lesson_summary">
					<div className="summary_title">{this.props.title}</div>
					<div className="summary_desc">{this.props.desc}</div>
				</div>

		)
		// return
	}
	// render
}
// component

class Content extends React.Component{

	render(){

		return (

			<section>
				<div className="container">
					<Class_summary title={global_class_summary.summary[0].title} desc={global_class_summary.summary[0].desc}/>
					<div className="lesson_list">
						<Subject_category title={global_part1_subject.subject_category}/>
						<div className="lesson_table">
							<ul>
								{global_part1_subject.subject_title.map(function(aa,bb){
									return <Subject date={aa.date} subjectname={aa.subjectname}/>
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>
	      )
	}
}

class ClassName extends React.Component{

	render(){

		return(
			<li className=""><a href={this.props.url}>{this.props.classname}</a></li>
			// 현재는 active주고 싶으면 어떻게..?
		)
		// return
	}
	// render
}
// component

class Side extends React.Component{

 	render(){

 		return (

 			<div id="side">
	 			<ul className="side_menu">
	 				{global_class.class_title.map(function(aa,bb){
	 					return <ClassName url={aa.url} classname={aa.classname}/>
	 				})}
	 			</ul>
 			</div>
 		)
 		// return
 	}
 	// render
}
// component

class Navmenu extends React.Component{

	render(){

		return(
			<li><a href={this.props.url}>{this.props.title}</a></li>
		)
		// reutrn
	}
	// render
}

class Nav extends React.Component{

	render(){

		return (

			<nav>
				<h1 className="logo">H</h1>
				<ul className="nav_menu">

					{global_nav.navmenu.map(function(aa,bb){
							return <Navmenu url={aa.url} title={aa.title}/>
						})}

				</ul>
				<div className="nav_bottom">
					<span className="ico_github">github</span>
				</div>
			</nav>

	      )
	}
}


class Location extends React.Component{

	render(){

		return (

			<div id="location">
				<p>Front End 주말과정</p>
			</div>
	      )
	}
}

class Download extends React.Component{

	render(){

		return(
			<li><a href={this.props.url}>{this.props.contents}</a></li>
		)
		// return
	}
	// render
}

class Header extends React.Component{

	render(){

		return (

			<header>
				<div className="header_l">riahnrhyme@gmail.com</div>
				<div className="header_r">
					<ul className="download_menu">
						{global_download.download.map(function(aa,bb){
							return <Download url={aa.url} contents={aa.content}/>
						})}
					</ul>
				</div>
			</header>

	      )
	}
}


class App extends React.Component{

	render(){

		return (

			<div className="wrap">

				<Header />
				<Nav />
				<Side />
				<Location />
				<Content />

			</div>
	      // 무조건 하나로 감싸주는 녀석이 있어야 한다.(리액트는 컴포넌트 단위이기 때문에)

	      )
	}
  // 렌더링을 무조건 해줘야 한다.
}




ReactDOM.render(<App />, document.getElementById('root'));
// App이라는 클래스를(컴포넌트)호출한다. 

