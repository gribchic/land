<template>
    <section>
        <section-parallax :model="$options.parallaxModel">
            <h1 class="text-white">
                Contacts
            </h1>
        </section-parallax>
        <contacts-block/>
        <contacts-form/>
        <contacts-map/>
    </section>
</template>

<script>
    import SectionParallax from "@/components/elements/SectionParallax";
    import SectionParallaxModel from "@/components/elements/models/section-parallax.model";
    import ContactsBlock from "@/components/Pages/Contact/ContactsBlock";
    import ContactsForm from "@/components/Pages/Contact/ContactsForm";
    import ContactsMap from "@/components/Pages/Contact/ContactsMap";

    export default {
        name: "ContactsComponent",
        components: {
            ContactsMap,
            ContactsForm,
            ContactsBlock,
            SectionParallax
        },
        parallaxModel: new SectionParallaxModel({
            imageURL: `${require('@/assets/parallax-about.jpg')}`
        })
    }
</script>

<style scoped>

</style>
