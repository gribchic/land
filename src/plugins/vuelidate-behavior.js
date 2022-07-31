function bindInput(el, binding) {
    let element = el;

    if (el.tagName === "DIV") {
        let input
            = el.querySelector('input[type="text"]')
            || el.querySelector('input[type="tel"]')
            || el.querySelector('input[type="email"]')
            || el.querySelector('input[type="search"]')
            || el.querySelector('input[type="file"]')
            || el.querySelector('input[type="password"]');

        if (input) {
            element = input;
        }
    } else if (el.tagName === "INPUT") {
        element = el;
    }

    let $v = binding.value;
    element.addEventListener("input", function() {
        $v.$$dirty = true;

        if ($v.$$hasDirtyBlur) {
            $v.$reset();
            $v.$touch();
        }
    });
    element.addEventListener("blur", function() {
        if ($v.$$dirty && !$v.$$hasDirtyBlur) {
            $v.$reset();
            $v.$$hasDirtyBlur = true;
            $v.$touch();
        }
    });
    element.addEventListener("change", function() {
        if (!$v.model) {
            $v.$touch();
        }
    });
}

function bindSelect(el, binding) {
    let $v = binding.value;
    el.addEventListener("change", function() {
        $v.$touch();
    });
}

export default {
    install(Vue) {
        Vue.directive("vuelidate-behavior", {
            bind(el, binding) {
                if (["DIV", "INPUT"].indexOf(el.tagName) > -1) {
                    bindInput(el, binding);
                } else if (el.tagName === "SELECT") {
                    bindSelect(el, binding);
                }
            }
        });
    }
};
