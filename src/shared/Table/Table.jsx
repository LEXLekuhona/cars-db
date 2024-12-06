function Table() {
	return (
<section className="content">
  <div className="container-fluid">
    
    <table id="table_id" className="display">
      <thead>
        <tr>
          <th>Бренд</th>
          <th>Модель</th>
          <th>Поколение</th>
          <th>Годы выпуска</th>
          <th style={{width: '20%'}}>Операции</th>
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
      </tbody></table></div></section>




	)
}
export default Table