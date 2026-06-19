import { createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from 'react'; // 🚨 필수 임포트 추가
import { supabase } from '../supabaseClient';   // 🚨 본인의 supabaseClient 경로 확인
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { BrandStory } from "./pages/BrandStory";
import { BrandNews } from "./pages/BrandNews";
import { Projects } from "./pages/Projects";
import { WoodTypes } from "./pages/WoodTypes";
import { Manufacturing } from "./pages/Manufacturing";
import { FurnitureCare } from "./pages/FurnitureCare";
import { Shipping } from "./pages/Shipping";
import { Shop } from "./pages/Shop";
import { ProductDetail } from "./pages/ProductDetail";
import { CustomOrder } from "./pages/CustomOrder";
import { Cart } from "./pages/Cart";
import { Root } from "./pages/Root";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import TermsPage from "./pages/TermsPage"; 
import PrivacyPage from "./pages/PrivacyPage";
import { AdminPage } from "./pages/AdminPage"; 
import { MyPage } from "./pages/MyPage"; 
import { Navigate } from 'react-router-dom';

// 🔒 [철벽 보안 가드] 경로 에러 방지를 위해 라우터 파일 내부로 강제 이식
const ALLOWED_ADMINS = ['cju****@naver.com', '내구글지메일@gmail.com']; // 🚨 내 메일로 고치기

function AdminGuard({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<'loading' | 'authorized' | 'unauthorized'>('loading');

  useEffect(() => {
    const verifyIdentity = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user || !user.email) {
        setStatus('unauthorized');
        return;
      }
      if (ALLOWED_ADMINS.includes(user.email)) {
        setStatus('authorized');
      } else {
        setStatus('unauthorized');
      }
    };
    verifyIdentity();
  }, []);

  if (status === 'loading') {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#1A2F28', color: '#F1EDE8' }}>권한 보안 검증 중...</div>;
  }
  return status === 'authorized' ? <>{children}</> : <Navigate to="/" replace />;
}

// 🌐 실제 서비스 라우터 인프라 매칭
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "brand/about", Component: About },
      { path: "brand/story", Component: BrandStory },
      { path: "brand/news", Component: BrandNews },
      { path: "projects", Component: Projects },
      { path: "wood-types", Component: WoodTypes },
      { path: "manufacturing", Component: Manufacturing },
      { path: "furniture-care", Component: FurnitureCare },
      { path: "shipping", Component: Shipping },
      { path: "shop", Component: Shop },
      { path: "shop/:id", Component: ProductDetail },
      { path: "custom-order", Component: CustomOrder },
      { path: "cart", Component: Cart },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/success", element: <SuccessPage /> },
      { path: "/terms", element: <TermsPage /> },
      { path: "/privacy", element: <PrivacyPage /> },
      {
        path: "/focus-internal-admin-vault", 
        element: (
          <AdminGuard>
            <AdminPage />
          </AdminGuard>
        ),
      },
      {
        path: "/mypage", 
        element: <MyPage />, 
      },
    ],
  },
]);
