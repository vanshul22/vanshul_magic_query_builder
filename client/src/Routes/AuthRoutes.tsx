import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '@/pages/Auth/SignIn';
import { SuspensedViewTopBar } from '@/components/Common';

const AuthRoutes = () => {
    const SignUp = lazy(() => import('@/pages/Auth/SignUp'));
    const ForgotPassword = lazy(() => import('@/pages/Auth/ForgotPassword'));

    return (
        <Routes>
            <Route index element={<SignIn />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SuspensedViewTopBar><SignUp /></SuspensedViewTopBar>} />
            <Route path='/forgot-password' element={<SuspensedViewTopBar><ForgotPassword /></SuspensedViewTopBar>} />
        </Routes>
    )
}

export default AuthRoutes;