<template>
    <div class="page-section bg-primary">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h2 class="d-block text-white">Get In Touch</h2>
                    <p class="text-intro mb-5 text-white">send us your needs</p>
                </div>
                <div class="col-lg-8 text-center">
                    <form-contact/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FormContact from "@/components/elements/FormContact";

    export default {
        name: "ContactsForm",
        components: {FormContact}
    }
</script>

<style scoped>

</style>
