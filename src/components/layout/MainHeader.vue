<template>
    <header ref="header">
        <b-navbar toggleable="lg" type="light" variant="white" fixed="top">
            <div class="container">
                <b-navbar-brand href="#">
                    <b-link :to="{name:$options.Routes.HOME}">
                        <adaptive-logo/>
                    </b-link>
                </b-navbar-brand>

                <b-navbar-toggle
                    target="nav-collapse"
                    class="ml-3 order-2 order-lg-1">
                    <template #default>
                        <font-awesome-icon icon="bars"/>
                    </template>
                </b-navbar-toggle>
                <b-collapse
                    class="order-2 order-lg-1"
                    id="nav-collapse"
                    is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item :to="{name:$options.Routes.HOME}">Home</b-nav-item>
                        <b-nav-item :to="{name:$options.Routes.ABOUT}">About</b-nav-item>
                        <b-nav-item :to="{name:$options.Routes.FAQ}">FAQ</b-nav-item>
                        <b-nav-item :to="{name:$options.Routes.CONTACTS}">Contacts</b-nav-item>
                        <b-nav-item :to="{name:$options.Routes.PARTNERS}">Partners</b-nav-item>
                        <b-nav-item-dropdown text="Services" :class="servicesCssClass" right>
                            <b-dropdown-item
                                v-for="(item,index) in $options.ServicesList"
                                :key="index"
                                :to="{name:item.routerName}">
                                {{item.label}}
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
                <div class="ml-auto ml-lg-4 order-1 order-lg-2 phone-box text-dark">
                    <font-awesome-icon
                        icon="mobile-alt"
                        size="3x"
                        class="phone-box--icon"/>
                    <div class="phone-box--text">
                        <p class="phone-box--text--description">Toll Free</p>
                        <p class="phone-box--text--phone">
                            <adaptive-phone-number/>
                        </p>
                    </div>
                </div>
            </div>
        </b-navbar>
    </header>
</template>

<script>
    //TODO: add animation scroll
    import ROUTER_CONSTANTS from "@/constants/RouterConstants";
    import AdaptiveLogo from "@/elements/AdaptiveLogo";
    import AdaptivePhoneNumber from "@/elements/AdaptivePhoneNumber";
    import SERVICES_LIST from "@/constants/ServicesList";
    import {gsap} from "gsap";

    export default {
        name: "MainHeader",
        components: {AdaptivePhoneNumber, AdaptiveLogo},
        Routes: ROUTER_CONSTANTS,
        ServicesList: SERVICES_LIST,
        computed: {
            servicesCssClass() {
                return this.$route.fullPath.indexOf('services') < 0
                    ? ''
                    : 'active';
            }
        },
        mounted() {
            const header = this.$refs.header;
            const navbar = header.querySelector('.navbar');

            gsap.to(navbar, {
                scrollTrigger: {
                    trigger: header,
                    start: 'bottom 99px',
                    toggleActions: 'restart none reverse none'
                },
                duration: 0.3,
                paddingTop: '8px',
                paddingBottom: '8px'

            })
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/scss/tools/index";

    header {
        height: 100px;
    }

    .phone-box {
        display: inline-flex;
        align-items: center;

        p {
            margin: 0;
        }

        &--text {
            margin-left: 8px;
            line-height: 1;

            &--description {
                text-transform: uppercase;
                font-size: .9em;

            }

            &--phone {
                font-weight: 900;
                font-size: 1.50em;
                letter-spacing: -1px;

                ::v-deep {
                    a {
                        color: inherit;
                    }
                }
            }
        }
    }

    ::v-deep {
        .dropdown-item.router-link-active {
            color: #fff;
            background-color: #226DA7;
        }

    }
</style>
