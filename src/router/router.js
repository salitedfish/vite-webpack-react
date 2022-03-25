import React, { lazy } from 'react';
import { Redirect } from "react-router-dom";
const routes = [
    {
        path: '/',
        exact: true,
        render: () => {
            return React.createElement(Redirect, { to: "/home" });
        }
    },
    {
        path: '/home',
        component: lazy(() => { return import("@/view/home/App_chain33Test"); }),
        routes: [
            {
                path: '/home',
                exact: true,
                render: () => {
                    return React.createElement(Redirect, { to: "/home/homeA" });
                }
            },
            {
                path: '/home/homeA',
                exact: true,
                component: lazy(() => { return import("@/view/home/homeA"); })
            },
            {
                path: '/home/homeB',
                exact: true,
                component: lazy(() => { return import("@/view/home/homeB"); }),
            },
        ]
    },
    {
        path: '/login',
        exact: true,
        component: lazy(() => { return import("@/view/Login"); })
    },
];
export default routes;
//# sourceMappingURL=router.js.map