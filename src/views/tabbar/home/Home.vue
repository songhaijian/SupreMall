<template>
    <div class="home-wrap">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control
                class="home-tab-control page-tab-control"
                :tab-control-list="['流行','新款','精选']"
                @tabClick="handleTabClick"
                ref="fixedTabControl"
                v-show="isTabFixed"/>
        <scroll
                class="home-scroll"
                ref="scroll"
                :probe-type="3"
                :enable-pull-up="true"
                @scroll="handleScroll"
                @pullDown="handlePullDown">
            <home-swiper :banner-list="bannerList" @bannerSwiperLoadComplete="bannerSwiperLoadComplete"/>
            <recommend-view :recommend-list="recommendList"/>
            <popular-view/>
            <tab-control
                    class="home-tab-control"
                    :tab-control-list="['流行','新款','精选']"
                    @tabClick="handleTabClick"
                    ref="pageTabControl"/>
            <goods-list :goods-list="goodsObj[currentType].list"/>
        </scroll>
        <back-top @click.native="handleClickBackTop" v-show="showBackTop"/>
    </div>
</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";
    import HomeSwiper from "./childCpns/HomeSwiper";
    import RecommendView from "./childCpns/RecommendView";
    import PopularView from "./childCpns/PopularView";
    import TabControl from "../../../components/content/tabcontrol/TabControl";
    import GoodsList from "../../../components/content/goods/GoodsList";
    import Scroll from "../../../components/common/scroll/Scroll";
    import BackTop from "../../../components/content/backtop/BackTop";
    import {getGoodsData, getHomeMultiData} from "../../../network/home";

    export default {
        name: "Home",
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
            PopularView,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
        },
        data() {
            return {
                bannerList: [],
                recommendList: [],
                goodsObj: {
                    'pop': {
                        id: "4e4d610cdf714d2966000000",
                        page: 0,
                        list: []
                    },
                    'new': {
                        id: "4e4d610cdf714d2966000002",
                        page: 0,
                        list: []
                    },
                    'sell': {
                        id: "4e4d610cdf714d2966000003",
                        page: 0,
                        list: []
                    }
                },
                currentType: 'pop',
                showBackTop: false,
                tabControlOffsetTop: 0,
                isTabFixed: false
            }
        },
        created() {
            this.getBannerAndRecommendData()
            this.getGoodsList('pop')
            this.getGoodsList('new')
            this.getGoodsList('sell')
        },
        mounted() {
            this.$bus.$on("imgLoadComplete", () => {
                this.$refs && this.$refs.scroll && this.$refs.scroll.sRefresh()
            })
        },
        methods: {
            bannerSwiperLoadComplete() {
                this.tabControlOffsetTop = this.$refs.pageTabControl.$el.offsetTop
            },
            handleTabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2:
                        this.currentType = 'sell'
                        break
                }
                this.$refs.pageTabControl.currentIndex = index
                this.$refs.fixedTabControl.currentIndex = index
            },
            handleClickBackTop() {
                this.$refs && this.$refs.scroll && this.$refs.scroll.sScrollTo(0, 0, 500)
            },
            handleScroll(position) {
                this.showBackTop = (-position.y) > 1000
                this.isTabFixed = (-position.y) > this.tabControlOffsetTop
            },
            handlePullDown() {
                this.getGoodsList(this.currentType)
            },
            getBannerAndRecommendData() {
                getHomeMultiData().then(value => {
                    this.bannerList = value.data.banner.list
                    this.recommendList = value.data.recommend.list
                })
            },
            getGoodsList(type) {
                const id = this.goodsObj[type].id
                const skip = this.goodsObj[type].page * 30
                getGoodsData(id, skip).then(value => {
                    this.goodsObj[type].list.push(...value.res.vertical)
                    this.goodsObj[type].page += 1
                    this.$refs && this.$refs.scroll && this.$refs.scroll.sFinishUpLoad()
                })
            }
        }
    }
</script>

<style scoped>
    .home-wrap {
        position: relative;
        height: 100vh;
    }

    .home-nav {
        background-color: var(--color-tint);
        color: #ffffff;
        position: relative;
        z-index: 100;
    }

    .page-tab-control {
        position: relative;
        z-index: 100;
    }

    .home-scroll {
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
</style>
