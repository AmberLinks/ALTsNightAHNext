'use client';

import { useState, useEffect } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isDesktopMenuOpen && !target.closest('#desktop-menu-button') && !target.closest('#desktop-menu')) {
        setIsDesktopMenuOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isDesktopMenuOpen]);

  const menuItems = [
    { href: '#about', label: '当院について' },
    { href: '#flow', label: '診療の流れ' },
    { href: '#animals', label: '診療対象動物' },
    { href: '#faq', label: 'よくあるご質問' },
    { href: '#questionnaire', label: 'WEB問診票' },
    { href: '#access', label: 'アクセス' },
    { href: 'https://amberlinks.github.io/Recruitment/', label: '求人情報', external: true },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
    setIsDesktopMenuOpen(false);
  };

  return (
    <>
      {/* 電話番号トップバー */}
      <div className="bg-iron text-white text-sm fixed top-0 w-full z-50 h-8 flex items-center justify-center px-4">
        <div className="flex items-center">
          <i className="fas fa-phone-alt mr-2"></i>
          夜間診療のお電話はこちら: 
          <a href="tel:054-631-4757" className="font-bold underline ml-1">
            054-631-4757
          </a>
        </div>
      </div>

      {/* ヘッダー */}
      <header className="bg-white shadow-md fixed top-8 left-0 w-full z-40 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center space-x-3">
              <img
                src="https://raw.githubusercontent.com/AmberLinks/ALTsNightAH/main/logoImage.png"
                alt="ALTs夜間動物病院 ロゴ"
                className="h-12 w-12 object-contain rounded-md"
              />
              <div>
                <span className="text-lg font-bold text-iron block leading-tight">
                  ALTs夜間動物病院
                </span>
                <span className="text-xs text-amber font-semibold">
                  犬・猫の夜間診療｜エキゾチックアニマルの専門診療
                </span>
              </div>
            </a>

            {/* Desktop Dropdown Menu */}
            <div className="hidden md:block relative">
              <button
                id="desktop-menu-button"
                onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber"
              >
                メニュー
                <i className="fas fa-chevron-down ml-2"></i>
              </button>
              {isDesktopMenuOpen && (
                <div
                  id="desktop-menu"
                  className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                >
                  <div className="py-1" role="menu">
                    {menuItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={handleMenuClick}
                        {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              id="hamburger-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden hamburger ${isMenuOpen ? 'active' : ''}`}
            >
              <span className="bar block w-6 h-0.5 bg-iron my-1"></span>
              <span className="bar block w-6 h-0.5 bg-iron my-1"></span>
              <span className="bar block w-6 h-0.5 bg-iron my-1"></span>
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-sm text-gray-600 hover:bg-gray-50"
                onClick={handleMenuClick}
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
