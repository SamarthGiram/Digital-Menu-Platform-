import React, { useState, useEffect, createContext, useContext } from 'react';

// --- ICONS (Lucide-React SVGs as Components) ---
// Using inline SVGs to avoid external dependencies and ensure they work in the sandboxed environment.
const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);
const XIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);
const SunIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.93 17.66 1.41-1.41"/><path d="m17.66 4.93 1.41-1.41"/></svg>
);
const MoonIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);
const QrCodeIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h.01"/><path d="M21 12h.01"/><path d="M12 21h.01"/></svg>
);
const TabletIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>
);
const ShoppingCartIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"/></svg>
);
const BarChartIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
);
const UsersIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const UtensilsIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z"/></svg>
);
const CalendarIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);
const CreditCardIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
);
const LogOutIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
);
const StarIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);
const PlusCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
);
const MinusCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
);
const CheckCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);


// --- CONTEXTS ---
const ThemeContext = createContext();
const AuthContext = createContext();
const AppContext = createContext();

// --- DUMMY DATA ---
const DUMMY_MENU_ITEMS = {
    'Appetizers': [
        { id: 1, name: 'Bruschetta', description: 'Grilled bread with tomatoes, garlic, basil, and olive oil.', price: 8.99, image: 'https://placehold.co/400x300/EAD9C8/513429?text=Bruschetta' },
        { id: 2, name: 'Stuffed Mushrooms', description: 'Mushroom caps filled with seasoned breadcrumbs and cheese.', price: 9.99, image: 'https://placehold.co/400x300/EAD9C8/513429?text=Mushrooms' },
    ],
    'Main Courses': [
        { id: 3, name: 'Spaghetti Carbonara', description: 'Pasta with eggs, cheese, pancetta, and pepper.', price: 15.99, image: 'https://placehold.co/400x300/EAD9C8/513429?text=Carbonara' },
        { id: 4, name: 'Margherita Pizza', description: 'Classic pizza with tomatoes, mozzarella, and basil.', price: 14.99, image: 'https://placehold.co/400x300/EAD9C8/513429?text=Pizza' },
        { id: 5, name: 'Grilled Salmon', description: 'Salmon fillet served with asparagus and lemon.', price: 22.99, image: 'https://placehold.co/400x300/EAD9C8/513429?text=Salmon' },
    ],
    'Desserts': [
        { id: 6, name: 'Tiramisu', description: 'Coffee-flavoured Italian dessert.', price: 7.99, image: 'https://placehold.co/400x300/EAD9C8/513429?text=Tiramisu' },
        { id: 7, name: 'Panna Cotta', description: 'Sweetened cream thickened with gelatin.', price: 6.99, image: 'https://placehold.co/400x300/EAD9C8/513429?text=Panna+Cotta' },
    ],
    'Thali Specials': [
        { id: 8, name: 'North Indian Thali', description: 'A complete meal with various North Indian dishes.', price: 18.99, image: 'https://placehold.co/400x300/EAD9C8/513429?text=Thali', customizable: true, components: {
            'Curries': ['Paneer Butter Masala', 'Dal Makhani', 'Chole'],
            'Breads': ['Naan', 'Roti'],
            'Sides': ['Raita', 'Salad', 'Papad'],
        }, alternatives: {
            'Paneer Butter Masala': ['Palak Paneer', 'Shahi Paneer'],
            'Dal Makhani': ['Dal Tadka'],
        }},
    ]
};
const DUMMY_ORDERS = [
    { id: 'ORD123', table: 5, items: [{name: 'Spaghetti Carbonara', qty: 2}, {name: 'Margherita Pizza', qty: 1}], total: 46.97, status: 'Preparing' },
    { id: 'ORD124', table: 2, items: [{name: 'Grilled Salmon', qty: 1}], total: 22.99, status: 'Served' },
    { id: 'ORD125', table: 8, items: [{name: 'Tiramisu', qty: 2}], total: 15.98, status: 'New' },
];
const DUMMY_RESERVATIONS = [
    { id: 'RES001', name: 'John Doe', guests: 4, time: '7:30 PM', status: 'Confirmed' },
    { id: 'RES002', name: 'Jane Smith', guests: 2, time: '8:00 PM', status: 'Pending' },
];
const DUMMY_TESTIMONIALS = [
    { name: 'Café Bliss', quote: 'Since using this digital menu, our orders increased by 30%!', rating: 5, image: 'https://placehold.co/100x100/EBF4FF/3B82F6?text=CB' },
    { name: 'Spice Haven', quote: 'Guests love customizing their thalis – we’ve reduced food waste!', rating: 5, image: 'https://placehold.co/100x100/FEE2E2/DC2626?text=SH' },
    { name: 'Ocean View Hotel', quote: 'QR ordering saves us time and keeps tables turning faster.', rating: 5, image: 'https://placehold.co/100x100/D1FAE5/059669?text=OV' },
];

// --- PROVIDERS ---
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // null, { name: 'Admin User', role: 'admin' }, or { name: 'Customer Name', role: 'customer' }

    const login = (role) => {
        if (role === 'admin') {
            setUser({ name: 'Adminstrator', role: 'admin' });
        } else {
            setUser({ name: 'John Doe', role: 'customer' });
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const AppProvider = ({ children }) => {
    const [page, setPage] = useState('home');
    const { user } = useContext(AuthContext);

    const navigate = (newPage) => {
        if (!user && (newPage.startsWith('admin-') || newPage.startsWith('customer-'))) {
            setPage('home');
        } else {
            setPage(newPage);
            window.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        if (!user && (page.startsWith('admin-') || page.startsWith('customer-'))) {
            navigate('home');
        }
    }, [user, page]);


    return (
        <AppContext.Provider value={{ page, navigate }}>
            {children}
        </AppContext.Provider>
    );
};


// --- LAYOUT COMPONENTS ---
const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, logout } = useContext(AuthContext);
    const { page, navigate } = useContext(AppContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: 'home' },
        { name: 'Features', path: 'features' },
        { name: 'Pricing', path: 'pricing' },
        { name: 'Contact', path: 'contact' },
    ];

    const handleLogout = () => {
        logout();
        navigate('home');
    }
    
    const handleDashboardClick = () => {
        if (user.role === 'admin') {
            navigate('admin-dashboard');
        } else {
            navigate('customer-dashboard');
        }
    }

    return (
        <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <a onClick={() => navigate('home')} className="cursor-pointer flex-shrink-0 flex items-center space-x-2">
                            <UtensilsIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                            <span className="text-2xl font-bold text-gray-800 dark:text-white">DigitalMenuPro</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    onClick={() => navigate(link.path)}
                                    className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${
                                        page === link.path
                                            ? 'bg-indigo-100 text-indigo-700 dark:bg-gray-700 dark:text-white'
                                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-indigo-500 mr-3">
                            {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
                        </button>
                        <div className="hidden md:block">
                            {user ? (
                                <div className="flex items-center space-x-3">
                                    <button onClick={handleDashboardClick} className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">Dashboard</button>
                                    <button onClick={handleLogout} className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                                        <LogOutIcon className="h-6 w-6" />
                                    </button>
                                </div>
                            ) : (
                                <a onClick={() => navigate('login')} className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Login / Register
                                </a>
                            )}
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                onClick={() => { navigate(link.path); setIsMenuOpen(false); }}
                                className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium ${
                                    page === link.path
                                        ? 'bg-indigo-100 text-indigo-700 dark:bg-gray-800 dark:text-white'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                      {user ? (
                          <>
                            <div className="flex items-center justify-between px-4">
                                 <div>
                                    <div className="text-base font-medium text-gray-800 dark:text-white">{user.name}</div>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{user.role}</div>
                                 </div>
                                 <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                                    <LogOutIcon className="h-6 w-6" />
                                 </button>
                            </div>
                            <div className="mt-3 px-2 space-y-1">
                                <a onClick={() => { handleDashboardClick(); setIsMenuOpen(false); }} className="cursor-pointer block rounded-md px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Dashboard</a>
                            </div>
                          </>
                      ) : (
                          <div className="px-5">
                            <a onClick={() => { navigate('login'); setIsMenuOpen(false); }} className="cursor-pointer block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                Login / Register
                            </a>
                          </div>
                      )}
                    </div>
                </div>
            )}
        </nav>
    );
};

const Footer = () => {
    const { navigate } = useContext(AppContext);
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <div className="flex items-center space-x-2">
                            <UtensilsIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
                            <span className="text-3xl font-bold text-gray-800 dark:text-white">DigitalMenuPro</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-base">
                            The Future of Dining is Here. Empower your restaurant with seamless digital solutions.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                             <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7.177a4.823 4.823 0 100 9.646 4.823 4.823 0 000-9.646zm0 7.94a3.117 3.117 0 110-6.234 3.117 3.117 0 010 6.234zm6.406-7.194a1.18 1.18 0 100-2.36 1.18 1.18 0 000 2.36z" clipRule="evenodd" /></svg>
                            </a>
                             <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">Quick Links</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><a onClick={() => navigate('home')} className="cursor-pointer text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Home</a></li>
                                    <li><a onClick={() => navigate('features')} className="cursor-pointer text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Features</a></li>
                                    <li><a onClick={() => navigate('pricing')} className="cursor-pointer text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Pricing</a></li>
                                    <li><a onClick={() => navigate('contact')} className="cursor-pointer text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                    <p className="text-base text-gray-400 dark:text-gray-500 xl:text-center">&copy; 2025 DigitalMenuPro. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};


// --- PAGE COMPONENTS ---

const HomePage = () => {
    const { navigate } = useContext(AppContext);
    
    const howItWorksSteps = [
        { number: 1, title: 'Scan QR or Open Tablet', description: 'Your customers can scan a QR code or use a tablet to browse the menu instantly.' },
        { number: 2, title: 'Browse & Customize', description: 'View beautiful photos, videos, and nutrition facts. Customize your dishes to suit your taste.' },
        { number: 3, title: 'Place Order', description: 'Order directly from your table or room. No waiting for a waiter.' },
        { number: 4, title: 'Pay Your Way', description: 'Pay at the table, online, or later – your choice.' },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt="Delicious food spread" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center py-24 md:py-40">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                                <span className="block">The Future of Dining</span>
                                <span className="block text-indigo-400">Digital Menus for Cafes & Hotels</span>
                            </h1>
                            <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg md:text-xl text-gray-200">
                                Scan. Order. Enjoy. No apps. No hassle.
                            </p>
                            <div className="mt-10 flex justify-center md:justify-start gap-4 flex-wrap">
                                <button onClick={() => navigate('pricing')} className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">
                                    Get Started
                                </button>
                                <button onClick={() => navigate('menu-demo')} className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-lg">
                                    See Demo
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block relative h-full">
                           <img src="https://placehold.co/400x600/1F2937/FFFFFF?text=Menu+on+Phone" alt="Mobile menu mockup" className="absolute right-20 top-1/2 -translate-y-1/2 w-48 rounded-2xl shadow-2xl transform rotate-6 transition-transform hover:scale-105" />
                           <img src="https://placehold.co/500x350/374151/FFFFFF?text=Menu+on+Tablet" alt="Tablet menu mockup" className="relative left-0 top-1/2 -translate-y-1/2 w-80 rounded-2xl shadow-2xl transform -rotate-3 transition-transform hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Simple Steps to Get Started</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">Go digital in minutes, not days.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {howItWorksSteps.map((step) => (
                            <div key={step.number} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="flex-shrink-0 mx-auto w-16 h-16 bg-indigo-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-600 dark:text-indigo-400 z-10 mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold">{step.title}</h3>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section Snippet */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Everything You Need to Succeed</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">A powerful toolkit to elevate your dining experience.</p>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"><h3 className="font-bold">📱 QR & Tablet Ordering</h3></div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"><h3 className="font-bold">🌐 Online Ordering (0% commission)</h3></div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"><h3 className="font-bold">🍽 Customizable Thali</h3></div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"><h3 className="font-bold">📢 Campaigns & Marketing</h3></div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"><h3 className="font-bold">👥 Guest CRM</h3></div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"><h3 className="font-bold">💳 Pay at Table</h3></div>
                    </div>
                    <div className="text-center mt-12">
                        <button onClick={() => navigate('features')} className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline text-lg">
                            See All Features &rarr;
                        </button>
                    </div>
                </div>
            </section>
            
            {/* Demo QR Code Section */}
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                        <div className="flex justify-center">
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://react.dev" alt="Demo QR Code" />
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold">Experience it now!</h2>
                            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">Scan the QR code with your phone to see our interactive demo menu.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Trusted by Restaurants Everywhere</h2>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        {DUMMY_TESTIMONIALS.map((testimonial) => (
                            <div key={testimonial.name} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
                                <img src={testimonial.image} className="w-24 h-24 rounded-full mx-auto -mt-20 border-4 border-white dark:border-gray-800 shadow-lg" alt={testimonial.name}/>
                                <blockquote className="text-gray-600 dark:text-gray-300 italic mt-6 text-lg">"{testimonial.quote}"</blockquote>
                                <p className="mt-4 font-bold text-indigo-600 dark:text-indigo-400">- {testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
             <section className="relative bg-gray-800">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover opacity-30" alt="Restaurant interior" />
                </div>
                <div className="relative max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                        <span className="block">Bring Your Restaurant Into the Digital Age.</span>
                    </h2>
                    <button onClick={() => navigate('pricing')} className="mt-8 w-full sm:w-auto inline-block bg-indigo-500 text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-indigo-600 transition-transform transform hover:scale-105 shadow-lg">
                        Get Started Now
                    </button>
                </div>
            </section>
        </div>
    );
};

const FeaturesPage = () => {
    const featureList = [
        { icon: <TabletIcon className="h-8 w-8 text-indigo-500"/>, title: 'Tablet Menu', description: 'Works on iOS & Android' },
        { icon: <QrCodeIcon className="h-8 w-8 text-indigo-500"/>, title: 'QR Menu', description: 'No app required' },
        { icon: <ShoppingCartIcon className="h-8 w-8 text-indigo-500"/>, title: 'QR & Tablet Ordering', description: 'Unique codes per table/room' },
        { icon: <img src="https://placehold.co/32x32/transparent/000?text=0%25" alt="commission icon" className="h-8 w-8"/>, title: 'Online Ordering', description: '0% commission' },
        { icon: <img src="https://placehold.co/32x32/transparent/000?text=Thali" alt="thali icon" className="h-8 w-8"/>, title: 'Customizable Thali', description: 'Replace unwanted dishes' },
        { icon: <img src="https://placehold.co/32x32/transparent/000?text=i" alt="nutrition icon" className="h-8 w-8"/>, title: 'Detailed Nutrition Facts', description: 'Eat smart' },
        { icon: <img src="https://placehold.co/32x32/transparent/000?text=Vid" alt="video icon" className="h-8 w-8"/>, title: 'Showcase Dishes', description: 'Photos & videos that sell' },
        { icon: <StarIcon className="h-8 w-8 text-indigo-500"/>, title: 'Customer Ratings', description: 'Let guests share feedback' },
        { icon: <UsersIcon className="h-8 w-8 text-indigo-500"/>, title: 'Social Login', description: 'Facebook, Google, Instagram' },
        { icon: <BarChartIcon className="h-8 w-8 text-indigo-500"/>, title: 'Guest CRM', description: 'Track and understand your customers' },
        { icon: <img src="https://placehold.co/32x32/transparent/000?text=Camp" alt="campaign icon" className="h-8 w-8"/>, title: 'Campaigns', description: 'Boost sales with marketing offers' },
        { icon: <img src="https://placehold.co/32x32/transparent/000?text=Del" alt="delivery icon" className="h-8 w-8"/>, title: 'Delivery & Pickup', description: 'Manage orders effortlessly' },
        { icon: <img src="https://placehold.co/32x32/transparent/000?text=SMS" alt="sms icon" className="h-8 w-8"/>, title: 'SMS & WhatsApp Marketing', description: 'Direct communication' },
        { icon: <img src="https://placehold.co/32x32/transparent/000?text=Stamp" alt="stamp icon" className="h-8 w-8"/>, title: 'Digital Stamp Cards', description: 'Reward loyalty' },
        { icon: <CalendarIcon className="h-8 w-8 text-indigo-500"/>, title: 'Table Reservations', description: 'Let customers book ahead' },
        { icon: <CreditCardIcon className="h-8 w-8 text-indigo-500"/>, title: 'Pay at Table', description: 'Pay now or later' },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
                        A Complete Platform for Modern Restaurants
                    </p>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500 dark:text-gray-400">
                        From ordering to marketing, we provide the tools you need to thrive in the digital age.
                    </p>
                </div>

                <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {featureList.map(item => (
                        <div key={item.title} className="flex items-start p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300">
                            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 dark:bg-gray-700">
                                {item.icon}
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h4>
                                <p className="mt-1 text-base text-gray-500 dark:text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const PricingPage = () => {
    const plans = [
        { name: 'Basic', price: '499', period: 'month', features: ['QR Menu', 'Tablet Menu', 'Basic Menu Layouts', 'Up to 50 Menu Items'], popular: false },
        { name: 'Pro', price: '999', period: 'month', features: ['Everything in BASIC', 'Online Ordering', 'Table Reservations', 'Marketing Tools', 'Customizable Thali', 'Loyalty Programs'], popular: true },
        { name: 'Enterprise', price: '1999', period: 'month', features: ['Everything in PRO', 'Unlimited Items', 'Full Custom Branding', 'Dedicated Support', 'Advanced Analytics'], popular: false },
    ];
    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Simple, Transparent Pricing</h2>
                    <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">Choose the plan that's right for your business. No hidden fees.</p>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-3 items-start">
                    {plans.map(plan => (
                        <div key={plan.name} className={`rounded-2xl p-8 flex flex-col ${plan.popular ? 'bg-indigo-600 text-white shadow-2xl transform scale-105' : 'bg-white dark:bg-gray-800 shadow-lg'}`}>
                            {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-300 text-gray-900 px-3 py-1 text-sm font-semibold rounded-full">Most Popular</div>}
                            <h3 className={`text-2xl font-semibold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{plan.name}</h3>
                            
                            <div className="mt-4 flex items-baseline">
                                <span className={`text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>₹{plan.price}</span>
                                <span className={`ml-1 text-xl font-semibold ${plan.popular ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'}`}>/{plan.period}</span>
                            </div>
                            <ul className={`mt-8 space-y-4 ${plan.popular ? 'text-indigo-200' : 'text-gray-600 dark:text-gray-300'}`}>
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex space-x-3">
                                        <CheckCircleIcon className={`flex-shrink-0 h-6 w-6 ${plan.popular ? 'text-yellow-300' : 'text-green-500'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-8">
                                <button className={`w-full py-3 px-6 text-lg font-semibold rounded-lg transition-colors ${plan.popular ? 'bg-white text-indigo-600 hover:bg-gray-200' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ContactPage = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
        }, 1500);
    }
    return (
        <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Get in Touch</h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">Have questions? We'd love to hear from you. Fill out the form below or email us.</p>
                </div>
                <form onSubmit={handleSubmit} className="mt-12">
                    <div className="grid grid-cols-1 gap-y-6">
                        <div>
                            <label htmlFor="full-name" className="sr-only">Full name</label>
                            <input type="text" name="full-name" id="full-name" autoComplete="name" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white" placeholder="Full name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white" placeholder="Email" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">Phone</label>
                            <input type="text" name="phone" id="phone" autoComplete="tel" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white" placeholder="Phone (Optional)" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea id="message" name="message" rows="4" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white" placeholder="Message"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                        {status === 'sent' && <p className="text-center text-green-600">Message sent successfully! We'll be in touch soon.</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const { navigate } = useContext(AppContext);
    const [role, setRole] = useState('customer');

    const handleLogin = (e) => {
        e.preventDefault();
        login(role);
        if (role === 'admin') {
            navigate('admin-dashboard');
        } else {
            navigate('menu-demo'); // Or customer dashboard
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center items-center space-x-2">
                    <UtensilsIcon className="h-12 w-auto text-indigo-600 dark:text-indigo-400" />
                    <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                        Sign in to your account
                    </h2>
                </div>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                I am a...
                            </label>
                            <select
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            >
                                <option value="customer">Customer</option>
                                <option value="admin">Restaurant Owner / Admin</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" required defaultValue={role === 'admin' ? 'admin@example.com' : 'customer@example.com'} className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Password
                            </label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autoComplete="current-password" required defaultValue="password" className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or continue with</span>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div>
                                <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <span className="sr-only">Sign in with Google</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.14 6.839 9.491.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                                </a>
                            </div>
                            <div>
                                <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <span className="sr-only">Sign in with Facebook</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('analytics');
    
    const tabs = [
        { id: 'analytics', name: 'Analytics', icon: <BarChartIcon className="w-5 h-5 mr-2" /> },
        { id: 'menu', name: 'Menu Management', icon: <UtensilsIcon className="w-5 h-5 mr-2" /> },
        { id: 'orders', name: 'Live Orders', icon: <ShoppingCartIcon className="w-5 h-5 mr-2" /> },
        { id: 'reservations', name: 'Reservations', icon: <CalendarIcon className="w-5 h-5 mr-2" /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'analytics': return <AnalyticsContent />;
            case 'menu': return <MenuManager />;
            case 'orders': return <OrderManager />;
            case 'reservations': return <ReservationManager />;
            default: return <AnalyticsContent />;
        }
    };
    
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
                <div className="mt-6 border-b border-gray-200 dark:border-gray-700">
                    <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${
                                    activeTab === tab.id
                                        ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                            >
                                {tab.icon}
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="mt-8">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

const AnalyticsContent = () => {
    const stats = [
        { name: 'Total Revenue', value: '$12,839', change: '+12.5%', changeType: 'positive' },
        { name: 'Total Orders', value: '482', change: '+8.2%', changeType: 'positive' },
        { name: 'Average Order Value', value: '$26.64', change: '-1.1%', changeType: 'negative' },
        { name: 'New Customers', value: '32', change: '+5', changeType: 'positive' },
    ];
    const chartData = [ { label: 'Mon', value: 65 }, { label: 'Tue', value: 59 }, { label: 'Wed', value: 80 }, { label: 'Thu', value: 81 }, { label: 'Fri', value: 56 }, { label: 'Sat', value: 95 }, { label: 'Sun', value: 70 }];
    const popularItems = [
        { name: 'Spaghetti Carbonara', orders: 120 },
        { name: 'Margherita Pizza', orders: 98 },
        { name: 'Grilled Salmon', orders: 75 },
    ];
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map(stat => (
                    <div key={stat.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</h3>
                        <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                        <p className={`mt-1 text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>{stat.change}</p>
                    </div>
                ))}
            </div>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Sales This Week</h3>
                    <div className="mt-4 h-64 w-full">
                        <div className="flex items-end h-full w-full space-x-2">
                            {chartData.map(d => (
                                <div key={d.label} className="flex-1 flex flex-col items-center">
                                    <div className="w-full bg-indigo-500 rounded-t-md" style={{ height: `${d.value}%` }}></div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{d.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Popular Items</h3>
                    <ul className="mt-4 space-y-3">
                        {popularItems.map(item => (
                            <li key={item.name} className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-300">{item.name}</span>
                                <span className="font-semibold text-gray-900 dark:text-white">{item.orders} orders</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const MenuManager = () => {
    const [menuItems, setMenuItems] = useState(DUMMY_MENU_ITEMS);
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu Management</h2>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">Add New Item</button>
            </div>
            <div className="space-y-8">
                {Object.keys(menuItems).map(category => (
                    <div key={category}>
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 border-b pb-2 mb-4">{category}</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Item</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Price</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                    {menuItems[category].map(item => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full object-cover" src={item.image} alt={item.name} />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">{item.description}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">${item.price.toFixed(2)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-200">Edit</a>
                                                <a href="#" className="ml-4 text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-200">Delete</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const OrderManager = () => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'New': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
            case 'Preparing': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            case 'Served': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
            default: return 'bg-gray-100 text-gray-800';
        }
    };
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Live Orders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {DUMMY_ORDERS.map(order => (
                    <div key={order.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-bold text-lg text-gray-900 dark:text-white">Table {order.table}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{order.id}</p>
                            </div>
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                                {order.status}
                            </span>
                        </div>
                        <ul className="my-4 space-y-2 flex-grow">
                            {order.items.map(item => (
                                <li key={item.name} className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                                    <span>{item.qty} x {item.name}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="border-t pt-2 mt-2 flex justify-between items-center">
                            <span className="font-bold text-gray-900 dark:text-white">Total: ${order.total.toFixed(2)}</span>
                            {order.status === 'New' && <button className="bg-green-500 text-white px-3 py-1 text-sm rounded hover:bg-green-600">Accept</button>}
                            {order.status === 'Preparing' && <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600">Mark as Served</button>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ReservationManager = () => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Table Reservations</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Guests</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Time</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {DUMMY_RESERVATIONS.map(res => (
                            <tr key={res.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{res.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{res.guests}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{res.time}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${res.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{res.status}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    {res.status === 'Pending' && <a href="#" className="text-green-600 hover:text-green-900">Confirm</a>}
                                    <a href="#" className="ml-4 text-red-600 hover:text-red-900">Cancel</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const CustomerDashboard = () => {
    // This is a placeholder for a customer dashboard.
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Account</h1>
                <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Order History</h2>
                    <p className="text-gray-600 dark:text-gray-400">Your recent orders will appear here.</p>
                    {/* Order history list would go here */}
                </div>
            </div>
        </div>
    );
}

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState('Appetizers');
    const [order, setOrder] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [customizingItem, setCustomizingItem] = useState(null);

    const addToOrder = (item) => {
        if (item.customizable) {
            setCustomizingItem(item);
            return;
        }
        setOrder(currentOrder => {
            const existingItem = currentOrder.find(i => i.id === item.id);
            if (existingItem) {
                return currentOrder.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...currentOrder, { ...item, quantity: 1 }];
        });
    };

    const updateQuantity = (itemId, amount) => {
        setOrder(currentOrder => {
            const itemToUpdate = currentOrder.find(i => i.id === itemId);
            if (itemToUpdate.quantity + amount <= 0) {
                return currentOrder.filter(i => i.id !== itemId);
            }
            return currentOrder.map(i => i.id === itemId ? { ...i, quantity: i.quantity + amount } : i);
        });
    };

    const orderTotal = order.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            {customizingItem && <ThaliCustomizationModal item={customizingItem} onClose={() => setCustomizingItem(null)} setOrder={setOrder} />}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Our Menu</h1>
                    <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Freshly prepared, just for you.</p>
                </div>

                <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                    {/* Categories Sidebar */}
                    <aside className="hidden lg:block">
                        <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Categories</h2>
                        <nav className="space-y-1">
                            {Object.keys(DUMMY_MENU_ITEMS).map(category => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`w-full text-left flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                                        activeCategory === category
                                        ? 'bg-indigo-100 text-indigo-700 dark:bg-gray-700 dark:text-white'
                                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Menu Items */}
                    <main className="lg:col-span-3">
                         {/* Category select for mobile */}
                        <div className="lg:hidden mb-6">
                            <select
                                value={activeCategory}
                                onChange={(e) => setActiveCategory(e.target.value)}
                                className="w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            >
                                {Object.keys(DUMMY_MENU_ITEMS).map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{activeCategory}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {DUMMY_MENU_ITEMS[activeCategory].map(item => (
                                <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
                                    <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
                                    <div className="p-4 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.name}</h3>
                                            <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">${item.price.toFixed(2)}</p>
                                        </div>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex-grow">{item.description}</p>
                                        <div className="mt-4">
                                            <button onClick={() => addToOrder(item)} className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                                                {item.customizable ? 'Customize & Add' : 'Add to Order'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>

            {/* Cart Floating Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button onClick={() => setIsCartOpen(true)} className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-110">
                    <ShoppingCartIcon className="h-8 w-8" />
                    {order.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                            {order.reduce((total, item) => total + item.quantity, 0)}
                        </span>
                    )}
                </button>
            </div>

            {/* Cart Sidebar */}
            {isCartOpen && (
                <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsCartOpen(false)}>
                    <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white dark:bg-gray-800 shadow-xl flex flex-col" onClick={e => e.stopPropagation()}>
                        <div className="p-6 flex justify-between items-center border-b dark:border-gray-700">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Order</h2>
                            <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
                                <XIcon className="h-6 w-6" />
                            </button>
                        </div>
                        {order.length === 0 ? (
                            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                                <ShoppingCartIcon className="h-24 w-24 text-gray-300 dark:text-gray-600" />
                                <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">Your cart is empty.</p>
                                <p className="text-sm text-gray-400">Add items from the menu to get started.</p>
                            </div>
                        ) : (
                            <div className="flex-grow overflow-y-auto p-6 space-y-4">
                                {order.map(item => (
                                    <div key={item.id} className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src={item.image} alt={item.name} className="h-16 w-16 rounded-md object-cover" />
                                            <div className="ml-4">
                                                <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button onClick={() => updateQuantity(item.id, -1)}><MinusCircleIcon className="h-6 w-6 text-gray-500 hover:text-red-500" /></button>
                                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}><PlusCircleIcon className="h-6 w-6 text-gray-500 hover:text-green-500" /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {order.length > 0 && (
                            <div className="p-6 border-t dark:border-gray-700">
                                <div className="flex justify-between items-center text-lg font-bold mb-4">
                                    <span className="text-gray-900 dark:text-white">Total:</span>
                                    <span className="text-indigo-600 dark:text-indigo-400">${orderTotal.toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700">
                                    Place Order
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const ThaliCustomizationModal = ({ item, onClose, setOrder }) => {
    const [selections, setSelections] = useState(() => {
        const initialSelections = {};
        Object.keys(item.components).forEach(category => {
            initialSelections[category] = item.components[category][0];
        });
        return initialSelections;
    });

    const handleSelectionChange = (category, value) => {
        setSelections(prev => ({ ...prev, [category]: value }));
    };

    const handleAddToCart = () => {
        const customizedItem = {
            ...item,
            id: `${item.id}-${Date.now()}`, // Unique ID for this customization
            name: `${item.name} (Custom)`,
            description: Object.values(selections).join(', '),
        };
        setOrder(currentOrder => {
            return [...currentOrder, { ...customizedItem, quantity: 1 }];
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full">
                <div className="p-6 border-b dark:border-gray-700 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Customize Your {item.name}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"><XIcon className="h-6 w-6" /></button>
                </div>
                <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                    {Object.keys(item.components).map(category => (
                        <div key={category}>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{category}</h3>
                            <div className="space-y-2">
                                {item.components[category].map(option => {
                                    const hasAlternatives = item.alternatives && item.alternatives[option];
                                    return (
                                        <div key={option} className="flex items-center p-3 rounded-md border dark:border-gray-600">
                                            <input
                                                type="radio"
                                                id={`${category}-${option}`}
                                                name={category}
                                                value={option}
                                                checked={selections[category] === option || (item.alternatives[selections[category]] && item.alternatives[selections[category]].includes(option))}
                                                onChange={() => handleSelectionChange(category, option)}
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                            />
                                            <label htmlFor={`${category}-${option}`} className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">{option}</label>
                                            {hasAlternatives && (
                                                <select
                                                    onChange={(e) => handleSelectionChange(category, e.target.value)}
                                                    value={selections[category]}
                                                    className="ml-auto text-sm rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                                >
                                                    <option value={option}>{option}</option>
                                                    {item.alternatives[option].map(alt => <option key={alt} value={alt}>{alt}</option>)}
                                                </select>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-6 border-t dark:border-gray-700 flex justify-end items-center space-x-4">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">${item.price.toFixed(2)}</span>
                    <button onClick={handleAddToCart} className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">Add to Order</button>
                </div>
            </div>
        </div>
    );
};


// --- MAIN APP COMPONENT ---
function App() {
    const { page, user } = useContext(AppContext);

    const renderPage = () => {
        // Protected routes
        if (page.startsWith('admin-') && (!user || user.role !== 'admin')) {
            return <LoginPage />;
        }
        if (page.startsWith('customer-') && (!user || user.role !== 'customer')) {
            return <LoginPage />;
        }

        switch (page) {
            case 'home': return <HomePage />;
            case 'features': return <FeaturesPage />;
            case 'pricing': return <PricingPage />;
            case 'contact': return <ContactPage />;
            case 'login': return <LoginPage />;
            case 'admin-dashboard': return <AdminDashboard />;
            case 'customer-dashboard': return <CustomerDashboard />;
            case 'menu-demo': return <MenuPage />;
            default: return <HomePage />;
        }
    };

    return (
        <div className="antialiased font-sans">
            <Navbar />
            <main>{renderPage()}</main>
            <Footer />
        </div>
    );
}

// The final export must be a single component that wraps everything.
export default function DigitalMenuApp() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <AppProvider>
                    <App />
                </AppProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}
