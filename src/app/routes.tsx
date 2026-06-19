import { createBrowserRouter } from "react-router-dom";
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
// 🔒 철벽 보안 가드 임포트
import { AdminGuard } from "./components/AdminGuard"; 

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
        path: "/focus-internal-admin-vault", // 🔒 주소를 복잡하게 꼬아 해커의 접근 유추를 원천 차단
        element: (
          <AdminGuard>
            <AdminPage />
          </AdminGuard>
        ),
      },
    ],
  },
]);