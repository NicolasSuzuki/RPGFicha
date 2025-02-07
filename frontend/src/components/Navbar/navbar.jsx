const Navbar = () => {

    return (

        <nav className="bg-gray-800/50 p-4 flex justify-between items-center border-b border-gray-700">
            <Link to="/dashboard" className="text-xl font-bold flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-400" />
                My Hero App
            </Link>
            <div className="flex gap-4">
                <Link to="/dashboard" className="flex items-center gap-1 text-gray-300 hover:text-white transition">
                    <List className="w-5 h-5" />
                    Dashboard
                </Link>
                <Link to="/register-character" className="flex items-center gap-1 text-gray-300 hover:text-white transition">
                    <PlusCircle className="w-5 h-5" />
                    Register Character
                </Link>
                <button
                    className="flex items-center gap-1 text-red-400 hover:text-red-500 transition"
                    onClick={() => {
                        localStorage.removeItem('token');
                        setIsAuthenticated(false);
                    }}
                >
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </nav>
    )
}