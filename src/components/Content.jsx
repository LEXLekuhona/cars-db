function Content() {
	return (
		<>
			{/* Content Wrapper. Contains page content */}

			<div className="content-wrapper">
				{/* Content Header (Page header) */}
				<div className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1 className="m-0">Главная страница</h1>
							</div>{/* /.col */}
						</div>{/* /.row */}
					</div>{/* /.container-fluid */}
				</div>
				{/* /.content-header */}

				{/* Main content */}
				<section className="content">
					<div className="container-fluid">
						<table id="table_id" className="display">
							<thead>
								<tr>
									<th>Бренд</th>
									<th>Модель</th>
									<th>Поколение</th>
									<th>Годы выпуска</th>
									<th style={{ width: '20%' }}>Операции</th>
								</tr>
							</thead>
							<tbody><tr>
								<td>Toyota</td>
								<td>Land Cruiser</td>
								<td>200 рестайлинг 2</td>
								<td>2015 - 2021</td>
								<td>
									<a href="/configuration/7/edit/">
										<button type="button" className="btn btn-outline-success">
											<i className="nav-icon fas fa-highlighter" />
										</button>
									</a>
									<div className="dropleft btn-group">
										<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											...
										</button>
										<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
											<a className="dropdown-item btn-group" href="/generation/7/delete/">
												<button type="button" className="btn btn-outline-danger">
													<i className="nav-icon fas fa-trash" />
												</button>
											</a>
											<a className="dropdown-item btn-group" href="/generation/7/copy/">
												<button type="button" className="btn btn-outline-secondary">
													Copy
												</button>
											</a>
										</div>
									</div>
								</td>
							</tr>
								<tr>
									<td>Toyota</td>
									<td>Land Cruiser</td>
									<td>200</td>
									<td>2007 - 2011</td>
									<td>
										<a href="/configuration/3/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/3/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/3/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Toyota</td>
									<td>RAV 4</td>
									<td>XA10</td>
									<td>1994 - 2000</td>
									<td>
										<a href="/configuration/5/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/5/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/5/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Toyota</td>
									<td>Land Cruiser</td>
									<td>200 рестайлинг 1</td>
									<td>2012 - 2015</td>
									<td>
										<a href="/configuration/6/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/6/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/6/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Chevrolet</td>
									<td>Corvette</td>
									<td>C4</td>
									<td>1984 - 1998</td>
									<td>
										<a href="/configuration/58/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/58/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/58/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Chevrolet</td>
									<td>Corvette</td>
									<td>C1</td>
									<td>1953 - 1962</td>
									<td>
										<a href="/configuration/55/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/55/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/55/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Chevrolet</td>
									<td>Corvette</td>
									<td>C3</td>
									<td>1968 - 1982</td>
									<td>
										<a href="/configuration/57/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/57/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/57/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Chevrolet</td>
									<td>Camaro</td>
									<td>V</td>
									<td />
									<td>
										<a href="/configuration/63/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/63/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/63/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Chevrolet</td>
									<td>Corvette</td>
									<td>C8</td>
									<td>2020 - 2023</td>
									<td>
										<a href="/configuration/62/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/62/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/62/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Chevrolet</td>
									<td>Camaro</td>
									<td>V рестайлинг</td>
									<td>2013 - 2015</td>
									<td>
										<a href="/configuration/64/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/64/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/64/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Kia</td>
									<td>Sportage</td>
									<td>III</td>
									<td>2010 - 2014</td>
									<td>
										<a href="/configuration/66/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/66/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/66/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Toyota</td>
									<td>Prado</td>
									<td>120</td>
									<td>2002 - 2009</td>
									<td>
										<a href="/configuration/67/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/67/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/67/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Toyota</td>
									<td>Prado</td>
									<td>150 рестайлинг</td>
									<td>2014 - 2017</td>
									<td>
										<a href="/configuration/76/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/76/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/76/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Chevrolet</td>
									<td>Corvette</td>
									<td>C7</td>
									<td>2013 - 2019</td>
									<td>
										<a href="/configuration/78/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/78/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/78/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Toyota</td>
									<td>Prado</td>
									<td>150</td>
									<td>2009 - 2013</td>
									<td>
										<a href="/configuration/75/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/75/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/75/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Kia</td>
									<td>Ceed</td>
									<td>I</td>
									<td>2006 - 2010</td>
									<td>
										<a href="/configuration/70/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/70/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/70/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Toyota</td>
									<td>Prado</td>
									<td>150 рестайлинг 2</td>
									<td>2017 - 2023</td>
									<td>
										<a href="/configuration/77/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/77/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/77/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Infiniti</td>
									<td>FX</td>
									<td>S51</td>
									<td>2008 - 2011</td>
									<td>
										<a href="/configuration/166/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/166/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/166/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Infiniti</td>
									<td>FX</td>
									<td>S50</td>
									<td>2002 - 2005</td>
									<td>
										<a href="/configuration/164/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/164/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/164/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Infiniti</td>
									<td>FX</td>
									<td>S50 рестайлинг</td>
									<td>2006 - 2008</td>
									<td>
										<a href="/configuration/165/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/165/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/165/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Toyota</td>
									<td>Yaris</td>
									<td>XP10</td>
									<td>1999 - 2003</td>
									<td>
										<a href="/configuration/169/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/169/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/169/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Toyota</td>
									<td>Corolla</td>
									<td>E120</td>
									<td>2000 - 2004</td>
									<td>
										<a href="/configuration/162/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/162/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/162/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Infiniti</td>
									<td>FX</td>
									<td>S51 рестайлинг</td>
									<td>2011 - 2013</td>
									<td>
										<a href="/configuration/167/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/167/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/167/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Toyota</td>
									<td>Yaris</td>
									<td>XP10 рестайлинг</td>
									<td>2003 - 2005</td>
									<td>
										<a href="/configuration/170/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/170/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/170/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Chevrolet</td>
									<td>Corvette</td>
									<td>C5</td>
									<td>1997 - 2004</td>
									<td>
										<a href="/configuration/59/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/59/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/59/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Chrysler</td>
									<td>Crossfire</td>
									<td>I</td>
									<td>2003 - 2007</td>
									<td>
										<a href="/configuration/203/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/203/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/203/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Mitsubishi</td>
									<td>Lancer</td>
									<td>X</td>
									<td>2007 - 2010</td>
									<td>
										<a href="/configuration/148/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/148/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/148/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Lada</td>
									<td>2106</td>
									<td>I</td>
									<td>1976 - 2006</td>
									<td>
										<a href="/configuration/218/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/218/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/218/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Nissan</td>
									<td>Qashqai</td>
									<td>J10</td>
									<td>1976 - 1988</td>
									<td>
										<a href="/configuration/221/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/221/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/221/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>TestBrand</td>
									<td>TestModel</td>
									<td>TestGeneration</td>
									<td>С 1980</td>
									<td>
										<a href="/configuration/226/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/226/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/226/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Toyota</td>
									<td>Yaris</td>
									<td>XP90</td>
									<td>2005 - 2009</td>
									<td>
										<a href="/configuration/65/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/65/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/65/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Мой классный бренд</td>
									<td>Моя классная модель</td>
									<td>Моё классное поколение</td>
									<td />
									<td>
										<a href="/configuration/236/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/236/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/236/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Infiniti</td>
									<td>FX</td>
									<td>S50 (Копия)</td>
									<td>2002 - 2005</td>
									<td>
										<a href="/configuration/239/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/239/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/239/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Chevrolet</td>
									<td>Corvette</td>
									<td>C2</td>
									<td>1963 - 1967</td>
									<td>
										<a href="/configuration/56/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/56/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/56/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Chevrolet</td>
									<td>Corvette</td>
									<td>C8 (Копия)</td>
									<td>2020 - 2023</td>
									<td>
										<a href="/configuration/241/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/241/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/241/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>BMW</td>
									<td>X5</td>
									<td>E53</td>
									<td />
									<td>
										<a href="/configuration/22/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/22/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/22/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>BMW</td>
									<td>X5</td>
									<td>E70</td>
									<td>2006 - 2011</td>
									<td>
										<a href="/configuration/20/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/20/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/20/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>BMW</td>
									<td>X5</td>
									<td>E53 Star</td>
									<td>2007 - 2012</td>
									<td>
										<a href="/configuration/246/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/246/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/246/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>BMW</td>
									<td>X6</td>
									<td>E71</td>
									<td>2007 - 2012</td>
									<td>
										<a href="/configuration/21/edit/">
											<button type="button" className="btn btn-outline-success">
												<i className="nav-icon fas fa-highlighter" />
											</button>
										</a>
										<div className="dropleft btn-group">
											<button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												...
											</button>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<a className="dropdown-item btn-group" href="/generation/21/delete/">
													<button type="button" className="btn btn-outline-danger">
														<i className="nav-icon fas fa-trash" />
													</button>
												</a>
												<a className="dropdown-item btn-group" href="/generation/21/copy/">
													<button type="button" className="btn btn-outline-secondary">
														Copy
													</button>
												</a>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>

					</div>{/*/. container-fluid */}
				</section>
				{/* /.content */}
			</div>
			{/* /.content-wrapper */}

			{/* Control Sidebar */}
			<aside className="control-sidebar control-sidebar-dark">
				{/* Control sidebar content goes here */}
			</aside>
			{/* /.control-sidebar */}


		</>
	)
}
export default Content