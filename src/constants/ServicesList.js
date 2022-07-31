import ROUTER_CONSTANTS from "@/constants/RouterConstants";

class ServicesListItem {
    constructor(props) {
        this.label = props.label;
        this.routerName = props.routerName
    }
}

const SERVICES_LIST = [
    new ServicesListItem({
        label: 'CBSV',
        routerName: ROUTER_CONSTANTS.SERVICE_CBSV
    }),
    new ServicesListItem({
        label: 'eCBSV',
        routerName: ROUTER_CONSTANTS.SERVICE_ECBSV
    }),
    new ServicesListItem({
        label: 'ITRV',
        routerName: ROUTER_CONSTANTS.SERVICE_ITRV
    }),
    new ServicesListItem({
        label: 'FORM I-9/ E-VERIFY',
        routerName: ROUTER_CONSTANTS.SERVICE_EVERIFY
    }),
    new ServicesListItem({
        label: 'SSNT',
        routerName: ROUTER_CONSTANTS.SERVICE_SSNT
    })
];

export default SERVICES_LIST;
