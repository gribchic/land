<template>
    <section>
        <section-parallax :model="$options.parallaxModel">
            <h1 class="text-white text-center">
                {{title}}
            </h1>
        </section-parallax>
        <section class="page-section container">
            <div class="row">
                <div class="col-md-8 col-lg-9">
                    <transition
                        :name="transitionName"
                        mode="out-in"
                        @beforeLeave="beforeLeave"
                        @enter="enter"
                        @afterEnter="afterEnter">
                        <router-view/>
                    </transition>
                </div>
                <aside class="col-md-4 col-lg-3">
                    <div class="services-nav">
                        <div class="h3">
                            Our Services
                        </div>
                        <b-nav vertical>
                            <b-nav-item
                                v-for="(item,index) in $options.ServicesList"
                                :key="index"
                                :to="{name:item.routerName}">
                                {{item.label}}
                            </b-nav-item>
                        </b-nav>
                    </div>
                </aside>
            </div>
        </section>
        <section-talk-business/>
    </section>
</template>

<script>
    import SectionParallax from "@/components/elements/SectionParallax";
    import SectionParallaxModel from "@/components/elements/models/section-parallax.model";
    import ROUTER_CONSTANTS from "@/constants/RouterConstants";
    import SectionTalkBusiness from "@/components/elements/SectionTalkBusiness";
    import SERVICES_LIST from "@/constants/ServicesList";

    export default {
        name: "PageServices",
        components: {SectionTalkBusiness, SectionParallax},
        parallaxModel: new SectionParallaxModel({
            imageURL: `${require('@/assets/parallax-partners.jpg')}`
        }),
        RouterNames: ROUTER_CONSTANTS,
        ServicesList: SERVICES_LIST,
        data() {
            return {
                prevHeight: 0,
                transitionName: 'slide'
            };
        },
        computed: {
            title() {
                switch (this.$route.name) {
                    case this.$options.RouterNames.SERVICE_CBSV:
                        return 'CBSV';
                    case this.$options.RouterNames.SERVICE_ECBSV:
                        return 'eCBSV';
                    case this.$options.RouterNames.SERVICE_ITRV:
                        return 'ITRV';
                    case this.$options.RouterNames.SERVICE_EVERIFY:
                        return 'Form I-9/ E-Verify';
                    case this.$options.RouterNames.SERVICE_SSNT:
                        return 'SSNT';
                    default:
                        return 'TODO'
                }
            }
        },
        created() {
            this.$router.beforeEach((to, from, next) => {
                let transitionName = 'slide';

                if (transitionName === 'slide') {
                    const toDepth = to.path.split('/').length;
                    const fromDepth = from.path.split('/').length;
                    transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
                }

                this.transitionName = transitionName;

                next();
            });
        },
        methods: {
            beforeLeave(element) {
                this.prevHeight = getComputedStyle(element).height;
            },
            enter(element) {
                const {height} = getComputedStyle(element);

                element.style.height = this.prevHeight;

                setTimeout(() => {
                    element.style.height = height;
                });
            },
            afterEnter(element) {
                element.style.height = 'auto';
            },
        }
    }
</script>

<style lang="scss" scoped>

    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
        transition-duration: 0.5s;
        transition-property: height, opacity, transform;
        transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
        overflow: hidden;
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        transform: translate(2em, 0);
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        transform: translate(-2em, 0);
    }

    .nav-link.router-link-active {
        color: #fff;
        background-color: #226DA7;
    }

    h1 {
        text-transform: none;
    }

    aside {
        position: relative;
        .services-nav {
            position: sticky;
            top: 90px;
        }
    }
</style>
