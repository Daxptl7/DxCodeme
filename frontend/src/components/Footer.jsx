const Footer = () => {
    return (
        <footer className="py-8 text-center text-slate-500 dark:text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Dxcode. All rights reserved.</p>
                <p className="mt-2 text-xs">Built with React, Tailwind CSS, and Passion.</p>
            </div>
        </footer>
    );
};

export default Footer;
