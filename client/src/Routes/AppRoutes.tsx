import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthRoutes from '@/Routes/AuthRoutes';
import PrivateRoutes from '@/Routes/PrivateRoutes';
import { SuspensedViewTopBar } from '@/components/Common';
import { useAuthStore } from '@/store/authStore';

const AppRoutes = () => {
    const [user] = useAuthStore(state => [state.user]);

    const Home = lazy(() => import('@/pages/Public/Home'));
    const SignOut = lazy(() => import('@/pages/Auth/SignOut'));
    const Error = lazy(() => import('@/pages/Public/Error'));

    return (

        <Routes>
            {/* Public Routes */}
            <Route path='/' element={<SuspensedViewTopBar><Home /></SuspensedViewTopBar>} />
            <Route path='/signout/*' element={<SuspensedViewTopBar><SignOut /></SuspensedViewTopBar>} />
            <Route path='/error/:errorName' element={<SuspensedViewTopBar><Error /></SuspensedViewTopBar>} />
            {user?.id ? (
                <>
                    {/* Private Routes */}
                    <Route path='/auth/*' element={<Navigate to='/dashboard' />} />
                    <Route index element={<Navigate to='/dashboard' />} />
                    <Route path='/*' element={<PrivateRoutes />} />
                </>
            ) : (
                <>
                    {/* Auth Routes */}
                    <Route path='*' element={<Navigate to='/auth' />} />
                    <Route path='auth/*' element={<AuthRoutes />} />
                </>
            )}
        </Routes>
    )
}

export default AppRoutes;