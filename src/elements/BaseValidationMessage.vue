<template>
    <div
        class="error-message control-error" :class="cssClass"
        v-if="field.$error && !condition"
    >
        {{ message }}
    </div>
</template>

<script>
    export default {
        name: "BaseValidationMessage",
        props: ["cssClass", "field", "validator", "message"],
        computed: {
            condition() {
                if (typeof this.validator === 'string') {
                    return this.field[this.validator];
                } else {
                    return this.validator;
                }
            }
        }
    }
</script>
