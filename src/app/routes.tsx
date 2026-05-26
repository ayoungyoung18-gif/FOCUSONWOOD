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
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/success", // 🟢 주소창에 /success 가 잡히면
        element: <SuccessPage />, // 🟢 이 영수증 화면을 보여줍니다!
      },
    ],
  },
]);
