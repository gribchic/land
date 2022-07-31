<template>
    <div>
        <section-parallax :model="$options.parallaxModel">
            <h1 class="text-white">
                Frequently Asked Questions
            </h1>
        </section-parallax>
        <section-questions/>
        <section-talk-business/>
    </div>
</template>

<script>
    import SectionParallax from "@/components/elements/SectionParallax";
    import SectionParallaxModel from "@/components/elements/models/section-parallax.model";
    import SectionQuestions from "@/components/Pages/FAQ/SectionQuestions";
    import SectionTalkBusiness from "@/components/elements/SectionTalkBusiness";

    export default {
        name: "FaqComponent",
        components: {SectionTalkBusiness, SectionQuestions, SectionParallax},
        parallaxModel: new SectionParallaxModel({
            imageURL: `${require('@/assets/parallax-about.jpg')}`
        })
    }
</script>

<style scoped>

</style>
