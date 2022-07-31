<template>
    <div :class="classRow">
        <div class="mb-3" :class="classLeftBlock">
            <font-awesome-icon
                class="mb-4"
                size="3x"
                icon="mobile-alt"
                v-if="isInline"/>
            <label class="font-weight-semibold text-uppercase d-block pb-1">
                Call us Now
            </label>
            <adaptive-phone-number class="call" :css-class="'text-reset'"/>
        </div>
        <div class="mb-3" :class="classRightBlock">
            <font-awesome-icon
                class="mb-4"
                size="3x"
                :icon="['far','envelope']"
                v-if="isInline"/>
            <label class="font-weight-semibold text-uppercase d-block pb-1">
                Send an Email
            </label>
            <a
                :href="`mailto:${$options.eMail}`"
                class="text-decoration-none text-reset call">{{$options.eMail}}</a>
        </div>
    </div>
</template>

<script>
    import AdaptivePhoneNumber from "@/elements/AdaptivePhoneNumber";

    export default {
        name: "CallBlock",
        props: {
            isInline: {
                type: Boolean
            }
        },
        components: {
            AdaptivePhoneNumber
        },
        eMail: process.env.VUE_APP_SUPPORT_MAIL,
        computed: {
            classRow() {
                return this.isInline ? 'row justify-content-center mt-2' : '';
            },
            classLeftBlock() {
                return this.isInline ? 'col-lg-3 text-lg-right text-center pr-lg-5 border-right' : '';
            },
            classRightBlock() {
                return this.isInline ? 'col-lg-3 text-lg-left text-center pl-lg-5' : '';
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "src/scss/tools/index";

    label {
        display: block;
        margin: 0;
        line-height: 1;
        font-size: 0.8em;
        color: white
    }


    .call {
        font-size: 1.5em;
        line-height: 1.3;
        transition: ease opacity 300ms;
        display: block;

        &:hover {
            opacity: .5;
        }
    }

    @include media-breakpoint-down(lg) {
        .border-right{
            border-right: none !important;
        }
    }
</style>
