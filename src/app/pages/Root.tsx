import { useEffect } from "react"; // 🟢 추가
import { Outlet, useLocation } from "react-router"; // 🟢 useLocation 추가
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { KakaoChat } from "../components/KakaoChat";

export function Root() {
  const { pathname } = useLocation(); // 🟢 현재 경로 정보를 가져옵니다.

  useEffect(() => {
    // 🟢 경로(페이지)가 바뀔 때마다 브라우저 스크롤 위치를 맨 위(0, 0)로 이동
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <KakaoChat />
    </div>
  );
}
