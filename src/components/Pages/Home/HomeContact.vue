<template>
    <section>
        <div class="row no-gutters">
            <section class="col-lg-6 page-section bg-primary d-flex justify-content-end text-light">
                <div class="col-half-section">
                    <h2 class="text-white">We call you back</h2>
                    <p class="text-intro mb-4">Request a Call</p>
                    <form-contact/>
                </div>
            </section>
            <section class="col-lg-6 page-section bg-dark section-contact text-light">
                <div class="col-half-section left">
                    <h2 class="text-white">Let's Talk Business</h2>
                    <p class="text-intro mb-4">Talk to a Specialist</p>
                    <!-- TODO: add text-->
                    <p class="custom-text-color-2 custom-padding-right-1 mb-4 pr-md-160">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi nulla impedit
                        delectus earum, aut aperiam, quam aliquid provident dignissimos nesc? Doloremque, quae,
                        officiis!
                    </p>
                    <call-block/>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
    import FormContact from "@/components/elements/FormContact";
    import CallBlock from "@/components/elements/CallBlock";

    export default {
        name: "HomeContact",
        components: {
            CallBlock,
            FormContact
        },
        eMail: process.env.VUE_APP_SUPPORT_MAIL,
    }
</script>

<style lang="scss" scoped>
    @import "src/scss/tools/index";

    .section-contact {
      overflow: hidden;
        &:before {
            display: block;
            position: absolute;
            background: {
                image: url(~@/assets/lets-talk-bg.png);
                size: cover;
            };
            width: 100%;
            height: 100%;
            top: 50%;
            transform: translate(-50%, -50%);
            @include media-breakpoint-up(md) {
                content: '';
                left: 75%;
            }
            @include media-breakpoint-up(lg) {
                left: 50%;
            }
        }

        .pr-md-160 {
            @include media-breakpoint-up(md) {
                padding-right: 160px;
            }
        }
    }
</style>
