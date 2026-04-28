import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { CartProvider } from "./context/CartContext";
// 🟢 경로를 기존에 사용하시던 AuthContext로 수정했습니다.
import { AuthProvider } from "./context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

function ClickRipple() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}>
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 100, height: 100, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: ripple.x,
              top: ripple.y,
              transform: "translate(-50%, -50%)",
              border: "3px solid #B38B5D",
              borderRadius: "50%",
              backgroundColor: "rgba(179, 139, 93, 0.3)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ClickRipple />
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
