import { Link, NavLink } from "react-router-dom"
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
						<NavLink to={''} className="nav-link">
							<i className="nav-icon far fa-image" />
							<p>
								Диаметр шин
							</p>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to={''} className="nav-link">
							<i className="nav-icon far fa-image" />
							<p>Связь шин</p>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to={''} className="nav-link">
							<i className="nav-icon fas fa-edit" />
							<p>
								Шины (метрическая)
								<i className="fas fa-angle-left right" />
							</p>
						</NavLink>
						<ul className="nav nav-treeview" style={{ display: 'none' }}>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Профиль</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Ширина</p>
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<Link to={''} className="nav-link">
							<i className="nav-icon fas fa-edit" />
							<p>
								Шины (дюймовая)
								<i className="fas fa-angle-left right" />
							</p>
						</Link>
						<ul className="nav nav-treeview" style={{ display: 'none' }}>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Высота</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Ширина</p>
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<NavLink to={''} className="nav-link">
							<i className="nav-icon fas fa-edit" />
							<p>
								Диски
								<i className="fas fa-angle-left right" />
							</p>
						</NavLink>
						<ul className="nav nav-treeview" style={{ display: 'none' }}>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Ширина</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Диаметр</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Сверловка</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Вылет</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Диаметр ЦО</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Связь</p>
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<NavLink to={''} className="nav-link">
							<i className="nav-icon fas fa-edit" />
							<p>
								Масла
								<i className="fas fa-angle-left right" />
							</p>
						</NavLink>
						<ul className="nav nav-treeview" style={{ display: 'none' }}>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Типы</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Вязкость</p>
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<NavLink to={''} className="nav-link">
							<i className="nav-icon far fa-image" />
							<p>
								Дворники
							</p>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to={''} className="nav-link">
							<i className="nav-icon fas fa-edit" />
							<p>
								Аккумуляторы
								<i className="fas fa-angle-left right" />
							</p>
						</NavLink>
						<ul className="nav nav-treeview" style={{ display: 'none' }}>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Емкость</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Пусковой ток</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Габариты</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={''} className="nav-link">
									<i className="far fa-circle nav-icon" />
									<p>Полярность</p>
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<NavLink to={''} className="nav-link">
							<i className="nav-icon far fa-image" />
							<p>
								Годы
							</p>
						</NavLink>
					</li>
				</ul>
				<div className='d-flex justify-content-center'>
					<Link to={''}>
						<button style={{ padding: "9px 60px", marginTop: "180px" }} type="button" className="btn btn-outline-light">Выйти</button>
					</Link>
				</div>
			</nav>
		</>
	)
}
export default Menu