<template>
    <div>
        <section-parallax :model="$options.parallaxModel">
            <h1 class="text-white">
                Partners And Associations
            </h1>
        </section-parallax>
        <section-partners/>
        <section-talk-business/>
    </div>
</template>

<script>
    import SectionParallax from "@/components/elements/SectionParallax";
    import SectionParallaxModel from "@/components/elements/models/section-parallax.model";
    import SectionPartners from "@/components/Pages/Partners/SectionPartners";
    import SectionTalkBusiness from "@/components/elements/SectionTalkBusiness";

    export default {
        name: "PartnersComponent",
        components: {
            SectionTalkBusiness,
            SectionPartners,
            SectionParallax
        },
        parallaxModel: new SectionParallaxModel({
            imageURL: `${require('@/assets/parallax-partners.jpg')}`
        })
    }
</script>
