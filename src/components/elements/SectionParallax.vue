<template>
    <section class="section-parallax" ref="parallax">
        <div
            class="parallax"
            :style="{backgroundImage:`url(${model.imageURL})`}">
        </div>
        <div class="container text-center">
            <slot></slot>
        </div>
    </section>
</template>

<script>
    import SectionParallaxModel from "@/components/elements/models/section-parallax.model";
    import {gsap} from "gsap";

    export default {
        name: "SectionParallax",
        props: {
            model: {
                type: SectionParallaxModel
            }
        },
        mounted() {
            const section = this.$refs.parallax;
            const parallax = section.querySelector(".parallax");
            const height = section.clientHeight;

            parallax.style.backgroundPosition = `50% -90%`;

            gsap.to(parallax, {
                backgroundPosition: `50% ${+height / 3}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    //markers: true
                }
            });

        }
    }
</script>

<style lang="scss" scoped>
    @import "src/scss/tools/index";

    .section-parallax {
        padding: 100px 0;
        position: relative;
        overflow: hidden;

        @include media-breakpoint-up(md) {
            padding: 128px 0;
        }
    }

    .parallax {
        background: {
            //size: auto 150%;
            size: cover;
            repeat: no-repeat;
        }
        /*<!--@include media-breakpoint-up(sm) {-->*/
        /*<!--    background-size: auto 190%;-->*/
        /*<!--}-->*/
        /*<!--@include media-breakpoint-up(md) {-->*/
        /*<!--      background-size: auto 180%;-->*/
        /*<!--  }-->*/
        /*<!--@include media-breakpoint-up(xl) {-->*/
        /*<!--    background-size: cover;-->*/
        /*<!--}-->*/

        height: 150%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>
