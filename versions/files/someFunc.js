exports.componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
exports.rgbToHex = (r, g, b) => { return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b); }
exports.getBackground = (tempData) => {
    var tempArray = [];
    for (let n = 0; n <= tempData.rowData.length; n++) {
        try {
            r = Math.floor(tempData.rowData[n].values[0].userEnteredFormat.backgroundColor.red * 255);
            g = Math.floor(tempData.rowData[n].values[0].userEnteredFormat.backgroundColor.green * 255);
            b = Math.floor(tempData.rowData[n].values[0].userEnteredFormat.backgroundColor.blue * 255);
            if (rgbToHex(r, g, b) == '#NaNNaNNaN') { tempArray.push('#000000') }
            else { tempArray.push(rgbToHex(r, g, b)); }
        }
        catch (error) { tempArray.push('#ffffff'); }
    }
    return tempArray;
}
exports.isBlank = (lastRow, data) => {
    var tempArray = [];
    for (var Jungle = 0; Jungle < lastRow; Jungle++) {
        if (data[Jungle] == null || data[Jungle] == '' || data[Jungle] == undefined) { tempArray.push(false); }
        else { tempArray.push(true); }
    }
    return tempArray;
}
exports.milestoneTitleCount = (lastRow, data) => {
    function inside() {
        var tempArray = [];
        for (var Jungle = 0; Jungle < lastRow; Jungle++) {
            if (data[Jungle] == null || data[Jungle] == '' || data[Jungle] == undefined) { tempArray.push(false); }
            else { tempArray.push(true); }
        }
        return tempArray;
    }
    milestoneBlanks = inside();
    console.log(milestoneBlanks)
    var tempArray = [];
    for (var Jungle = 0; Jungle < lastRow; Jungle++) {
        if (milestoneBlanks[Jungle] == true) { tempArray.push(Jungle); }
    }
    return tempArray;
}
exports.milestoneTitle = (data, lastRow) => {
    
    function inside() {
        var tempArray = [];
        for (var Jungle = 0; Jungle < lastRow; Jungle++) {
            if (data[Jungle] == null || data[Jungle] == '' || data[Jungle] == undefined) { tempArray.push(false); }
            else { tempArray.push(true); }
        }
        return tempArray;
    }
    milestoneBlanks = inside();
    console.log(milestoneBlanks)
    var tempArray = [];
    for (var Jungle = 0; Jungle < lastRow; Jungle++) {
        if (milestoneBlanks[Jungle] == true) { tempArray.push(data[Jungle]); }
    }
    return tempArray;
}
exports.getTitlesCountsProcess = (lastRow, SubProcessItem) => {
    var tempArray = [];
    for (let n = 0; n < lastRow; n++) {
        if (SubProcessItem.ColorProcess[n] == '#d9ead3') { tempArray.push(n); }
    }
    return tempArray;
}
exports.getTitlesProcess = (lastRow, SubProcessItem) => {
    var tempArray = [];
    for (let n = 0; n < lastRow; n++) {
        if (SubProcessItem.ColorProcess[n] == '#d9ead3'
            && SubProcessItem.isProcessBlank[n] == true) { tempArray.push(SubProcessItem.Name[n]) }
    }
    return tempArray;
}
exports.getTitlesCountsProcessOnlyEnd = (lastRow, SubProcessItem) => {
    var tempArray = [];
    for (let n = 0; n < lastRow; n++) {
        if (SubProcessItem.ColorProcess[n] == '#d9ead3'
            && SubProcessItem.isProcessBlank[n] == false) { tempArray.push(n) }
    }
    return tempArray;
}