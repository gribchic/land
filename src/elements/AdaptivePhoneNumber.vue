<template>
    <span>
        <span class="d-none d-lg-inline" :class="cssClass">{{number}}</span>
        <a :href="link" class="d-lg-none" :class="cssClass">{{number}}</a>
    </span>
</template>

<script>
    import phoneNumber from "../filters/phoneNumber";

    export default {
        name: "AdaptivePhoneNumber",
        filters: {
            phoneNumber
        },
        props: {
            phoneNumber: {
                type: [String, Number],
                default: process.env.VUE_APP_SUPPORT_TEL
            },
            ext: {
                type: [String, Number]
            },
            cssClass: {
                type: String
            },
            textNumber: {
                type: String
            }
        },
        computed: {
            cleanPhone() {
                return this.phoneNumber?.replace(/\D/g, '') || "";
            },
            link() {
                return `tel:${this.cleanPhone}`
            },
            number() {
                const number = this.$options.filters.phoneNumber(this.cleanPhone, this.ext);

                return this.textNumber
                    ? `${this.cleanPhone.substr(0, 3)} ${this.textNumber} (${this.cleanPhone.substring(3, this.cleanPhone.lengthAdjust)})`
                    : number;
            }
        }
    }
</script>
