<template>
    <div class="tab-control-wrap">
        <div class="tab-control-item"
             v-for="(item,index) in tabControlList"
             @click="handleItemClick(index)">
            <span :class="{active:currentIndex===index}">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
            tabControlList: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            handleItemClick(index) {
                this.currentIndex = index
                this.$emit('tabClick', index)
            }
        }
    }
</script>

<style scoped>
    .tab-control-wrap {
        background-color: #ffffff;
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
    }

    .tab-control-item {
        flex: 1;
    }

    .active {
        color: var(--color-high-text);
        padding: 5px;
        border-bottom: 3px solid red;
    }
</style>