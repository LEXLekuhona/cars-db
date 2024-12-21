import axios from 'axios'

axios.defaults.baseURL = 'http://185.239.50.252:8080/'
axios.defaults.headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/x-www-form-urlencoded',
}
export const AuthService = {
	async login(username, password) {

		const data = new URLSearchParams({
			username,
			password
		})
		
		
		return axios.post('auth/token', data)
	}
}
