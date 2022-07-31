<template>
    <base-input
        type="tel"
        :class="[{full:!!value}, cssClass]"
        :value="value"
        @input="input"
        @cut="clearNumber"
        v-bind="$attrs"
        autocomplete="phonenumber">
        <template
            #prepend
            v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </template>
        <template
            #validationMessage
            v-if="$slots.validationMessage">
            <slot name="validationMessage"></slot>
        </template>
        <template #label>
            <slot name="label"></slot>
        </template>
        <template
            #append
            v-if="$slots.append">
            <slot name="append"></slot>
        </template>
        <template
            #description
            v-if="$slots.description">
            <slot name="description"></slot>
        </template>
    </base-input>
</template>
<!--
        TODO Fix paste later
        @paste="transformPastedNumber"
-->
<script>
    import BaseInput from "@/elements/BaseInput";

    export default {
        name: "MaskedPhoneNumber",
        components: {BaseInput},
        inheritAttrs: false,
        props: {
            value: {
                type: String,
                default: null
            },
            cssClass: {
                type: Object
            }
        },
        mounted() {
            const input = this.$el.querySelector('input');
            this.$inputmask({
                mask: "(999)-999-9999",
                clearMaskOnLostFocus: true,
                autoUnmask: true,
                showMaskOnHover: false,
                //TODO Temporary depricate paste on control
                onBeforePaste: () => false
            }).mask(input);
        },
        methods: {
            clearNumber() {
                if (
                    document.getSelection().toString().replace(/\D/g, "") ===
                    this.$el.value
                ) {
                    this.$emit("input", "");
                }
            },
            input($event) {
                this.$emit('input', $event.replace(/[^\d]/g, '') || null)
            }
        }
    };
</script>
