import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppRoutes from "@/Routes/AppRoutes";
import SplashScreen from "@/pages/Public/SplashScreen";
import AuthProvider from "@/components/AuthProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useAppStore } from "@/store/appStore";

const BASE_URL = import.meta.env.VITE_BASE_PATH;

function App() {

  const [splashScreen] = useAppStore(state => [state.splashScreen]);

  // const { isLoading, data, error, mutate } = useFetchData("${VITE_API_URL}api/users/check-signin", { method: 'POST', body: { key: 'value' } });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="THEME">
      {splashScreen.visible ? <SplashScreen /> :
        <Router basename={BASE_URL}>
          <AuthProvider>
            <AppRoutes />
            <Toaster reverseOrder={false} toastOptions={{ style: { color: 'white', padding: "10px 20px", backgroundColor: "#030637" } }} />
          </AuthProvider>
        </Router>}
    </ThemeProvider>
  );
}

export default App;