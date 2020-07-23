<template>
    <div class="scroll-wrapper">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        props: {
            probeType: {
                typ: Number,
                default() {
                    return 0
                }
            },
            enablePullUp: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        data() {
            return {
                bScroll: null
            }
        },
        mounted() {
            this.bScroll = new BScroll(".scroll-wrapper", {
                probeType: this.probeType,
                pullUpLoad: this.enablePullUp,
                click: true
            })
            this.bScroll.on('scroll', (position) => {
                this.$emit('scroll', position)
            })
            this.bScroll.on('pullingUp', () => {
                this.$emit('pullDown')
            })
        },
        methods: {
            sRefresh() {
                this.bScroll && this.bScroll.refresh()
            },
            sFinishUpLoad() {
                this.bScroll && this.bScroll.finishPullUp()
            },
            sScrollTo(x, y, time) {
                this.bScroll && this.bScroll.scrollTo(x, y, time)
            }
        }
    }
</script>

<style scoped>

</style>