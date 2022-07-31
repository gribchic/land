import Vue from "vue";
import VueRouter from "vue-router";
import PageHome from "../views/PageHome.vue";
import RouterConstants from "@/constants/RouterConstants";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: RouterConstants.HOME,
        component: PageHome
    },
    {
        path: "/about",
        name: RouterConstants.ABOUT,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/PageAbout.vue")
    },
    {
        path: "/contacts",
        name: RouterConstants.CONTACTS,
        component: () =>
            import("../views/PageContacts.vue")
    },
    {
        path: "/partners",
        name: RouterConstants.PARTNERS,
        component: () =>
            import("../views/PagePartners.vue")
    },
    {
        path: "/terms-of-use",
        name: RouterConstants.TERMS_OF_USE,
        component: () =>
            import("../views/PageTerms.vue")
    },
    {
        path: "/faq",
        name: RouterConstants.FAQ,
        component: () =>
            import("../views/PageFAQ.vue")
    },
    {
        path: "/services",
        // name: RouterConstants.TERMS_OF_USE,
        component: () =>
            import("../views/PageServices.vue"),
        children: [
            {
                path: "cbsv",
                name: RouterConstants.SERVICE_CBSV,
                component: () =>
                    import("../components/Pages/Services/ServiceCBSV.vue")
            },
            {
                path: "ecbsv",
                name: RouterConstants.SERVICE_ECBSV,
                component: () =>
                    import("../components/Pages/Services/ServiceECBSV.vue")
            },
            {
                path: "e-verify",
                name: RouterConstants.SERVICE_EVERIFY,
                component: () =>
                    import("../components/Pages/Services/ServiceEVerify.vue")
            },
            {
                path: "ssnt",
                name: RouterConstants.SERVICE_SSNT,
                component: () =>
                    import("../components/Pages/Services/ServiceSSNT.vue")
            },
            {
                path: "itrv",
                name: RouterConstants.SERVICE_ITRV,
                component: () =>
                    import("../components/Pages/Services/ServiceITRV.vue")
            },
        ]
    },
    {
        path: '*',
        component: () => import('../views/NotFound.vue')
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    // scrollBehavior (to, from, savedPosition) {
    //     // if(savedPosition) {
    //     //     return savedPosition;
    //     // }
    //     return { x: 0, y: 0 }
    // }
});
import gsap from "gsap";
router.beforeEach((to, from, next) => {

    setTimeout(() => {
        gsap.to(window, {duration: 0.5, scrollTo: 0});
    }, 0);
    next();
});

export default router;
