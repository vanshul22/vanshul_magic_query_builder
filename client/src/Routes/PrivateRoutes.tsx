import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import { SuspensedViewTopBar } from '@/components/Common';

const PrivateRoutes = () => {
    const DashBoard = lazy(() => import('@/pages/Private/Dashboard'));
    const Profile = lazy(() => import('@/pages/Private/Profile'));

    return (
        <Routes>
            <Route path='/dashboard' element={<SuspensedViewTopBar><DashBoard /></SuspensedViewTopBar>} />
            <Route path='/profile' element={<SuspensedViewTopBar><Profile /></SuspensedViewTopBar>} />
            <Route path='/*' element={<Navigate to='/error/404' />} />
        </Routes>
    )
}

export default PrivateRoutes;