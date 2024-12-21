function Auth(){
    document.body.className = 'hold-transition login-page'

    return(
    <div className="login-box">
        <div className="login-logo">
            <b>Cars</b>DB
        </div>
        {/* /.login-logo */}
        <div className="card">
            <div className="card-body login-card-body">
                <p className="login-box-msg">Авторизуйтесь для доступа к БД</p>
                <form method="post" action="/accounts/login/">
                    <input type="hidden" name="csrfmiddlewaretoken" defaultValue="khvAQEQyxrT4g552vY18CprNBnLgkhfsSkmyhCfHYxga3AcutTXiKIJvf4ljTEg2" />
                    <div className="input-group mb-3">
                    <input name="username" type="text" className="form-control" placeholder="Логин" />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-envelope" />
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input name="password" type="password" className="form-control" placeholder="Пароль" />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    {/* /.col */}
                    <div className="col-4">
                        <button type="submit" className="btn btn-primary btn-block">Войти</button>
                        <input type="hidden" name="next" defaultValue />
                    </div>
                    {/* /.col */}
                    </div>
                </form>
            </div>
            {/* /.login-card-body */}
        </div>
    </div>

    )
}
export default Auth