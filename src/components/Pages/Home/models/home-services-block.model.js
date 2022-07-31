export default class HomeServicesBlockModel {
    constructor(props) {
        this.direction = props.direction || null;
        this.imageURL = props.imageURL;
        this.title = props.title;
        this.description = props.description;
        this.message = props.message;
        this.routerName = props.routerName;
    }
}
