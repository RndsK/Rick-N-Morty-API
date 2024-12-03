import {
  Router,
  RouterProvider,
  Route,
  RootRoute,
  Outlet,
} from '@tanstack/react-router';
import Home from '../pages/Home';
import Favorites from '../pages/Favourites';
import Header from '../components/Header/header';

const rootRoute = new RootRoute({
  component: () => (
    <div>
      <Header /> 
      <Outlet />
    </div>
  ),
});

// Define child routes
const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const favoritesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/favorites',
  component: Favorites,
});

// Create the router instance
const router = new Router({
  routeTree: rootRoute.addChildren([homeRoute, favoritesRoute]),
});

// AppRouter Component
export default function AppRouter() {
  return <RouterProvider router={router} />;
}