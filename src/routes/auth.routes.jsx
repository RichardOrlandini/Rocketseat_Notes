import { Routes, Route } from 'react-router-dom';

import { Signln } from '../pages/Signln';
import { SignUp } from '../pages/SignUp';

export function AuthRoutes(){
    return (
        <Routes>
            <Route  path='/' element={<Signln />} />
            <Route  path='/register' element={<SignUp />} />
        </Routes>
    )
}