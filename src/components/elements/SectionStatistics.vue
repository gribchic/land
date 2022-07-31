<template>
    <section
        class="page-section"
        :class="classBG">
        <div class="container">
            <div class="row justify-content-center counters custom-counters counters-text-light">
                <div class="col-lg-3 mb-5 mb-lg-0">
                    <div
                        class="counter text-center"
                        data-to="18"
                        data-value="years"
                        :class="classText">
                        <span class="counter-value">{{years}}</span>
                        <div class="counter-description">Years in Business</div>
                    </div>
                </div>
                <div class="col-lg-3 mb-5 mb-lg-0">
                    <div
                        class="counter text-center"
                        data-to="200"
                        data-value="clients"
                        :class="classText">
                        <span class="counter-value">{{clients}}+</span>
                        <div class="counter-description">Clients and Partners</div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div
                        class="counter text-center"
                        data-to="15"
                        data-value="invests"
                        :class="classText">
                        <span class="counter-value">$</span>
                        <span class="counter-value">{{invests}}</span>
                        <div class="counter-description">Billion invested</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {gsap} from "gsap";

    export default {
        name: "SectionStatistics",
        props: {
            variant: {
                type: String,
                default: "primary",
                validator: function (value) {
                    return [
                        "success",
                        "warning",
                        "danger",
                        "info",
                        "primary",
                        "white"
                    ].indexOf(value) !== -1
                }

            }
        },
        data() {
            return {
                years: 0,
                clients: 0,
                invests: 0
            }
        },
        computed: {
            classBG() {
                return `bg-${this.variant}`;
            },
            classText() {
                switch (this.variant) {
                    case "primary":
                        return "text-white";
                        case "white":
                        return "text-primary";
                    default:
                        return ''
                }
            }
        },
        mounted() {
            const counters = gsap.utils.toArray('.counter');

            counters.forEach((counter) => {
                const finish = counter.getAttribute("data-to");
                const property = counter.getAttribute("data-value");

                gsap.to(this.$data, {
                    scrollTrigger: {
                        trigger: counter,
                        start: "10px 95%",
                        //markers: true
                    },
                    duration: 2,
                    [property]: finish,
                    onUpdate: () => {
                        this.$data[property] = gsap.utils.snap(1, this.$data[property]);
                    }
                })
            });
        }
    }
</script>

<style lang="scss" scoped>
    .counter {

        &-value {
            line-height: 1;
            font-size: 3.6em;
        }

        &-description {
            font-size: 1.1em;
        }
    }
</style>
