<template>
    <b-form class="text-light">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <base-input
                        v-model="name"
                        id="name"
                        :css-class="{ error: $v.name.$error }"
                        v-vuelidate-behavior="$v.name"
                        :maxlength="$options.ValidationConstants.USER_NAME.maxLength">
                        <template #prepend>
                            <label for="name" class="icon-label">
                                <font-awesome-icon :icon="['far','user']"/>
                            </label>
                        </template>
                        <template #label>
                            <label class="form-control-label" for="name">Your Name *</label>
                        </template>
                        <template #validationMessage>
                            <base-validation-message
                                :field="$v.name"
                                validator="required"
                                :message="$options.ValidationMessages.fieldRequired('Name')"/>
                            <base-validation-message
                                :field="$v.name"
                                validator="userName"
                                :message="$options.ValidationMessages.userNameInvalid('Name')"/>
                        </template>
                    </base-input>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <base-input
                        v-model="company"
                        id="company"
                        :css-class="{ error: $v.company.$error }"
                        v-vuelidate-behavior="$v.company"
                        :maxlength="$options.ValidationConstants.COMPANY_NAME.maxLength">
                        <template #prepend>
                            <label for="company" class="icon-label">
                                <font-awesome-icon :icon="['far','building']"/>
                            </label>
                        </template>
                        <template #label>
                            <label class="form-control-label" for="company">Your Company *</label>
                        </template>
                        <template #validationMessage>
                            <base-validation-message
                                :field="$v.company"
                                validator="required"
                                :message="$options.ValidationMessages.fieldRequired('Company')"/>
                        </template>
                    </base-input>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <base-input
                        v-model="email"
                        id="email"
                        :css-class="{ error: $v.email.$error }"
                        v-vuelidate-behavior="$v.email"
                        :maxlength="$options.ValidationConstants.EMAIL.maxLength">
                        <template #prepend>
                            <label for="email" class="icon-label">
                                <font-awesome-icon :icon="['far','envelope']"/>
                            </label>
                        </template>
                        <template #label>
                            <label class="form-control-label" for="email">Your Email *</label>
                        </template>
                        <template #validationMessage>
                            <base-validation-message
                                :field="$v.email"
                                validator="required"
                                :message="$options.ValidationMessages.fieldRequired('Email')"/>
                            <base-validation-message
                                :field="$v.email"
                                validator="email"
                                :message="$options.ValidationMessages.emailInvalid('Email')"/>
                        </template>
                    </base-input>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <masked-phone-number
                        v-model="phone"
                        id="phone"
                        :css-class="{ error: $v.phone.$error }"
                        v-vuelidate-behavior="$v.phone"
                        :maxlength="$options.ValidationConstants.PHONE.maxLength">
                        <template #prepend>
                            <label for="phone" class="icon-label">
                                <font-awesome-icon icon="phone-alt"/>
                            </label>
                        </template>
                        <template #label>
                            <label class="form-control-label" for="phone">Your Phone *</label>
                        </template>
                        <template #validationMessage>
                            <base-validation-message
                                :field="$v.phone"
                                validator="required"
                                :message="$options.ValidationMessages.fieldRequired('Phone')"/>
                            <base-validation-message
                                :field="$v.phone"
                                validator="minlength"
                                :message="$options.ValidationMessages.phoneNumber('Phone')"/>
                        </template>
                    </masked-phone-number>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <base-select
                        :css-class="{error: $v.reference.$error}"
                        id="reference"
                        v-model="reference"
                        v-vuelidate-behavior="$v.reference"
                        :options="$options.referenceOptions"
                        :clearable="false"
                        :searchable="false">
                        <template #prepend>
                            <label for="reference" class="icon-label">
                                <font-awesome-icon icon="rss"/>
                            </label>
                        </template>
                        <template #label>
                            <label class="form-control-label" for="reference">How did you hear about Us?
                                *</label>
                        </template>
                    </base-select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <base-select
                        :css-class="{error: $v.topic.$error}"
                        id="topic"
                        v-model="topic"
                        v-vuelidate-behavior="$v.topic"
                        :options="$options.topicOptions"
                        :searchable="false"
                        :clearable="false">
                        <template #prepend>
                            <label for="topic" class="icon-label">
                                <font-awesome-icon icon="headset"/>
                            </label>
                        </template>
                        <template #label>
                            <label class="form-control-label" for="topic">Please select a topic *</label>
                        </template>
                    </base-select>
                </div>
            </div>
        </div>
        <div class="form-group">
            <base-textarea
                v-model="message"
                id="message"
                :css-class="{ error: $v.message.$error }"
                v-vuelidate-behavior="$v.message">
                <template #prepend>
                    <label for="message" class="icon-label">
                        <font-awesome-icon :icon="['far','comment']"/>
                    </label>
                </template>
                <template #label>
                    <label class="form-control-label" for="message">Your Message *</label>
                </template>
                <template #validationMessage>
                    <base-validation-message
                        :field="$v.message"
                        validator="required"
                        :message="$options.ValidationMessages.fieldRequired('Message')"/>
                </template>
            </base-textarea>
        </div>
        <footer>
            <spinner-button
                variant="send"
                @click.native="send"
                :is-clicked="isClicked"
                :disabled="isButtonDisabled"
            >Send
            </spinner-button>
        </footer>
    </b-form>
</template>

<script>
    import BaseInput from "@/elements/BaseInput";
    import {
        required,
        email
    } from "vuelidate/lib/validators";
    import BaseValidationMessage from "@/elements/BaseValidationMessage";
    import VALIDATION_CONSTANTS from "@/constants/ValidationConstants";
    import VALIDATION_MESSAGES from "@/constants/ValidationMessages";
    import MaskedPhoneNumber from "@/elements/MaskedPhoneNumber";
    import BaseSelect from "@/elements/BaseSelect";
    import BaseTextarea from "@/elements/BaseTextarea";
    import SpinnerButton from "@/elements/SpinnerButton";
    import axios from 'axios';
    import msgOk from "@/mixins/msgBox";
    import fullValidationReset from "@/mixins/vuelidateMixin";

    export default {
        name: "FormContact",
        components: {
            SpinnerButton,
            BaseTextarea,
            BaseSelect,
            MaskedPhoneNumber,
            BaseValidationMessage,
            BaseInput
        },
        mixins: [msgOk, fullValidationReset],
        ValidationMessages: VALIDATION_MESSAGES,
        ValidationConstants: VALIDATION_CONSTANTS,
        referenceOptions: [
            {
                label: 'Google or other search engine',
                value: 'Google or other search engine'
            },
            {
                label: 'Referred by someone',
                value: 'Referred by someone'
            },
            {
                label: 'Industry publication',
                value: 'Industry publication'
            },
            {
                label: 'Just knew of IDValidation',
                value: 'Just knew of IDValidation'
            },
            {
                label: 'Other',
                value: 'Other'
            },
        ],
        topicOptions: [
            {
                label: 'Sales',
                value: 'Sales'
            },
            {
                label: 'General Question',
                value: 'General Question'
            },
            {
                label: 'Services/Products',
                value: 'Services/Products'
            },
            {
                label: 'Customer Service/Support',
                value: 'Customer Service/Support'
            },
            {
                label: 'Other',
                value: 'Other'
            },
        ],
        data() {
            return {
                name: null,
                company: null,
                email: null,
                phone: null,
                reference: null,
                topic: null,
                message: null,
                isClicked: false
            }
        },
        computed: {
            isButtonDisabled() {
                return this.$v.$invalid;
            }
        },
        methods: {
            async send() {
                if (this.$v.$invalid) {
                    return
                }
                console.log('TODO send');
                this.isClicked = true;

                const bodyFormData = new FormData();
                bodyFormData.append('name', this.name);
                bodyFormData.append('company', this.company);
                bodyFormData.append('email', this.email);
                bodyFormData.append('phone', this.phone);
                bodyFormData.append('reference', this.reference);
                bodyFormData.append('topic', this.topic);
                bodyFormData.append('message', this.message);

                axios.post('', bodyFormData, {headers: {'Content-Type': 'multipart/form-data'}})
                    .then(() => {
                        this.msgOk('success', 'Your message has sent. Thank you.');
                        this.clearForm();
                    })
                    .catch(() => {
                        this.msgOk('danger', 'Something went wrong. Try again please.');
                    }).finally(() => {
                    this.isClicked = false;
                });
            },
            clearForm() {
                this.fullValidationReset();
                this.name = null;
                this.company = null;
                this.email = null;
                this.phone = null;
                this.reference = null;
                this.topic = null;
                this.message = null;
            }
        },
        validations: {
            name: {
                required,
                userName: function (value) {
                    return this.$options.ValidationConstants.USER_NAME.allowedSymbolsRegex.test(value);
                }
            },
            company: {},
            email: {
                required,
                email
            },
            phone: {
                required,
                minLength: function (value) {
                    if (value === null) {
                        return false
                    }
                    return value.length >= this.$options.ValidationConstants.PHONE.length
                }
            },
            reference: {
                required,
            },
            topic: {
                required
            },
            message: {
                required
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/theme/index";

    .btn {
        &-send {
            color: $t-color-white;
            background-color: rgba(255, 255, 255, 0.2);

            &:hover {
                background-color: rgba(255, 255, 255, 0.3);
                color: $t-color-white;
            }
        }
    }
    .icon-label{
        margin: 0;
        align-self: baseline;
    }
</style>
