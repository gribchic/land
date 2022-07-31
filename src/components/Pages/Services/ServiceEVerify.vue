<template>
    <div>
        <header class="mb-5">
            <h2>Form I-9/ E-Verify</h2>
            <div class="text-intro">
                Employment Eligibility Verification from DHS and USCIS
            </div>
        </header>
        <article>
            <block-video
                class="float-left mr-md-4 mb-4 mb-md-0"
                :model="videoPromoModel"/>
            <p>
                Employers must verify an employee's identity and establish that the worker is eligible to accept
                employment
                in the US. The stakes for non-compliance of federal immigration laws are so steep that many Hiring
                Managers
                and Human Resource departments are incorporating our I-9 software verification into their processes.
            </p>
            <p>
                For one simple price, you get everything - it's easy and effective!
            </p>
            <div>
                <strong> We help employers attain legal compliance through our comprehensive suite of
                    solutions:</strong>
            </div>
            <div>
                <ul>
                    <li>
                        Error detecting Electronic I-9 solutions
                    </li>
                    <li>
                        E-Verify from the electronic I-9
                    </li>
                    <li>
                        Image, index and import historic paper I-9s to Electronic versions
                    </li>
                    <li>
                        I-9 Auditing by our trained professionals
                    </li>
                    <li>
                        First Federal user interface
                    </li>
                    <li>
                        I-9 Consulting solutions
                    </li>
                    <li>
                        Exceptional customer service and support
                    </li>
                </ul>
            </div>
            <p>
                If you would like more information on this dynamic service or would like a representative to contact you
                to
                discuss your needs, please call us at
                <adaptive-phone-number/>
                or visit our
                <b-link :to="{name:$options.RouterNames.CONTACTS}">Contact
                    Us page.
                </b-link>
            </p>
            <p>
                Thank you for your interest in IDValidation. We would be honored to serve your verification needs.
            </p>
            <p>
                E-Verify® is a registered trademark of U.S. Department of Homeland Security.
            </p>
            <p>
                Watch Our Form I-9/E-Verify Informational Seminar!
            </p>
            <p>
                <block-video :model="videoSeminarModel"/>
            </p>
        </article>
    </div>
</template>

<script>
    import AdaptivePhoneNumber from "@/elements/AdaptivePhoneNumber";
    import ROUTER_CONSTANTS from "@/constants/RouterConstants";
    import BlockVideo from "@/components/Pages/Services/elements/BlockVideo";
    import BlockVideoModel from "@/components/Pages/Services/elements/models/block-video.model";

    export default {
        name: "ServiceEVerify",
        components: { BlockVideo, AdaptivePhoneNumber},
        RouterNames: ROUTER_CONSTANTS,
        created() {
            this.videoPromoModel = new BlockVideoModel({
                imageURL: `${require('@/assets/services/promo-video-everify.jpg')}`,
                videoURL: 'https://www.youtube.com/embed/y8W4TE7zeYI'
            });

            this.videoSeminarModel = new BlockVideoModel({
                imageURL: `${require('@/assets/services/seminar-video-everify.jpg')}`,
                videoURL: 'https://www.youtube.com/embed/5okpcEvWcEY'
            })

        }
    }
</script>
