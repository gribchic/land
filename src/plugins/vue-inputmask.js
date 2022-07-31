import Inputmask from 'inputmask';

export default {
    install(Vue) {
        Vue.directive('mask', {
            bind(el, binding) {
                Inputmask(typeof binding.value === 'object' ? binding.value : binding.expression).mask(el);
            }
        });

        Vue.prototype.$inputmask = Inputmask;
    }
}