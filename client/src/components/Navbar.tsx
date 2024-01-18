// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToggleDarkMode } from './ToggleDarkMode';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const Navbar = () => {

    // const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-primary dark:bg-secondary p-6 rounded-md mx-1 mt-1 dark:mt-3">
            <div className="flex items-center flex-shrink-0 text-white dark:text-gray-200 mr-6">
                <Link to={"https://www.orbiosolutions.com/"} target='_blank'> <span className="font-bold text-xl tracking-tight">Orbio Solutions</span></Link>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 dark:text-gray-300 border-teal-400 dark:border-gray-500 hover:text-white dark:hover:text-gray-100 hover:border-white dark:hover:border-gray-400">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to={"/dashboard"} className="block mt-4 font-bold lg:inline-block lg:mt-0 text-teal-600 dark:text-teal-400 hover:text-teal-500  mr-4">
                        Dashboard
                    </Link>
                    <Link to={"/profile"} className="block mt-4 font-bold lg:inline-block lg:mt-0 text-teal-600 dark:text-teal-400 hover:text-teal-500  mr-4">
                        Profile
                    </Link>
                </div>
                <div className='flex gap-5 mt-5 lg:mt-0 items-center'>
                    <AlertDialog>
                        <AlertDialogTrigger className='text-gray-300 hover:text-gray-50 font-bold inline-flex'>Sign Out</AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction><Link to={"/signout"}>Sign Out</Link></AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    <ToggleDarkMode />
                </div>

            </div>
        </nav>
    )
}

export default Navbar;