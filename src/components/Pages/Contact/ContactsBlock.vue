<template>
    <section class="page-section container custom-text-color-1">
        <div class="row text-center text-lg-left">
            <div class="col-md-6 col-lg-3">
                <font-awesome-icon size="3x" class="text-light-2  mb-3" icon="map-marker-alt"/>
                <h4 class="font-weight-semibold mb-3">Address</h4>
                <address>
                    IDValidation from CID<br>
                    713 W. Duarte Rd., #106<br>
                    Arcadia, CA 91007
                </address>
            </div>
            <div class="col-md-6 col-lg-3 custom-min-height-1 custom-center-xs">
                <font-awesome-icon size="3x" class="text-light-2  mb-3" icon="phone-alt"/>
                <h4 class="font-weight-semibold mb-3">Phone</h4>
                <ul class="list-unstyled phones">
                    <li class="d-flex justify-content-center justify-content-lg-start">
                        <span
                            class="font-weight-semibold text-dark d-flex justify-content-between text-center text-lg-left">Toll-Free<span
                            class="mr-1">:</span></span>
                        <adaptive-phone-number css-class="text-reset" phone-number="8559383743"/>
                    </li>
                    <li class="d-flex justify-content-center justify-content-lg-start">
                        <span
                            class="font-weight-semibold text-dark d-flex justify-content-between text-center text-lg-left">Telephone <span
                            class="mr-1">:</span></span>
                        <adaptive-phone-number css-class="text-reset" phone-number="6262540000"/>
                    </li>
                    <li class="d-flex justify-content-center justify-content-lg-start">
                        <span
                            class="font-weight-semibold text-dark d-flex justify-content-between text-center text-lg-left">Fax <span
                            class="mr-1">:</span></span>
                        <adaptive-phone-number css-class="text-reset" phone-number="6266283817"/>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 col-lg-3 custom-min-height-1 custom-center-xs">
                <font-awesome-icon size="3x" class="text-light-2  mb-3" :icon="['far','envelope']"/>
                <h4 class="font-weight-semibold mb-3">Email</h4>
                <ul class="list-unstyled">
                    <li>
                        <a
                            :href="`mailto:${$options.eMail}`"
                            class="text-reset">{{$options.eMail}}</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 col-lg-3 custom-min-height-1 custom-center-xs">
                <font-awesome-icon size="3x" class="text-light-2  mb-3" icon="share-alt"/>
                <h4 class="font-weight-semibold mb-3">Social media</h4>
                <ul class="list-unstyled">
                    <li>
                        <font-awesome-icon class="mr-2" :icon="['fab', 'facebook-square']"/>
                        <a
                            href="https://www.facebook.com/IDValidation"
                            class="text-reset"
                            target="_blank"
                            title="Facebook">
                            Facebook
                        </a>
                    </li>
                    <li>
                        <font-awesome-icon class="mr-2" :icon="['fab', 'twitter-square']"/>
                        <a
                            href="https://twitter.com/IDValidation"
                            class="text-reset"
                            target="_blank"
                            title="Twitter">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <font-awesome-icon class="mr-2" :icon="['fab', 'youtube-square']"/>
                        <a
                            href="http://www.youtube.com/user/IDValidation"
                            class="text-reset"
                            target="_blank"
                            title="Youtube">
                            Youtube
                        </a>
                    </li>
                    <li>
                        <font-awesome-icon class="mr-2" :icon="['fab', 'linkedin']"/>
                        <a
                            href="https://www.linkedin.com/company/computer-information-development?trk=company_logo"
                            class="text-reset"
                            target="_blank"
                            title="Linkedin">
                            Linkedin
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import AdaptivePhoneNumber from "@/elements/AdaptivePhoneNumber";

    export default {
        name: "ContactsBlock",
        components: {
            AdaptivePhoneNumber
        },
        eMail: process.env.VUE_APP_SUPPORT_MAIL,
    }
</script>

<style lang="scss" scoped>
    .phones {
        > li {
            > span {
                &:first-child {
                    min-width: 100px;
                }
            }
        }
    }

    .custom-text-color-1 {
        color: #818898 !important;
    }
</style>
