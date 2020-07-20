import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/tabbar/home/Home")
const Category = () => import("../views/tabbar/category/Category")
const Cart = () => import("../views/tabbar/cart/Cart")
const Profile = () => import("../views/tabbar/profile/Profile")

Vue.use(VueRouter)
const routes = [
    {
      path: "",
      redirect:"/home"
    },
    {
        path: "/home",
        components: Home
    }, {
        path: "/category",
        components: Category
    }, {
        path: "/cart",
        components: Cart
    }, {
        path: "/profile",
        components: Profile
    }
]
export default new VueRouter({
    routes,
    mode: 'history'
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}