import { BASE_URL } from '../utils/data'
export async function fetchData() {
    const url = `${BASE_URL}/brands`
    const token = sessionStorage.getItem('token')
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`,
            }

        })
        if (!response.ok) {
            throw Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error('Fetch failed:', error)
    }
}

export async function fetchPost() {
    const url = `${BASE_URL}/auth/token`
    const data = new URLSearchParams({
        username: 'site_cars_db',
        password: 'CarsTnbd#231!#47?few'
    })

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data.toString(),
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        // sessionStorage.setItem('token', result.access_token)
        console.log(result)


    } catch (error) {
        console.error('Fetch failed:', error)
    }
}
fetchPost()