<template>
    <div class="recommend-wrap">
        <div class="recommend-item" v-for="recommendItem in recommendList">
            <a :href="recommendItem.link">
                <img :src="recommendItem.image">
                <div>{{recommendItem.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props: {
            recommendList: {
                type: Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
    .recommend-wrap {
        display: flex;
        width: 100%;
        padding: 10px 0;
        border-bottom: 10px solid #eeeeee;
    }

    .recommend-item {
        flex: 1;
        text-align: center;
    }

    .recommend-item img {
        width: 75px;
        height: 75px;
    }
</style>