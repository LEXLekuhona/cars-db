import { useState } from 'react'
import { useMutation } from 'react-query'
import { AuthService } from '../../services/auth.service'
import { useAuth } from '../../provider/AuthProvider'
import { Navigate } from 'react-router-dom'

function Auth() {
    document.body.className = ''
    document.title = 'CarsDB | Вход'
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const { setUser } = useAuth()

    const { mutateAsync } = useMutation('login', () =>
        AuthService.login(data.username, data.password), {
        onError: (err) => {
            console.error(err)
        },
        onSuccess: ({ data }) => {
            setUser(data.user)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        mutateAsync()
        setData({
            username: '',
            password: ''
        })
    }
    const gotoSignUpPage = () => Navigate('/')

    return (
        <div className='hold-transition login-page'>
            <div className="login-box">
                <div className="login-logo">
                    <b>Cars</b>DB
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Авторизуйтесь для доступа к БД</p>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    name="username"
                                    type="text"
                                    required
                                    className="form-control"
                                    placeholder="Логин"
                                    value={data.username}
                                    onChange={e => setData({ ...data, username: e.target.value })}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Пароль"
                                    value={data.password}
                                    onChange={e => setData({ ...data, password: e.target.value })}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* /.col */}
                                <div className="col-4">
                                    <button type="submit"
                                        className="btn btn-primary btn-block"
                                        onClick={gotoSignUpPage}
                                    >
                                        Войти
                                    </button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                    </div>
                    {/* /.login-card-body */}
                </div>
            </div>
        </div>

    )
}
export default Auth