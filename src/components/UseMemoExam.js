import React, { useMemo, useState } from 'react'

const UseMemoExam = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])
        setName('')
        setPrice('')
    }

    const total = useMemo(() => {
        return products.reduce((result, value) => {
            console.log('Re count')
            return result + value.price
        }, 0)
    }, [products])

    return (
        <div>
            <input
                value={name}
                placeholder="Enter name"
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price"
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}> Add </button>
            <br />
            <h1> Totals: {total} </h1>
            <ul>
                {products.map(product => (
                    <li key={product.name}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseMemoExam