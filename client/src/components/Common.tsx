import { Suspense } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';

export const SuspensedViewTopBar = ({ children }: { children: React.ReactNode }) => {
    const baseColor = "red";
    TopBarProgress.config({ barColors: { '1': baseColor }, barThickness: 2, shadowBlur: 5 });
    return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};



