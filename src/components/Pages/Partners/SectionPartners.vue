<template>
    <div class="container page-section">
        <header class="mb-5">
            <h2 class="text-center">Our Partners, Associations & Affiliations</h2>
        </header>
        <div class="row" ref="container">
            <div v-for="(item, index) in partners"
                 :key="index"
                 class="col-lg-4 col-sm-6 mb-5">
                <block-partner :model="item"/>
            </div>
        </div>
        <hr class="mb-5"/>
        <div class="media">
            <img src="@/assets/partners/affiliate-agent.jpg" class="img-agent mr-3"
                 alt="Affiliate Agent for IDValidation">
            <div class="media-body">
                <h3 class="mt-0">Affiliate Agent for IDValidation</h3>
                Join the battle against Fraud and ID Theft. You can be an Affiliate Agent for IDValidation services.
                Please click Contact Us.
            </div>
        </div>
    </div>
</template>

<script>
    import BlockPartnersModel from "@/components/Pages/Partners/elements/block-partners.model";
    import BlockPartner from "@/components/Pages/Partners/elements/BlockPartner";
    import {Power2, TimelineMax} from "gsap";

    export default {
        name: "SectionPartners",
        components: {BlockPartner},
        data() {
            return {
                partners: [],
            }
        },
        created() {
            this.partners
                .push(
                    new BlockPartnersModel({
                        imageURL: `${require('@/assets/partners/onfido-logo.svg')}`,
                        link: 'https://onfido.com/us/',
                        title: 'Onfido',
                        content: 'Identity verification at the speed of life. It\'s as simple as an ID and a selfie. Our document verification and facial biometrics technology lets your users verify themselves anywhere, anytime.'
                    }),
                    new BlockPartnersModel({
                        imageURL: `${require('@/assets/partners/irs-logo.svg')}`,
                        link: 'http://www.irs.gov/',
                        title: 'Internal Revenue Service',
                        content: 'IDValidation is a Participant in the IRS Form 4506T Income Tax Return Verification service from the Internal Revenue Service (IRS). We offer income and employer verification using IRS Form 4506T “Request for Transcript of Tax Return”.'
                    }),
                    new BlockPartnersModel({
                        imageURL: `${require('@/assets/partners/social-security-logo.svg')}`,
                        link: 'http://www.ssa.gov/',
                        title: 'Internal Revenue Service',
                        content: 'The SSA delivers services through a nationwide network of over 1,400 sites such as regional and field offices, teleservice and processing centers.'
                    }),
                    new BlockPartnersModel({
                        imageURL: `${require('@/assets/partners/e-verify_logo.svg')}`,
                        link: 'http://www.formi9.com/',
                        title: 'Form I-9 Compliance',
                        content: 'We provide cutting proactive and preventative SAAS technology solutions and consulting services for Form I-9 and E-Verify compliance. Our team is uniquely positioned to materially assist employers in maximizing the benefits and cost savings inherent with electronic Form I-9 processing, automated right to work verifications (E-Verify), remote hire options, auditing, secure online storage, and consulting services to help employers achieve a compliant paperless process.'
                    }),
                    new BlockPartnersModel({
                        imageURL: `${require('@/assets/partners/pbsa-logo.svg')}`,
                        link: 'https://thepbsa.org/',
                        title: 'Professional Background Screening Association',
                        content: 'Identity verification at the speed of life. It\'s as simple as an ID and a selfie. Our document verification and facial biometrics technology lets your users verify themselves anywhere, anytime.'
                    })
                )
        },
        mounted() {
            this.setAnimation();
        },
        methods: {
            setAnimation(){
                const container = this.$refs.container;
                const children = container.children;
                const tl = new TimelineMax({
                    scrollTrigger: {
                        trigger: container,
                        start: "50px 90%",
                        //markers: true,
                    }
                });

                children.forEach((el, i) => {
                    tl.from(el, 0.5, {
                        autoAlpha: 0,
                        y: 150,
                        ease: Power2.easeOut
                    }, '-=0.4');
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .img-agent {
        height: 70px;
    }
</style>
