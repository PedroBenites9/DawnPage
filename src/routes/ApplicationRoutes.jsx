import React from 'react';
import { Switch, useLocation } from "react-router-dom";
import Home from 'pages/Home';
import { AnimatePresence } from 'framer-motion';
import MainLayout from 'pages/layout/MainLayout';
import Shop from 'pages/Shop';
import ProductDetail from 'pages/ProductDetail';
import Cart from 'pages/Cart';
import Error from 'pages/Error';

export const ROUTES = {
    home: "/",
    shop: "/shop",
    detail: "/detail/:id",
    cart: "/cart",
    error: "/error",
}

export const calculateRouteParams = (route, params) => {
    let result = route;
    Object.keys(params).forEach(param => {
        result = result.replace(`:${param}`, params[param]);
    });
    return result;
}

const ApplicationRoutes = () => {     
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <MainLayout exact path={ROUTES.home} component={Home} />
                <MainLayout exact path={ROUTES.shop} component={Shop} />
                <MainLayout exact path={ROUTES.detail} component={ProductDetail} />
                <MainLayout exact path={ROUTES.cart} component={Cart} />
                <MainLayout component={Error} />
            </Switch>
        </AnimatePresence>
    )
}
 
export default ApplicationRoutes;