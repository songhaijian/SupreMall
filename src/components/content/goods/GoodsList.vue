<template>
    <div class="goods-list">
        <goods-item v-for="item in goodsList" :goods-item="item"/>
    </div>
</template>

<script>
    import GoodsItem from "./GoodsItem";

    export default {
        name: "GoodsList",
        props: {
            goodsList: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            GoodsItem
        }
    }
</script>

<style scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>