import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/components/MainPage";
import ProductPage from "@/components/ProductPage";
import ContactsPage from "@/components/ContactsPage";

const routes = [ // path별 component를 추가한다.
    { path : "/", name : "Home", component : MainPage },
    { path : "/main/web", name : "Web", component : MainPage },
    { path : "/main/product", name : "Product", component : ProductPage },
    { path : "/contacts", name : "Contacts", component : ContactsPage },
    { path : "/:catchAll(.*)", name : "Home", component : MainPage }, // :catchAll(.*)은 선언한 path 이외의 path는 전부 MainPage로 보내겠다고 선언 (주로 Error Page로 선언)
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
});

export default router;