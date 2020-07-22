<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/home" active-color="deeppink">
                <img src="~assets/img/tabbar/home.svg" alt="" slot="tab-item-icon">
                <img src="~assets/img/tabbar/home_active.svg" alt="" slot="tab-item-icon-active">
                <div slot="tab-item-txt">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/category" active-color="deeppink">
                <img src="~assets/img/tabbar/category.svg" alt="" slot="tab-item-icon">
                <img src="~assets/img/tabbar/category_active.svg" alt="" slot="tab-item-icon-active">
                <div slot="tab-item-txt">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/cart" active-color="deeppink">
                <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="tab-item-icon">
                <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="tab-item-icon-active">
                <div slot="tab-item-txt">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/profile" active-color="deeppink">
                <img src="~assets/img/tabbar/profile.svg" alt="" slot="tab-item-icon">
                <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="tab-item-icon-active">
                <div slot="tab-item-txt">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "../../common/tabbar/TabBar";
    import TabBarItem from "../../common/tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>
