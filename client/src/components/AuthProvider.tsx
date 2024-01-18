import { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';


type AuthProviderProps = { children: ReactNode }

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [user, isAuthenticated] = useAuthStore(state => [state.user, state.isAuthenticated]);
    const navigate = useNavigate();

    const fetchCheckUserSignin = async () => {
        // Checking token from localstorage and then showing the childrens.
        const userAuthenticated = await isAuthenticated();
        // Redirected to signin page after signout.
        if (userAuthenticated) navigate("/dashboard");
        else navigate("/signout");
    }

    useEffect(() => {
        // Validate token on mount
        if (!user) fetchCheckUserSignin();
        return;

    }, []);

    return children;
}

export default AuthProvider;