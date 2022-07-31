<template>
    <div class="idv-form-input-wrapper">
        <b-input-group>
            <b-input-group-prepend v-if="$slots.prepend">
                <b-input-group-text>
                    <slot name="prepend"/>
                </b-input-group-text>
            </b-input-group-prepend>
            <b-form-textarea
                :class="[{full:!!value}, cssClass]"
                :value="value"
                @input="$emit('input', $event)"
                rows="3"
                v-bind="$attrs"/>
            <b-input-group-append v-if="$slots.append">
                <b-input-group-text>
                    <slot name="append"></slot>
                </b-input-group-text>
            </b-input-group-append>
            <div class="form-control-underline"></div>
            <slot name="label"></slot>
        </b-input-group>
        <b-form-text v-if="$slots.description">
            <slot name="description"></slot>
        </b-form-text>
        <b-form-text v-if="$slots.validationMessage">
            <slot name="validationMessage"></slot>
        </b-form-text>
    </div>
</template>

<script>
    export default {
        name: "BaseTextarea",
        inheritAttrs: false,
        props: ["value", "cssClass"]
    }
</script>

<style lang="scss" scoped>
    @import "src/scss/theme/index";

    .input-group {
        $mt:5px;
        .form-control {
            margin-top: $mt;
            padding-left: 0;
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            outline: none;
            //padding: 10px 10px 10px 30px;
            //box-shadow: none;
            color: #FFF;

            &, &:focus {
                background: transparent;
            }

            &:focus, &.full {
                ~ .form-control-underline {
                    &:before {
                        width: 100%;
                    }
                }

                ~ .form-control-label {
                    transform: translate3D(0, -12px, 0)  scale(.8);
                }
            }

            &.error {
                ~ .form-control-underline {
                    &:before {
                        background-color: $t-error-color;
                        width: 100%;
                    }
                }
            }
        }

        .form-control-underline {
            position: absolute;
            left: 0;
            width: 100%;
            bottom: 0;
            height: 1px;
            z-index: 4;

            &:before {
                transition: width $t-animation-input-settings, background-color $t-animation-input-settings;
                content: "";
                height: 2px;
                background-color: rgba(255, 255, 255, .5);
                position: relative;
                display: block;
                width: 0;
            }
        }

        .input-group-text {
            border: {
                width: 0;
                bottom-width: 1px;
                color: rgba(255, 255, 255, 0.2);
            }
        }

        .form-control-label {
            position: absolute;
            transform: translate3D(20px, 3px, 0) scale(1);
            transition: transform $t-animation-input-settings, scale $t-animation-input-settings;
            transform-origin: top left;
        }

        .input-group-text {
            padding-left: 0;
            width: 26px;
            > svg {
                align-self: flex-start;
                margin-top: $mt;
            }
        }
    }

    .form-text {
        position: absolute;
        margin-top: -3px;
    }

    ::v-deep {
        .error-message {
            color: $t-error-color;
        }
    }
</style>
