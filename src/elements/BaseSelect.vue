<template>
    <div class="idv-form-input-wrapper">
        <b-input-group>
            <b-input-group-prepend v-if="$slots.prepend">
                <b-input-group-text>
                    <slot name="prepend"/>
                </b-input-group-text>
            </b-input-group-prepend>
            <v-select
                class="style-chooser"
                :class="[cssClass, {full:!!value}]"
                :value="value"
                @input="$emit('input', $event)"
                @search="$emit('search', $event)"
                :options="options"
                v-bind="$attrs"
                :label="label"
                append-to-body
                :clearable="clearable"
                :calculate-position="withPopper"
                :reduce="getValue"
                :inputId="id"
            />
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
    import {createPopper} from "@popperjs/core";

    export default {
        name: "BaseSelect",
        props: ['vuelidateBehavior', 'label', 'options', 'cssClass', 'value', 'id', 'clearable'],
        data() {
            return {
                placement: 'top'
            }
        },
        methods: {
            getValue($option) {
                return $option?.value;
            },
            withPopper(dropdownList, component, {width}) {
                /**
                 * We need to explicitly define the dropdown width since
                 * it is usually inherited from the parent with CSS.
                 */
                dropdownList.style.width = width;

                /**
                 * Here we position the dropdownList relative to the $refs.toggle Element.
                 *
                 * The 'offset' modifier aligns the dropdown so that the $refs.toggle and
                 * the dropdownList overlap by 1 pixel.
                 *
                 * The 'toggleClass' modifier adds a 'drop-up' class to the Vue Select
                 * wrapper so that we can set some styles for when the dropdown is placed
                 * above.
                 */
                const popper = createPopper(component.$refs.toggle, dropdownList, {
                    placement: this.placement,
                    modifiers: [
                        {
                            name: 'offset', options: {
                                offset: [0, -1]
                            }
                        },
                        {
                            name: 'toggleClass',
                            enabled: true,
                            phase: 'write',
                            fn({state}) {
                                component.$el.classList.toggle('drop-up', state.placement === 'top')
                            },
                        }]
                });

                /**
                 * To prevent memory leaks Popper needs to be destroyed.
                 * If you return function, it will be called just before dropdown is removed from DOM.
                 */
                return () => popper.destroy();
            }
        }
    }
</script>
<style lang="scss">
    @import "src/scss/tools/index";

    .vs__dropdown-menu {
        z-index: $zindex-fixed + 1;
    }

    .input-group {
        .v-select {
            position: relative;
            flex: 1 1 auto;
            width: 1%;
            min-width: 0;

            &.vs--open, &.full {
                ~ .form-control-underline {
                    &:before {
                        width: 100%;
                    }
                }

                ~ .form-control-label {
                    transform: translate3D(0, -12px, 0) scale(.8);
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
        }
    }

</style>
