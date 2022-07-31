import vSelect from 'vue-select';
import { BIconX, BIconChevronDown } from "bootstrap-vue";

vSelect.props.components.default = () => ({
    Deselect: {
        render(createElement) {
            return createElement(BIconX, {
                style: {
                    color: "#a9a9a9",
                    height: "20px",
                    width: "20px"
                }
            });
        }
    },
    OpenIndicator: {
        render(createElement) {
            return createElement(BIconChevronDown);
        }
    }
});

export default vSelect;