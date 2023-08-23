import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Cookies from 'js-cookie'

import './styles/styles.scss'

import RoundList from './RoundList/RoundList'

function App() {
    const [response, setResponse] = useState([])
    const [isLoading, setLoading] = useState(true)

    const fetchResponseData = async () => {
        try {
            const apiResponse = await fetch(
                'https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json'
            )

            if (!apiResponse.ok) {
                throw new Error('Failed to fetch data')
            }

            const jsonData = await apiResponse.json()

            setLoading(false)

            setResponse(jsonData.rounds)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchResponseData()
    }, [])

    return isLoading ? (
        <div>Items Loading ...</div>
    ) : (
        <RoundList list={response} />
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

export default App
