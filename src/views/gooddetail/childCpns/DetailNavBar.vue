<template>
    <nav-bar>
        <div slot="left" class="left-wrap" @click="handleBack">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div class="detail-nav" slot="center">
            <div v-for="(item,index) in navData"
                 class="detail-nav-item"
                 :class="{isActive:currentIndex===index}"
                 @click="handleNavItemClick(index)">
                {{item}}
            </div>
        </div>
    </nav-bar>
</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";

    export default {
        name: "DetailNavBar",
        components: {
            NavBar
        },
        data() {
            return {
                navData: [
                    '商品',
                    '参数',
                    '评论',
                    '推荐'
                ],
                currentIndex: 0
            }
        },
        methods: {
            handleBack() {
                this.$router.back()
            },
            handleNavItemClick(index) {
                this.currentIndex = index
            }
        }
    }
</script>

<style scoped>
    .left-wrap {
        height: 44px;
        display: flex;
    }

    .left-wrap img {
        margin-left: 10px;
    }

    .detail-nav {
        display: flex;
    }

    .detail-nav-item {
        flex: 1;
    }

    .isActive {
        color: var(--color-high-text);
    }
</style>