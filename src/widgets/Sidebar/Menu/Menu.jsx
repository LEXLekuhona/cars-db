import { Link, NavLink} from "react-router-dom"
import data from "../../../utils/data"

function Menu() {
	
	return (
		<>
			<nav className="mt-2">
				<ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
					{data.map((item, index) =>
						<li className="nav-item" key={index}>
							<NavLink to={item.path} className="nav-link menu_button">
								<i className={`nav-icon fas ${item.icon}`} />
								<p>{item.title}</p>
							</NavLink>
						</li>
					)}

					{/*Справочник */}
					<li className="nav-header">Справочники</li>
					<li className="nav-item">
						<NavLink to={'/tire_diameter'} className="nav-link">
							<i className="nav-icon far fa-image" />
							<p>
								Диаметр шин
							</p>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to={'/tire_dependencies'} className="nav-link">
							<i className="nav-icon far fa-image" />
							<p>Связь шин</p>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to={'#'} className="nav-link">
							<i className="nav-icon fas fa-edit" />
							<p>
								Шины (метрическая)
								<i className="fas fa-angle-left right" />
							</p>
						</NavLink>
						<ul className="nav nav-treeview" style={{ display: 'none' }}>
							<li className="nav-item">
								<NavLink to={'/tire_metric_profile'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Профиль</p>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to={'/tire_metric_width'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Ширина</p>
								</NavLink>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<Link to={'#'} className="nav-link">
							<i className="nav-icon fas fa-edit" />
							<p>
								Шины (дюймовая)
								<i className="fas fa-angle-left right" />
							</p>
						</Link>
						<ul className="nav nav-treeview" style={{ display: 'none' }}>
							<li className="nav-item">
								<Link to={'/tire_inch_height'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Высота</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/tire_inch_width'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Ширина</p>
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<Link to={'#'} className="nav-link">
							<i className="nav-icon fas fa-edit" />
							<p>
								Диски
								<i className="fas fa-angle-left right" />
							</p>
						</Link>
						<ul className="nav nav-treeview" style={{ display: 'none' }}>
							<li className="nav-item">
								<Link to={'/wheel_width'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Ширина</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/wheel_diameter'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Диаметр</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/wheel_drilling'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Сверловка</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/wheel_departure'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Вылет</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/wheel_ch_diameter'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Диаметр ЦО</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/wheel_dependencies'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Связь</p>
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<Link to={'#'} className="nav-link">
							<i className="nav-icon fas fa-edit" />
							<p>
								Масла
								<i className="fas fa-angle-left right" />
							</p>
						</Link>
						<ul className="nav nav-treeview" style={{ display: 'none' }}>
							<li className="nav-item">
								<Link to={'/oil_type'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Типы</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/oil_viscosity'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Вязкость</p>
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<Link to={'/wipers_length'} className="nav-link">
							<i className="nav-icon far fa-image" />
							<p>
								Дворники
							</p>
						</Link>
					</li>
					<li className="nav-item">
						<Link to={'#'} className="nav-link">
							<i className="nav-icon fas fa-edit" />
							<p>
								Аккумуляторы
								<i className="fas fa-angle-left right" />
							</p>
						</Link>
						<ul className="nav nav-treeview" style={{ display: 'none' }}>
							<li className="nav-item">
								<Link to={'/battery_capacity'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Емкость</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/battery_starting_current'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Пусковой ток</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/battery_dimensions'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Габариты</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/battery_polarity'} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Полярность</p>
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<Link to={'/year'} className="nav-link">
							<i className="nav-icon far fa-image" />
							<p>
								Годы
							</p>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
export default Menu