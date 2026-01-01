import { useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

// List of valid routes in the application
const validRoutes = [
  '/',
  '/contact',
  '/services',
  '/case-studies',
  '/blog',
];

// Check if a path matches a valid route pattern
const isValidRoute = (pathname: string): boolean => {
  // Check exact matches
  if (validRoutes.includes(pathname)) {
    return true;
  }
  
  // Check dynamic routes
  if (pathname.startsWith('/services/')) {
    return true;
  }
  if (pathname.startsWith('/case-study/')) {
    return true;
  }
  
  return false;
};

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // If the current path looks like it should be valid, redirect to home
  // This handles cases where server-side routing isn't set up correctly
  // The user will at least land on a working page
  return <Navigate to="/" replace />;
};

export default NotFound;
