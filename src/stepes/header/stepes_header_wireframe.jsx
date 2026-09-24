import React, { useState, useRef, useEffect } from "react";
// 导入所有 Mega Menu 组件
import StepesPlatformDesktopMegaMenuUpdated from "./menu/stepes_platform_desktop_mega_menu_updated";
import StepesSolutionsDesktopMegaMenuUpdated from "./menu/stepes_solutions_desktop_mega_menu_updated";
import StepesServicesDesktopMegaMenuUpdated from "./menu/stepes_services_desktop_mega_menu_updated";
import StepesIndustriesDesktopMegaMenu from "./menu/stepes_industries_desktop_mega_menu";
import StepesResourcesDesktopMegaMenu from "./menu/stepes_resources_desktop_mega_menu";
import StepesCompanyDesktopMegaMenu from "./menu/stepes_company_desktop_mega_menu";

const brand = {
  primary: "#C11D63",
  primaryDark: "#9F1D55",
  primaryDeep: "#7A1542",
  primarySoft: "#FDF2F7",
  neutralBg: "#F6F6F7",
  border: "#E5E7EB",
};

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
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4 10z" />
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

// Mega Menu 映射
const megaMenuMap = {
  Platform: StepesPlatformDesktopMegaMenuUpdated,
  Solutions: StepesSolutionsDesktopMegaMenuUpdated,
  Services: StepesServicesDesktopMegaMenuUpdated,
  Industries: StepesIndustriesDesktopMegaMenu,
  Resources: StepesResourcesDesktopMegaMenu,
  Company: StepesCompanyDesktopMegaMenu,
};

export default function StepesHeaderWireframe() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRefs = useRef({});
  const timeoutRef = useRef(null);
  const navRef = useRef(null);

  const navItems = [
    { label: "Platform", href: "#", hasMegaMenu: true },
    { label: "Solutions", href: "#", hasMegaMenu: true },
    { label: "Services", href: "#", hasMegaMenu: true },
    { label: "Industries", href: "#", hasMegaMenu: true },
    { label: "Resources", href: "#", hasMegaMenu: true },
    { label: "Company", href: "#", hasMegaMenu: true },
  ];

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
      {/* 外层容器：控制整体宽度和居中 */}
      <div className="mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <a href="/" className="flex items-center gap-2">
              <span
                className="text-4xl font-bold tracking-[-0.04em]"
                style={{ color: brand.primary }}
              >
                Stepes
              </span>
            </a>
          </div>

          {/* Desktop Navigation - 增加一级菜单左右间距 */}
          <nav
            ref={navRef}
            className="hidden max-w-[1440px] lg:flex items-center gap-1 md:gap-3 lg:gap-4 xl:gap-5 relative"
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
                    className={`flex items-center gap-1 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive ? "bg-slate-50" : "hover:bg-slate-50"
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
                      {/* 移除二级菜单框最外面的灰色间距 - 直接显示内容，不加外层包装 */}
                      {getMegaMenuComponent(item.label)}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1 md:gap-2">
            <a
              href="#"
              className="hidden md:flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-slate-50"
              style={{ color: "#1e293b" }}
            >
              Help
            </a>

            <a
              href="#"
              className="hidden md:flex items-center px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-200 hover:bg-slate-50"
              style={{ borderColor: brand.border, color: "#1e293b" }}
            >
              Login
            </a>

            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-slate-50"
              aria-label="Search"
            >
              <Search className="h-5 w-5" style={{ color: "#64748b" }} />
            </button>

            <button
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-slate-50"
              aria-label="Language"
            >
              <Globe className="h-5 w-5" style={{ color: "#64748b" }} />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-slate-50"
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
              <div
                className="border-t my-2"
                style={{ borderColor: brand.border }}
              />
              <a
                href="#"
                className="flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-slate-50"
                style={{ color: "#1e293b" }}
              >
                Help
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-3 py-3 text-sm font-semibold rounded-full border mt-1 transition-all duration-200 hover:bg-slate-50"
                style={{ borderColor: brand.border, color: "#1e293b" }}
              >
                Login
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
