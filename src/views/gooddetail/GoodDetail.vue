<template>
    <detail-nav-bar/>
</template>

<script>
    import DetailNavBar from "./childCpns/DetailNavBar";

    export default {
        name: "GoodDetail",
        data() {
            return {
                id: null
            }
        },
        created() {
            this.id = this.$route.query.id
        },
        components: {
            DetailNavBar
        }
    }
</script>

<style scoped>

</style>