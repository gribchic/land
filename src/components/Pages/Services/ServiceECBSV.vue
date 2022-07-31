<template>
    <div>
        <header class="mb-5">
            <h2>IDValidation.com Awarded Social Security Administration Agreement to provide eCBSV services.</h2>
            <div class="text-intro">
                Tuesday, September 17, 2019
            </div>
        </header>
        <article>
            <block-video
                class="float-left mr-md-4 mb-4 mb-md-0"
                :model="videoPromoModel"/>
            <p>
                IDValidation.com Awarded Social Security Administration Agreement to provide eCBSV services.
            </p>
            <p>
                eCBSV is a service that will help to reduce synthetic identity fraud. The service will be marketed
                to the financial services industry and other "permitted entities" as defined by the law.
            </p>
            <p>
                IDValidation.com / Computer Information Development, LLC is pleased to announce that it has been
                selected by the Social Security Administration to be part of the initial rollout for the Electronic
                Consent Based Social Security Number Verification (eCBSV) service. The roll out of this new service
                from SSA is currently scheduled for June of 2020 and the test phase will last for approximately six
                months. During the roll out period, the agreement limits the number of clients the company can take
                on to 20. Because of this restriction, the company is being very selective in offering the service
                to clients.
            </p>
            <p>
                "eCBSV is an important addition to the suite of identity verification services that we are able to
                offer due to our government relationships," said Paul Campione, IDV's CEO. "Our vision is to provide
                companies with affordable tools that are easy to use and which end identity theft and employment
                fraud. eCBSV fits quite nicely with this vision." In addition to the company's relationship with the
                SSA, IDV also has agreements with the IRS and Department of Homeland Security.
            </p>
            <p>
                For more information on eCBSV, contact IDValidation directly <a href="mailto:Lou@IDValidation.net">Lou@IDValidation.net</a>
                or by calling <adaptive-phone-number phone-number="2628856187"/>.
            </p>
            <hr/>
            <div>
                <p>About IDValidation/Computer Information Development, LLC:</p>
                <p class="font-italic">
                    IDValidation, founded in 2001, is a wholly owned subsidiary of Computer Information Development,
                    LLC, headquartered in Arcadia, CA. The company sells a comprehensive suite of identity
                    verification services.
                </p>
                <p>
                    Press Contact: Lou Perez, IDValidation/Computer Information Development, LLC. Phone
                    <adaptive-phone-number phone-number="2628856187"/>.<br>713 W Duarte Rd., Arcadia, CA 91007. <a
                    href="mailto:Lou@IDValidation.net">Lou@IDValidation.net</a>
                </p>
            </div>
        </article>
    </div>
</template>

<script>
    import BlockVideoModel from "@/components/Pages/Services/elements/models/block-video.model";
    import BlockVideo from "@/components/Pages/Services/elements/BlockVideo";
    import AdaptivePhoneNumber from "@/elements/AdaptivePhoneNumber";

    export default {
        name: "ServiceECBSV",
        components: {AdaptivePhoneNumber, BlockVideo},
        created() {
            this.videoPromoModel = new BlockVideoModel({
                imageURL: `${require('@/assets/services/promo-video-ecbsv.jpg')}`,
                videoURL: 'https://www.youtube.com/embed/5M05ZwFGEWs'
            });
        }
    }
</script>

<style scoped>

</style>
