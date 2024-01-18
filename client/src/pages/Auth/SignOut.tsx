import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { removeFromLocalStorage } from '@/lib/appLogic/localStorage';
const VITE_USER_CODE = import.meta.env.VITE_USER_CODE;


const SignOut = () => {
    const [setUser] = useAuthStore(state => [state.setUser]);

    useEffect(() => {
        setUser(null);
        removeFromLocalStorage(VITE_USER_CODE);
    }, [setUser]);

    return (
        <Routes>
            <Route path='*' element={<Navigate to='/auth/signin' />} />
        </Routes>
    )
}

export default SignOut;