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
              <th style={{ width: '20%' }}>Действия</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>Toyota</td>
            <td>Land Cruiser</td>
            <td>200 рестайлинг 2</td>
            <td>2015 - 2021</td>
            <td>

              <div className="d-flex justify-content-center" style={{ gap: '4px' }}>
                <button type="button" className="btn btn-outline-success">
                  <i className="nav-icon fas fa-highlighter" />
                </button>
                <button type="button" className="btn btn-outline-success">
                  <i className="nav-icon fas fa-clone" />
                </button>
                <button type="button" className="btn btn-outline-danger">
                  <i className="nav-icon fas fa-trash" />
                </button>
              </div>
              
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default Table