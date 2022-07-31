<template>
    <div>
        <home-slider/>
        <home-services/>
        <section-statistics
            variant="primary"/>
        <home-why-how/>
        <home-contact/>
    </div>
</template>

<script>
    import HomeSlider from "@/components/Pages/Home/HomeSlider";
    import HomeServices from "@/components/Pages/Home/HomeServices";
    import SectionStatistics from "@/components/elements/SectionStatistics";
    import HomeWhyHow from "@/components/Pages/Home/HomeWhyHow";
    import HomeContact from "@/components/Pages/Home/HomeContact";

    export default {
        name: "HomeComponent",
        components: {
            HomeContact,
            HomeWhyHow,
            SectionStatistics,
            HomeServices,
            HomeSlider
        },
    }
</script>

<style lang="scss" scoped>

</style>
