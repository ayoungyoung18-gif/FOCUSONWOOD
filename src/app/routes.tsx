import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
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
    ],
  },
]);
