import { Link, useLocation } from "react-router";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { SearchModal } from "./SearchModal";
import { LoginModal } from "./LoginModal";

export function Header() {
  const [isVisible, setIsVisible] = useState(false); // 마우스 이동 시 헤더 노출 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleMouseMove = () => {
      // 마우스를 한 번이라도 움직이면 헤더 노출 후 유지
      setIsVisible(true);
      window.removeEventListener("mousemove", handleMouseMove);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navItems = [
    {
      label: "브랜드",
      subItems: [
        { path: "/brand/story", label: "브랜드 철학" },
        { path: "/brand/news", label: "브랜드 이야기" },
      ],
    },
    { path: "/projects", label: "프로젝트" },
    {
      label: "소재와 제작",
      subItems: [
        { path: "/wood-types", label: "원목 소재" },
        { path: "/manufacturing", label: "제작 과정" },
        { path: "/furniture-care", label: "관리 방법" },
        { path: "/shipping", label: "배송 방법" },
      ],
    },
    { path: "/shop", label: "소품" },
    { path: "/custom-order", label: "맞춤가구 제작 문의" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 transform ${
          isVisible
            ? "translate-y-0 bg-[#F1EDE8]/95 backdrop-blur-md shadow-sm border-b border-[#1A2F28]/10"
            : "-translate-y-full bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl tracking-tight text-[#1A2F28] font-medium uppercase">FOCUS ON WOOD</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) =>
                "subItems" in item ? (
                  <div key={item.label} className="relative group">
                    <button className="px-2 py-1 text-[#1A2F28] hover:text-[#D4A373] transition-colors cursor-pointer font-medium">
                      {item.label}
                    </button>
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-[#F1EDE8] shadow-xl rounded-xl py-2 min-w-[180px] border border-[#1A2F28]/5">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-2 hover:bg-[#1A2F28]/5 transition-colors cursor-pointer ${
                              isActive(subItem.path) ? "text-[#D4A373]" : "text-[#1A2F28]"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-2 py-1 transition-colors cursor-pointer font-medium ${
                      isActive(item.path) ? "text-[#D4A373]" : "text-[#1A2F28] hover:text-[#D4A373]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4 text-[#1A2F28]">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-[#1A2F28]/5 rounded-full transition-colors cursor-pointer"
              >
                <Search size={20} />
              </button>

              {isAuthenticated ? (
                <div className="relative group">
                  <button className="p-2 hover:bg-[#1A2F28]/5 rounded-full transition-colors cursor-pointer">
                    <User size={20} />
                  </button>
                  <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-[#F1EDE8] shadow-xl rounded-xl py-2 min-w-[150px] border border-[#1A2F28]/5">
                      <div className="px-4 py-2 border-b border-[#1A2F28]/5">
                        <p className="text-sm font-medium">{user?.name}님</p>
                      </div>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 hover:bg-[#1A2F28]/5 text-sm cursor-pointer"
                      >
                        로그아웃
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="p-2 hover:bg-[#1A2F28]/5 rounded-full transition-colors cursor-pointer"
                >
                  <User size={20} />
                </button>
              )}

              <Link
                to="/cart"
                className="relative p-2 hover:bg-[#1A2F28]/5 rounded-full transition-colors cursor-pointer"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#D4A373] text-[#1A2F28] text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>

              <button className="lg:hidden p-2 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
