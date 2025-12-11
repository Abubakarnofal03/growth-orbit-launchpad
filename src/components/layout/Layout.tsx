import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { useLenis } from "@/hooks/use-lenis";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;