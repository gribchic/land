<template>
    <div>
        <section-parallax :model="$options.parallaxModel">
            <h1 class="text-white">
                Company
            </h1>
        </section-parallax>
        <about-intro/>
        <section-statistics variant="white"/>
        <about-mission/>
        <about-history/>
        <section-talk-business/>
    </div>
</template>

<script>
    import SectionParallax from "@/components/elements/SectionParallax";
    import SectionStatistics from "@/components/elements/SectionStatistics";
    import AboutIntro from "@/components/Pages/About/AboutIntro";
    import AboutMission from "@/components/Pages/About/AboutMission";
    import SectionParallaxModel from "@/components/elements/models/section-parallax.model";
    import AboutHistory from "@/components/Pages/About/AboutHistory";
    import SectionTalkBusiness from "@/components/elements/SectionTalkBusiness";

    export default {
        name: "AboutComponent",
        components: {
            SectionTalkBusiness,
            AboutHistory,
            AboutMission,
            AboutIntro,
            SectionStatistics,
            SectionParallax
        },
        parallaxModel: new SectionParallaxModel({
            imageURL: `${require('@/assets/parallax-about.jpg')}`
        })
    }
</script>
