import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Loginf from '../pages/Loginf';
import Product from '../pages/Product';



function AllRouter() {
    return (
        <div>
            <Routes>
                <Route path='/product' element={<Product />} ></Route>
                <Route path='/login' element={<Loginf />} ></Route>
            </Routes>
        </div>
    )
}

export default AllRouter