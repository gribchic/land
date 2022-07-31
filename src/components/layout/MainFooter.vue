<template>
    <footer id="main-footer">
        <div class="container py-4">
            <div class="row text-center text-lg-left pt-5 pb-4">
                <div class="col-md-3 mb-4 mb-lg-0 text-sm-left">
                    <b-link :to="{name:$options.Routes.HOME}">
                        <adaptive-logo variant="lg"/>
                    </b-link>
                </div>
                <div class="col-md-2 mb-4 mb-lg-0">
                    <h5 class="text-color-dark font-weight-bold mb-1">Contacts</h5>
                    <ul class="list-unstyled">
                        <li>
                            <adaptive-phone-number/>
                        </li>
                        <li>
                            <b-link
                                class="text-reset text-decoration-none"
                                :to="{name: $options.Routes.CONTACTS}"
                                title="Contact Us">
                                Contact Us
                            </b-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 mb-4 mb-lg-0">
                    <h5 class="text-color-dark font-weight-bold mb-1">Company</h5>
                    <ul class="list-unstyled">
                        <li>
                            <b-link
                                class="text-reset text-decoration-none"
                                :to="{name: $options.Routes.ABOUT}"
                                title="About Us">
                                About Us
                            </b-link>
                        </li>
                        <li>
                            <b-link
                                class="text-reset text-decoration-none"
                                :to="{name: $options.Routes.PARTNERS}"
                                title="Partners">
                                Partners
                            </b-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 mb-4 mb-lg-0">
                    <h5 class="text-color-dark font-weight-bold mb-1">Policies</h5>
                    <ul class="list-unstyled">
                        <li>
                            <b-link
                                class="text-reset text-decoration-none"
                                :to="{name: $options.Routes.TERMS_OF_USE}"
                                title="Terms of Use">
                                Terms of Use
                            </b-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <ul class="social-icons float-lg-right">
                        <li class="social-icons-facebook">
                            <b-link
                                class="icon-facebook"
                                href="https://www.facebook.com/IDValidation"
                                target="_blank">
                                <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                            </b-link>
                        </li>
                        <li class="social-icons-twitter">
                            <b-link
                                class="icon-twitter"
                                href="https://twitter.com/IDValidation"
                                target="_blank">
                                <font-awesome-icon :icon="['fab', 'twitter']"/>
                            </b-link>
                        </li>
                        <li class="social-icons-instagram">
                            <b-link
                                class="icon-youtube"
                                href="http://www.youtube.com/user/IDValidation"
                                target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']"/>
                            </b-link>
                        </li>
                        <li class="social-icons-instagram">
                            <b-link
                                class="icon-linkedin"
                                href="https://www.linkedin.com/company/computer-information-development?trk=company_logo"
                                target="_blank">
                                <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
                            </b-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright m-0 py-3">
            <div class="container">
                <p class="copyright pt-3 text-center"><img src="../../assets/ichthus-fish.png" alt=""> Computer
                    Information
                    Development, LLC © {{year}}. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
    import AdaptiveLogo from "@/elements/AdaptiveLogo";
    import ROUTER_CONSTANTS from "@/constants/RouterConstants";
    import AdaptivePhoneNumber from "@/elements/AdaptivePhoneNumber";

    export default {
        name: "MainFooter",
        components: {AdaptivePhoneNumber, AdaptiveLogo},
        Routes: ROUTER_CONSTANTS,
        created() {
            this.year = (new Date()).getFullYear();
        }
    }
</script>

<style lang="scss" scoped>
    footer {
        font-size: 0.9em;

        .copyright {
            border-top: 1px solid #e4e4e4;
            font-size: 0.9em;
            margin: 0;

            img {
                display: inline-block;
                vertical-align: baseline;
            }
        }

        .social-icons {
            padding: 0;

            li {
                box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
                list-style: none;
                display: inline-block;
                margin-right: 5px;
                padding: 0;
                overflow: visible;

                a {
                    background: #FFF;;
                    transition: all 0.2s ease;
                    display: block;
                    height: 28px;
                    line-height: 28px;
                    width: 28px;
                    text-align: center;
                    color: #93949a;
                    text-decoration: none;
                    font-size: 0.8rem;
                    border-radius: 2px;

                    &:hover {
                        color: white;

                        &.icon-youtube {
                            background-color: #ff0000
                        }

                        &.icon-linkedin {
                            background-color: #007bb5
                        }

                        &.icon-facebook {
                            background-color: #3b5998
                        }

                        &.icon-twitter {
                            background-color: #1da1f2
                        }
                    }
                }
            }
        }
    }

</style>
