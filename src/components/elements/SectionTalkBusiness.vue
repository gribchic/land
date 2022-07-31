<template>
    <section>
        <section-parallax :model="$options.parallaxModel">
            <header class="text-center">
                <h2 class="text-white">Let's talk Business</h2>
                <p class="text-intro mb-5 text-light">Talk to a Specialist</p>
            </header>
            <call-block class="text-light" :is-inline="true"/>
        </section-parallax>
    </section>
</template>

<script>
    import SectionParallax from "@/components/elements/SectionParallax";
    import SectionParallaxModel from "@/components/elements/models/section-parallax.model";
    import CallBlock from "@/components/elements/CallBlock";

    export default {
        name: "SectionTalkBusiness",
        components: {CallBlock, SectionParallax},
        parallaxModel: new SectionParallaxModel({
            imageURL: `${require('@/assets/parallax-talk-buisiness.jpg')}`
        }),
        eMail: process.env.VUE_APP_SUPPORT_MAIL,
    }

</script>

<style lang="scss" scoped>
    @import "src/scss/tools/index";

    ::v-deep {
        @include media-breakpoint-up(lg) {
            .section-parallax {
                padding: 25vh 0;
            }
        }
    }
</style>
