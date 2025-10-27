import React from 'react';



interface NavItem {
    label: string;
    href: string;
    subItems?: NavItem[];
}



const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/categories',
        subItems: [
            { label: 'Politics', href: '/categories/politics' },
            { label: 'Health', href: '/categories/health' },
            { label: 'Design', href: '/categories/design' },
        ],
     },
    { label: 'Lifestyle', href: '/categories/lifestyle' },
    { label: 'Education', href: '/categories/education' },
    { label: 'Health', href: '/categories/health' },
    { label: 'Design', href: '/categories/design' },
    { label: 'Technology', href: '/categories/technology' },
    { label: 'Culture', href: '/categories/culture' },
    { label: 'About', href: '/about' },

];

const Navbar = () => {

  






    return (
       <div>
        navbar
       </div>
    );
};

export default Navbar;