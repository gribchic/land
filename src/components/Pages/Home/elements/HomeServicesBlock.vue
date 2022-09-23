<template>
    <div class="row no-gutters">
        <section-parallax
            class="col-lg-6"
            :class="parallaxOrderClass"
            :model="parallaxModel"/>
        <section
            class="text-block col-lg-6 row mx-0"
            :class="[direction, sectionOrderClass]"
            ref="container">
            <div class="col-half-section">
                <h2>{{model.title}}</h2>
                <p class="text-intro text-dark">{{model.description}}</p>
                <p>
                    {{model.message}}
                </p>
                <b-button
                    :to="{name: model.routerName}"
                    variant="outline-primary">
                    Reade More
                </b-button>
            </div>
        </section>
    </div>
</template>

<script>
    //TODO: find other parallax
    import HomeServicesBlockModel from "@/components/Pages/Home/models/home-services-block.model";
    import SectionParallax from "@/components/elements/SectionParallax";
    import SectionParallaxModel from "@/components/elements/models/section-parallax.model";
    import {TimelineMax, Back} from "gsap";

    export default {
        name: "HomeServicesBlock",
        props: {
            direction: {
                type: String,
                validator: (value) => {
                    return ['right', 'left'].indexOf(value) !== -1
                }
            },
            model: {
                type: HomeServicesBlockModel
            }
        },
        components: {
            SectionParallax
        },
        computed: {
            isRight() {
                return this.direction === 'right';
            },
            parallaxOrderClass() {
                return this.isRight
                    ? 'order-1 order-lg-2'
                    : ''
            },
            sectionOrderClass() {
                return this.isRight
                    ? 'order-2 order-lg-1'
                    : ''
            }
        },
        created() {
            this.parallaxModel = new SectionParallaxModel(this.model);
        },
        mounted() {
           this.setAnimation();
        },
        methods: {
            setAnimation(){
                const container = this.$refs.container;
                const children = container.querySelector('div').children;
                const tl = new TimelineMax({
                    scrollTrigger: {
                        trigger: container,
                        start: "50px 90%",
                        //markers: true,
                    }
                });

                children.forEach((el) => {
                    tl.from(el, 0.5, {
                        autoAlpha: 0,
                        x: this.isRight ? -300 : 300,
                        ease: Back.easeOut
                    }, '-=0.2');
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../scss/tools/index";

    .text-block {
        overflow: hidden;
        $py: 50px;
        padding: {
            top: $py;
            bottom: $py
        };
        background-color: $t-home-services-text-block-bg-color;

        &.right {
            justify-content: flex-end;
            text-align: right;
        }
    }

    .parallax {
        min-height: 275px;
        background: {
            size: cover !important;
        };

        > div {
            position: absolute;
            width: 120%;
            height: 120%;
        }
    }
</style>
