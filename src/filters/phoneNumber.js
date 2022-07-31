export default function (value, ext) {
    const val = isNaN(value) ? value : value.toString();

    if (val.length < 10) {
        return '';
    }

    let phone = `${val.substr(0, 3)} ${val.substr(3, 3)} ${val.substr(6, 4)}`;
    phone = !ext
        ? phone
        : `${phone} ext. ${ext}`;

    return phone;
}
