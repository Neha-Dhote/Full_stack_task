import React, { useContext, useEffect, useState } from 'react'
import { useDta } from '../contexts/DataContext'
import { Link } from 'react-router-dom'

const Comp1  = () => {

    let { data, increase } = useData()

    let [data1, set data1] = useState(data)

    useEffect(() => {
        setData1( prev => {
            return data1 + 2000
        })
    } , [data])

    return (
        <div>
            <h1> This is Components1 </h1>
            <h2>{data1}</h2>
            <button onClick={() => { increase() }}>increase</button>

            <Link to="/another">Go to /another</Link>

        </div>
    )
}

export default Comp1