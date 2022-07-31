<template>
    <div>
        <header class="mb-5">
            <h2>ITRV: Income Tax & Employer Verification</h2>
            <div class="text-intro">
                ITRV: Income and Employer Verification
            </div>
        </header>
        <article>
            <block-video
                class="float-left mr-md-4 mb-4 mb-md-0"
                :model="videoPromoModel"/>
            <p>
                <strong>IDValidation is a Participant Company in the IRS Income Tax Return Verification (ITRV)
                    service.</strong>
            </p>
            <p>
                ITRV matches <strong>Name, SSN, and Address</strong> of the taxpayer to the
                IRS database and provides income and employer Transcripts. Verify past income and employer history to
                mitigate fraud and strengthen due diligence processes whenever verification is needed.
            </p>
            <p>
                Transcripts of personal and/or business Income Tax Returns can be requested with taxpayer consent.
            </p>
            <p>
                <strong>Form 1040</strong> and other Transcripts available for current year plus prior 3 years (4 year
                total)
            </p>
            <p>
                <strong>Forms 1065 and 1120</strong> are examples of available Business Transcripts
            </p>
            <p>
                <strong>Form W-2, 1098, and 1099 series (Wage and Income Documents)</strong>
            </p>
            <p>
                Our ITRV uses an online process to generate and submit IRS Form 4506T. Following applicant signature,
                results are returned in four business days or less.
            </p>
            <p>
                Obtain accurate income information and mitigate fraud from the IRS with ITRV from IDValidation.<br><br>
                If you would like more information on this dynamic service or would like a representative to contact you
                to
                discuss your needs, please call us at <adaptive-phone-number/> or visit our
                <b-link :to="{name:$options.RouterNames.CONTACTS}">Contact
                    Us page.
                </b-link>
            </p>
            <p>
                Thank you for your interest in IDValidation. We would be honored to serve your verification needs.
            </p>
        </article>
    </div>
</template>

<script>
    import AdaptivePhoneNumber from "@/elements/AdaptivePhoneNumber";
    import ROUTER_CONSTANTS from "@/constants/RouterConstants";
    import BlockVideoModel from "@/components/Pages/Services/elements/models/block-video.model";
    import BlockVideo from "@/components/Pages/Services/elements/BlockVideo";

    export default {
        name: "ServiceITRV",
        components: {BlockVideo, AdaptivePhoneNumber},
        RouterNames: ROUTER_CONSTANTS,
        created() {
            this.videoPromoModel = new BlockVideoModel({
                imageURL: `${require('@/assets/services/promo-video-itrv.jpg')}`,
                videoURL: 'https://www.youtube.com/embed/-jEeiRndxrU'
            });
        }
    }
</script>
