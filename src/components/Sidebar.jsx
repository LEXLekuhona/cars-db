function Sidebar() {
	return (
		<>
			{/* Main Sidebar Container */}
			<aside className="main-sidebar sidebar-dark-primary elevation-4">
				{/* Brand Logo */}
				<a href="/" className="brand-link">
					<img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
					<span className="brand-text font-weight-light">Cars DB</span>
				</a>
				{/* Sidebar */}
				<div className="sidebar">
					{/* Sidebar user panel (optional) */}
					<div className="user-panel mt-3 pb-3 mb-3 d-flex">
						<div className="image">
							<img src="/dist/img/user.jpg" className="img-circle elevation-2" alt="User Image" />
						</div>
						<div className="info">
							<a href="/" className="d-block">Andrew</a>
						</div>
					</div>
					{/* Sidebar Menu */}
					<nav className="mt-2">
						<ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
							<li className="nav-item">
								<a href="/" className="nav-link menu_button">
									<i className="nav-icon fas fa-car" />
									<p>Все автомобили</p>
								</a>
							</li>
							<li className="nav-item">
								<a href="/brand/" className="nav-link menu_button">
									<i className="nav-icon fas fa-cog" />
									<p>Бренды</p>
								</a>
							</li>
							<li className="nav-item">
								<a href="/model/" className="nav-link menu_button">
									<i className="nav-icon fas fa-wrench" />
									<p>Модели</p>
								</a>
							</li>
							<li className="nav-item">
								<a href="/generation/" className="nav-link menu_button">
									<i className="nav-icon fas fa-star" />
									<p>Поколения</p>
								</a>
							</li>
							<li className="nav-header">Справочники</li>
							<li className="nav-item">
								<a href="/tire_diameter/" className="nav-link">
									<i className="nav-icon far fa-image" />
									<p>
										Диаметр шин
									</p>
								</a>
							</li>
							<li className="nav-item">
								<a href="/tire_dependencies/" className="nav-link">
									<i className="nav-icon far fa-image" />
									<p>Связь шин</p>
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									<i className="nav-icon fas fa-edit" />
									<p>
										Шины (метрическая)
										<i className="fas fa-angle-left right" />
									</p>
								</a>
								<ul className="nav nav-treeview" style={{ display: 'none' }}>
									<li className="nav-item">
										<a href="/tire_metric_profile/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Профиль</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/tire_metric_width/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Ширина</p>
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									<i className="nav-icon fas fa-edit" />
									<p>
										Шины (дюймовая)
										<i className="fas fa-angle-left right" />
									</p>
								</a>
								<ul className="nav nav-treeview" style={{ display: 'none' }}>
									<li className="nav-item">
										<a href="/tire_inch_height/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Высота</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/tire_inch_width/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Ширина</p>
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									<i className="nav-icon fas fa-edit" />
									<p>
										Диски
										<i className="fas fa-angle-left right" />
									</p>
								</a>
								<ul className="nav nav-treeview" style={{ display: 'none' }}>
									<li className="nav-item">
										<a href="/wheel_width/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Ширина</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/wheel_diameter/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Диаметр</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/wheel_drilling/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Сверловка</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/wheel_departure/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Вылет</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/wheel_ch_diameter/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Диаметр ЦО</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/wheel_dependencies/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Связь</p>
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									<i className="nav-icon fas fa-edit" />
									<p>
										Масла
										<i className="fas fa-angle-left right" />
									</p>
								</a>
								<ul className="nav nav-treeview" style={{ display: 'none' }}>
									<li className="nav-item">
										<a href="/oil_type/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Типы</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/oil_viscosity/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Вязкость</p>
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a href="/wipers_length/" className="nav-link">
									<i className="nav-icon far fa-image" />
									<p>
										Дворники
									</p>
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									<i className="nav-icon fas fa-edit" />
									<p>
										Аккумуляторы
										<i className="fas fa-angle-left right" />
									</p>
								</a>
								<ul className="nav nav-treeview" style={{ display: 'none' }}>
									<li className="nav-item">
										<a href="/battery_capacity/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Емкость</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/battery_starting_current/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Пусковой ток</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/battery_dimensions/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Габариты</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/battery_polarity/" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Полярность</p>
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a href="/year/" className="nav-link">
									<i className="nav-icon far fa-image" />
									<p>
										Годы
									</p>
								</a>
							</li>
						</ul>
					</nav>
					{/* /.sidebar-menu */}
				</div>
				{/* /.sidebar */}
			</aside>

		</>
	)
}
export default Sidebar