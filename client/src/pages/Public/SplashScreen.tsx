import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import splashScreenLogo from '@/assets/Logos/splash-logo.gif';
import { getFormattedStringDate } from '@/lib/appLogic/splashScreen';
import { getLocalStorage } from '@/lib/appLogic/localStorage';
const SPLASH_SCREEN_CODE = import.meta.env.VITE_SPLASH_SCREEN_CODE;

const SplashScreen = () => {
    // Getting Todays Date
    const todaysDate = getFormattedStringDate(new Date());
    // Defining state for loading.
    const [Loading, setLoading] = useState(true);
    // Getting State of Application.
    const [splashScreen, setSplashScreen] = useAppStore(state => [state.splashScreen, state.setSplashScreen]);

    const setSplashScreenFunc = async () => {
        // getting splash Screen from localstorage and adding their visibility.
        const splashScreenStorage = await getLocalStorage(SPLASH_SCREEN_CODE);

        if (splashScreenStorage.success) {
            if (splashScreenStorage.data !== todaysDate) setTimeout(() => setSplashScreen("visible", false), splashScreen.timer)
            else setSplashScreen("visible", false);
        } else {
            setTimeout(() => setSplashScreen("visible", false), splashScreen.timer);
        }
        setLoading(false);
    }

    useEffect(() => {

        setSplashScreenFunc();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return Loading ? <>Loading...</> :
        <div className="w-screen h-screen flex justify-center items-center bg-[#f7f4ef]">
            <img src={splashScreenLogo} alt="Splash Screen Logo" className="rounded-full h-72 w-72 mix-blend-darken" />
        </div>

}

export default SplashScreen;