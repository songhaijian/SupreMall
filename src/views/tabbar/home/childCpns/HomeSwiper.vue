<template>
    <div>
        <swiper>
            <swiper-item v-for="bannerItem in bannerList">
                <a :href="bannerItem.link">
                    <img :src="bannerItem.image"/>
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
        components: {
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>

</style>