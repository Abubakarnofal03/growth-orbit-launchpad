import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import StickyBottomBar from "./StickyBottomBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <StickyBottomBar />
    </div>
  );
};

export default Layout;