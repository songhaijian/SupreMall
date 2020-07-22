<template>
    <div class="goods-item">
        <img class="goods-img" :src="goodsItem.img" alt="">
        <div>
            <p class="goods-name">{{goodsItem.user.name}}</p>
            <div class="goods-info">
                <div class="goods-rank">{{goodsItem.rank}}</div>
                <img src="~assets/img/common/collect.svg" alt="">
                <div class="goods-collect">{{goodsItem.favs}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsItem",
        props: {
            goodsItem: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .goods-item {
        width: 48%;
    }

    .goods-img {
        width: 100%;
        border-radius: 5px;
    }

    .goods-name {
        text-align: center;
    }

    .goods-info {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px 0;
    }

    .goods-rank {
        color: var(--color-high-text);
    }

    .goods-info img {
        margin-left: 10px;
        width: 20px;
        height: 20px;
    }
</style>