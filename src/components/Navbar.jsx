function Navbar() {
	return (
		<>
			{/* Navbar */}
			<nav className="main-header navbar navbar-expand navbar-dark">
				{/* Left navbar links */}
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" data-widget="pushmenu" href="/" role="button"><i className="fas fa-bars" /></a>
					</li>
					<li className="nav-item d-none d-sm-inline-block">
						<a href="/" className="nav-link">Главная страница</a>
					</li>
				</ul>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a href="/accounts/logout/?next=/accounts/login/">
							<button style={{ marginRight: 20 }} type="button" className="btn btn-outline-danger">Выйти</button>
						</a>
					</li>
				</ul>
			</nav>
			{/* /.navbar */}
		</>
	)
}
export default Navbar