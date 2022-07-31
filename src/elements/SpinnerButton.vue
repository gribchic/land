<template>
    <b-button
        :disabled="disabled || isClicked"
        :variant="variant"
        :size="size"
        :data-style="dataStyle"
        :data-loaded="isClicked"
    >
        <span class="spinner-wrapper">
            <b-spinner
                v-show="isClicked"/>
        </span>
        <span class="button-text">
            <slot></slot>
        </span>
    </b-button>
</template>

<style lang="scss" scoped>
    [data-style="zoom-in"] {
        position: relative;
        overflow: hidden;

        > .spinner-wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        > .button-text {
            display: inline-block;
            opacity: 1;
            transform: scale(1);


            transition: {
                property: opacity, transform;
                duration: 0.3s;
                timing-function: ease;
                delay: 0s;
            }
        }

        &[data-loaded="true"] {
            > .button-text {
                opacity: 0;
                transform: scale(2.2);
            }
        }
    }
</style>

<script>
    export default {
        name: "SpinnerButton",
        props: {
            isClicked: {
                type: Boolean,
                default: false
            },
            variant: {
                type: String,
                default: "primary"
            },
            size: {
                type: String
            },
            dataStyle: {
                type: String,
                default: "zoom-in",
                validator: function (value) {
                    return ['zoom-in'].indexOf(value) !== -1
                }
            },
            disabled: {
                type: Boolean,
                default: false
            }
        }
    };
</script>
