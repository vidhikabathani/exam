import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Product() {
    const obj = useParams()
    const [data, setdata] = useState("")
    console.log(obj.id)
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products${obj.id}`)
            .then((res) => { setdata(res.data) })
    }, [])
    return (
        <div>
            products
            {<>
                <h1>{data.title}</h1>
                <img src={data.image} alt="" /> </>}
        </div>)
}
export default Product