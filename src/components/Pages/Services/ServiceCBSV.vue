<template>
    <div>
        <header class="mb-5">
            <h2>CBSV: Consent Based SSN Verification</h2>
            <div class="text-intro">
                CBSV: Consent Based SSN Verification
            </div>
        </header>
        <article>
            <block-video
                class="float-lg-left mr-md-4 mb-4 mb-lg-0"
                :model="videoPromoModel"/>
            <p>
                Consent Based Social Security Number Verification (CBSV) service was developed by the Social Security
                Administration (SSA) in 2002 to protect vital business interests. It mitigates fraud and identity theft
                while reducing losses, bad/negligent hires, and unauthorized workers and applicants.
            </p>
            <p>
                As an enrolled company in CBSV, <strong>IDValidation</strong> offers this service
                via our web platform interface.
            </p>
            <p class="mb-0"><strong>CBSV is a unique service that offers:</strong></p>
            <ul>
                <li>Direct access to the SSA Master File and Death Index for all business purposes</li>
                <li>Instant, online validation of personal identifiers:<strong> Name / SSN / Date of Birth / Death
                    Indicator</strong></li>
                <li>
                    Virtually 100% accurate results to official governmental source records
                </li>
                <li>
                    Validation used for:
                    <ul>
                        <li>
                            Employment Screening (both pre- and post-hire) / Tenant Screening
                        </li>
                        <li>
                            Applicants (customers/clients, policyholders, students, patients, more)
                        </li>
                        <li>
                            Loan originations (mortgage, auto, personal), depository accounts, insurance
                        </li>
                        <li>
                            Creditors (retail, utilities, telecom, etc.)
                        </li>
                        <li>
                            Fraud investigations and by Special Investigative Units
                        </li>
                        <li>
                            As a compliance tool (e.g., Red Flags Rule, CIP, KYC, Fannie Mae LQI, Dodd-Frank, more)
                        </li>
                        <li>
                            Fraud and ID theft protection: reduces losses, charge-offs, unauthorized workers and
                            applicants
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                In 2007, the Federal Trade Commission said there are over 10 million more profiles in the system than
                there
                are consumers. CBSV thwarts fraud and identity theft by validating personal identifiers direct to the
                official governmental issuing authority. No other method is as effective as CBSV nor can any other
                method
                make this claim.
            </p>
            <p>
                Gain a competitive advantage and receive the ultimate benefit of protecting your vital business
                interests
                for all your validation and compliance needs.
            </p>
            <p>
                If you would like more information on this dynamic service or would like a representative to contact you
                to
                discuss your needs, please call us at
                <adaptive-phone-number text-number="WE VERIFY"/>
                or visit our
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
    import ROUTER_CONSTANTS from "@/constants/RouterConstants";
    import AdaptivePhoneNumber from "@/elements/AdaptivePhoneNumber";
    import BlockVideoModel from "@/components/Pages/Services/elements/models/block-video.model";
    import BlockVideo from "@/components/Pages/Services/elements/BlockVideo";

    export default {
        name: "ServiceCBSV",
        components: {BlockVideo, AdaptivePhoneNumber},
        RouterNames: ROUTER_CONSTANTS,
        created() {
            this.videoPromoModel = new BlockVideoModel({
                imageURL: `${require('@/assets/services/promo-video-cbsv.jpg')}`,
                videoURL: 'https://www.youtube.com/embed/_9lViX81urc'
            });
        }
    }
</script>

<style scoped>

</style>
