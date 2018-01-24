
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Returns appropriate number suffix
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
exports.getDistrictSuffix = (num) => {
    if (num === 'unknown' || num === 'null') return 'unknown';
    if (num === 4 || num === 11 || num === 12 || num === 13) return num + 'th District';
    const char = num.toString().charAt(num.toString().length - 1);
    switch (char) {
        case '1':
            return num + 'st District';
        case '2':
            return num + 'nd District';
        case '3':
            return num + 'rd District';
        default:
            return num + 'th District';
    }
};