<template>
    <div>
        <swiper>
            <swiper-item v-for="bannerItem in bannerList">
                <a :href="bannerItem.link">
                    <img :src="bannerItem.image" @load="bannerSwiperLoadComplete"/>
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import {Swiper, SwiperItem} from "../../../../components/common/swiper/index";

    export default {
        name: "HomeSwiper",
        props: {
            bannerList: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                isSendComplete: false
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        methods: {
            bannerSwiperLoadComplete() {
                if (!this.isSendComplete) {
                    this.isSendComplete = true
                    this.$emit('bannerSwiperLoadComplete')
                }
            }
        }
    }
</script>

<style scoped>

</style>