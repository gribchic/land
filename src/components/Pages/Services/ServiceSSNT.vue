<template>
    <div>
        <header class="mb-5">
            <h2>SSNT: Social Security Number Trace</h2>
            <div class="text-intro">
                IDV's Current and Accurate Data for a fraction of the cost!
            </div>
        </header>
        <article>
            <block-video
                class="float-left mr-md-4 mb-4 mb-md-0"
                :model="videoPromoModel"/>
            <p><strong>SSNT-1:</strong><br>
                (Consumer Data – Updated BiWeekly)<br>
                Name, DOB, Addresses,State &amp; Date Issued, and Death Index</p>
            <p>
                <strong>SSNT-2:</strong><br>
                (Consumer Data – Updated BiWeekly)<br>
                Name, DOB, Addresses, State &amp; Date Issued, Death Index, Telephone, Court History, and Relatives
            </p>
            <p>
                <strong>SSNT-3:</strong><br>
                (Direct Access - Live Refresh Rate)<br>
                Name, DOB, Aliases, Addresses, Property, State &amp; Date Issued, and Death Index, Telephone, Emails,
                Court History, Bankruptcy, Liens, Judgments, Sex Offenders, and Relatives
            </p>
            <div class="mb-4 text-center">
                <img src="@/assets/services/ssnt.jpg" alt="map" class="img-fluid">
            </div>
            <p>
                If you would like more information on this dynamic service or would like a representative to contact you
                to discuss your needs, please call us at
                <adaptive-phone-number/>
                or visit our
                <b-link :to="{name:$options.RouterNames.CONTACTS}">Contact
                    Us page.
                </b-link>
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
        name: "ServiceSSNT",
        components: {
            BlockVideo,
            AdaptivePhoneNumber
        },
        RouterNames: ROUTER_CONSTANTS,
        created() {
            this.videoPromoModel = new BlockVideoModel({
                imageURL: `${require('@/assets/services/promo-video-ssnt.jpg')}`,
                videoURL: 'https://www.youtube.com/embed/Kp1hC1JoUCg'
            });
        }
    }
</script>
