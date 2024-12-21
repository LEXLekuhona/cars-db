import Table from '../../shared/Table/Table'

function Brands() {


	return (
		<>
			{/* Content Wrapper. Contains page content */}
			< div className="content-wrapper" >
				{/* Content Header (Page header) */}
				< div className="content-header" >
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1 className="m-0">Бренды</h1>
							</div>{/* /.col */}
						</div>{/* /.row */}
					</div>{/* /.container-fluid */}
				</div >
				{/* /.content-header */}

				< Table />
			</div >
			{/* /.content-wrapper */}

			{/* Control Sidebar */}
			<aside className="control-sidebar control-sidebar-dark">
				{/* Control sidebar content goes here */}
			</aside>
			{/* /.control-sidebar */}
		</>
	)
}
export default Brands