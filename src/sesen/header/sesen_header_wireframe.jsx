import React, { useState, useRef, useEffect } from "react";
// 导入所有 Mega Menu 组件 - 按新的导航标签命名
import SesenServicesDesktopMegaMenu from "./menu/sesen_services_mega_menu_redesign";
import SesenLifeSciencesDesktopMegaMenu from "./menu/sesen_life_sciences_mega_menu_redesign";
import SesenSolutionsDesktopMegaMenu from "./menu/sesen_solutions_mega_menu_redesign";
import SesenAIDesktopMegaMenu from "./menu/sesen_ai_mega_menu_redesign";
import SesenResourcesDesktopMegaMenu from "./menu/sesen_resources_mega_menu_redesign";
import SesenAboutDesktopMegaMenu from "./menu/sesen_resources_mega_menu_redesign";
import SesenContactDesktopMegaMenu from "./menu/sesen_contact_mega_menu_redesign";

const brand = {
  primary: "#0055A4",
  primaryDark: "#003D7A",
  primaryDeep: "#002C5A",
  primarySoft: "#F0F7FF",
  neutralBg: "#F8FAFC",
  border: "#E2E8F0",
};

// 图标组件 (保持不变)
function ChevronDown(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Search(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function Globe(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4 10z" />
    </svg>
  );
}

function Menu(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function X(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

// Mega Menu 映射 - 更新为新的导航标签
const megaMenuMap = {
  Services: SesenServicesDesktopMegaMenu,
  "Life Sciences": SesenLifeSciencesDesktopMegaMenu,
  Solutions: SesenSolutionsDesktopMegaMenu,
  AI: SesenAIDesktopMegaMenu,
  Resources: SesenResourcesDesktopMegaMenu,
  About: SesenAboutDesktopMegaMenu,
  Contact: SesenContactDesktopMegaMenu,
};

export default function SesenHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [activeMenu, setActiveMenu] = useState("Solutions"); // 临时调试二级菜单弹出框
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRefs = useRef({});
  const timeoutRef = useRef(null);
  const navRef = useRef(null);

  // 更新导航项 - 按照 Sesen 的业务结构
  const navItems = [
    { label: "Services", href: "#", hasMegaMenu: true },
    { label: "Life Sciences", href: "#", hasMegaMenu: true },
    { label: "Solutions", href: "#", hasMegaMenu: true },
    { label: "AI", href: "#", hasMegaMenu: true },
    { label: "Resources", href: "#", hasMegaMenu: true },
    { label: "About", href: "#", hasMegaMenu: true },
    { label: "Contact", href: "#", hasMegaMenu: true },
  ];

  // 交互逻辑 (保持不变)
  const handleMouseEnter = (label) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleMenuToggle = (label) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutside = Object.values(menuRefs.current).every(
        (ref) => ref && !ref.contains(event.target)
      );
      if (isOutside) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const getMegaMenuComponent = (label) => {
    const Component = megaMenuMap[label];
    return Component ? <Component /> : null;
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b"
      style={{ borderColor: brand.border }}
    >
      <div className="mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <a href="/" className="flex items-center gap-2">
              <span
                className="text-4xl font-bold tracking-[-0.04em]"
                style={{ color: brand.primary }}
              >
                <img 
                  style={{ maxWidth: '140px', width: '140px'}} 
                  src="/src/sesen/images/sesen-logo.svg" 
                  alt="Sesen" 
                />
              </span>
            </a>
          </div>

          {/* Desktop Navigation - 增加导航项数量，调整间距 */}
          <nav
            ref={navRef}
            className="hidden max-w-[1440px] lg:flex items-center gap-1 md:gap-1.5 lg:gap-2 xl:gap-8 relative"
          >
            {navItems.map((item) => {
              const isActive = activeMenu === item.label;
              const MenuComponent = megaMenuMap[item.label];

              return (
                <div
                  key={item.label}
                  ref={(el) => (menuRefs.current[item.label] = el)}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-2.5 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap ${
                      isActive ? "bg-slate-100/80" : "hover:bg-slate-100/60"
                    }`}
                    style={{ color: "#1e293b" }}
                    onClick={() => handleMenuToggle(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isActive && MenuComponent && (
                    <div
                      className="mega-menu-container"
                      style={{
                        position: "fixed",
                        top: "80px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100vw",
                        maxWidth: "1440px",
                        padding: "0",
                        pointerEvents: "auto",
                        zIndex: 9999,
                      }}
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {getMegaMenuComponent(item.label)}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1 md:gap-2">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-md transition-colors duration-200 hover:bg-slate-100/60"
              aria-label="Search"
            >
              <Search className="h-5 w-5" style={{ color: "#64748b" }} />
            </button>

            <button
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-md transition-colors duration-200 hover:bg-slate-100/60"
              aria-label="Language"
            >
              <Globe className="h-5 w-5" style={{ color: "#64748b" }} />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-md transition-colors duration-200 hover:bg-slate-100/60"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" style={{ color: "#1e293b" }} />
              ) : (
                <Menu className="h-5 w-5" style={{ color: "#1e293b" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden border-t py-4"
            style={{ borderColor: brand.border }}
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-slate-50"
                  style={{ color: "#1e293b" }}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}