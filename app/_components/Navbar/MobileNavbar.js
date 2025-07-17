import { useState } from 'react';
import Image from 'next/image';

export default function MobileNavbar({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="text-gray-500 hover:text-gray-800 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998] md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      {/* Animated Mobile menu */}
      <div
        className={`costum-bg fixed top-[85px] left-0 w-full z-[9999] md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        style={{height: menuOpen ? 'calc(100vh - 85px)' : 0}}
      >
        <ul className="flex flex-col space-y-2 p-4">
          {navigation.map((item, idx) => (
            <li key={idx} className="text-white flex flex-col">
              {item.submenu ? (
                <>
                  <button
                    type="button"
                    className="flex items-center w-full justify-center py-2"
                    onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                  >
                    <span>{item.title}</span>
                    <span className='mx-2'>{item.icon}</span>
                  </button>
                  {/* Animated submenu */}
                  <ul
                    className={`pl-4 py-2 text-center transition-all duration-300 overflow-hidden ${openSubmenu === item.title ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{maxHeight: openSubmenu === item.title ? '300px' : '0px'}}
                  >
                    {item.submenu.map((subItem) => (
                      <li key={subItem.id} className="py-2">
                        <a href={subItem.link} className="text-white block w-full">{subItem.title}</a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={item.path} className="flex items-center py-2">
                  {item.title} {item.icon}
                </a>
              )}
            </li>
          ))}
          <li className="pt-4">
            <a href="#get_in_touch" className="btn-navbar block w-full text-center">Sign Up</a>
          </li>
        </ul>
      </div>
    </>
  );
} 