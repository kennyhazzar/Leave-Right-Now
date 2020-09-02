var axios = require('axios');
var qs = require('qs');
var fs = require('fs');
const { isIPv4 } = require('net');
const { runInThisContext } = require('vm');
// var Miro = require('./files/MiroFunctions')
a();
async function a() {
    // 
    var requestData =
    {
        tempDataValueProcess: [],
        tempDataValueMilestone: [],
        colorValuesProcess: [],
        colorValuesMilestone: [],
        dataMilestone: [],
        dataProcess: [],
        dataPractice: [],
        dataProvider: [],
        dataResource: [],
        dataResourceDemand: [],
        dataProduct: [],
        dataProductDemand: [],
        dataUserDemand: [],
        dataUser: []
    };
    //
    var toSendDataMilestone;
    var toSendDataProcess;
    var toSendDataPractice;
    var toSendDataProvider;
    var toSendDataResource;
    var toSendDataResourceDemand;
    var toSendDataProduct;
    var toSendDataProductDemand;
    var toSendDataUserDemand;
    var toSendDataUser;
    var colorDataPractice;
    var colorDataMilestone;
    var lastRow;
    var urlSheetColor = 'https://sheets.googleapis.com/v4/spreadsheets/12_1YRHmFzCQMJb4D5oAQqxd3-y-mkaM82RPlRv5XmPI?includeGridData=true&ranges=SIPOC (для Miro)'
    var urlSheet = 'https://sheets.googleapis.com/v4/spreadsheets/12_1YRHmFzCQMJb4D5oAQqxd3-y-mkaM82RPlRv5XmPI/values/SIPOC (для Miro)';
    var urlColorSheet = 'https://sheets.googleapis.com/v4/spreadsheets/12_1YRHmFzCQMJb4D5oAQqxd3-y-mkaM82RPlRv5XmPI?includeGridData=true&ranges=SIPOC (для Miro)';
    var google_refresh_token = '1//0c-HAMQqviQPXCgYIARAAGAwSNwF-L9IrxwXh5A9PWgDu8gBYxVkMuGnpPz9MD-d0PgUyLf5qRnncSd-fTqYrvjFuIjzT8MxEYk0';
    var urlToken = 'https://oauth2.googleapis.com/token';
    var data = qs.stringify({
        'client_id': '499089821174-g49og4ec559f1knirmjntgdedo7mjjh7.apps.googleusercontent.com',
        'client_secret': 't17CQXdWsPmvRznO6NRN2W4g',
        'grant_type': 'refresh_token',
        'refresh_token': `${google_refresh_token}`
    });

    var token_config = {
        method: 'post',
        url: urlToken,
        headers: {
            'charset': 'UTF-8',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };
    //Создание промиса для асинхронного выполнения кода
    var mainPromise = new Promise((resolve, reject) => {
        axios(token_config)//POST-запрос на получение токена для последующих GET-запросов
            .then((response) => {
                let token = response.data.access_token; //Получение токена в переменную
                let urlDataMilestone = encodeURI(`${urlSheet}!A:A?access_token=${token}`);
                let urlDataPractice = encodeURI(`${urlSheet}!C:C?access_token=${token}`);
                let urlDataProvider = encodeURI(`${urlSheet}!E:E?access_token=${token}`);
                let urlDataResource = encodeURI(`${urlSheet}!F:F?access_token=${token}`);
                let urlDataResourceDemand = encodeURI(`${urlSheet}!G:G?access_token=${token}`);
                let urlDataProcess = encodeURI(`${urlSheet}!I:I?access_token=${token}`);
                let urlDataProduct = encodeURI(`${urlSheet}!K:K?access_token=${token}`);
                let urlDataProductDemand = encodeURI(`${urlSheet}!L:L?access_token=${token}`);
                let urlDataUser = encodeURI(`${urlSheet}!M:M?access_token=${token}`)
                let urlDataUserDemand = encodeURI(`${urlSheet}!L:L?access_token=${token}`)
                axios.get(urlDataProcess)
                    .then((response) => { requestData.dataProcess = response.data.values; })
                    .then(() => {
                        axios.get(urlDataMilestone)
                            .then((response) => { requestData.dataMilestone = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataPractice)
                            .then((response) => { requestData.dataPractice = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataProvider)
                            .then((response) => { requestData.dataProvider = response.data.values })

                    })
                    .then(() => {
                        axios.get(urlDataResource)
                            .then((response) => { requestData.dataResource = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataResourceDemand)
                            .then((response) => { requestData.dataResourceDemand = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataProduct)
                            .then((response) => { requestData.dataProduct = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataProductDemand)
                            .then((response) => { requestData.dataProductDemand = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataUser)
                            .then((response) => { requestData.dataUser = response.data.values; })
                    })
                    .then(() => {

                        axios.get(urlDataUserDemand)
                            .then((response) => { requestData.dataUserDemand = response.data.values; })
                    })
                    .then(() => {
                        axios.get(encodeURI(`${urlSheetColor}!A:A&access_token=${token}`))
                            .then((response) => {
                                tempDataValueMilestone = response.data.sheets[0].data[0];
                                requestData.colorValuesMilestone = getBackground(tempDataValueMilestone); //Цвет Вехов
                            })
                    })
                    .then(() => {
                        axios.get(encodeURI(`${urlSheetColor}!I:I&access_token=${token}`))
                            .then((response) => {
                                tempDataValueProcess = response.data.sheets[0].data[0];
                                requestData.colorValuesProcess = getBackground(tempDataValueProcess); //Цвет Процесса
                                resolve(lastRow = requestData.colorValuesProcess.length);
                            })
                    })
            })//Верхний аксиос
            .catch((error) => {
                console.log(error);
            });
    });//Промис закончился
    //Тут можно исполнять код после того, как код в вышеупомянутом промисе окончил свою работу
    mainPromise.then(() => {
        var SubProcessItem =
        {
            Name: requestData.dataProcess,
            Milestone: requestData.dataMilestone,
            Practice: requestData.dataPractice, //массив с содержимым всех ячеек соответствующего столбца
            Provider: requestData.dataProvider, //массив с содержимым всех ячеек соответствующего столбца
            Resource: requestData.dataResource, //массив с содержимым всех ячеек соответствующего столбца
            ResourceDemand: requestData.dataResourceDemand, //массив с содержимым всех ячеек соответствующего столбца
            Product: requestData.dataProduct, //массив с содержимым всех ячеек соответствующего столбца
            UserDemand: requestData.dataUserDemand, //массив с содержимым всех ячеек соответствующего столбца
            User: requestData.dataUser, //массив с содержимым всех ячеек соответствующего столбца
            isMilestoneBlank: isBlank(lastRow, requestData.dataMilestone), //массив с булл содержимым пустая/непустая ячеек столбца
            isProcessBlank: isBlank(lastRow, requestData.dataProcess),
            ColorProcess: requestData.colorValuesProcess, //цвета процессов
            ColorMilestone: requestData.colorValuesMilestone,
            MilestoneTitleCount: milestoneTitleCount(lastRow, requestData.dataMilestone),
            MilestoneTitle: milestoneTitle(requestData.dataMilestone, lastRow)
        }
        var ProcessTitleCount = getTitlesCountsProcess(lastRow, SubProcessItem)
        var ProcessTitle = getTitlesProcess(lastRow, SubProcessItem);
        SubProcessItem.MilestoneTitleCount.push(ProcessTitleCount[ProcessTitleCount.length - 1])
        console.log(SubProcessItem.MilestoneTitleCount)
        // var ProcessTitleCountEnd = getTitlesCountsProcessOnlyEnd(lastRow, SubProcessItem);

        /* Start */

        for (x = 0; x < SubProcessItem.MilestoneTitleCount.length - 1; x++)//Перебор первого массива с титлами Вехов
        {
            toSendDataMilestone = SubProcessItem.MilestoneTitle[x];
            var CountForShape = 1;
            for (y = 0; y < ProcessTitleCount.length - 1; y = y + 2) //Перебор второго массива с титлами Процесса
            {
                if (ProcessTitleCount[y] >= SubProcessItem.MilestoneTitleCount[x]
                    && ProcessTitleCount[y + 1] <= SubProcessItem.MilestoneTitleCount[x + 1]) {
                    for (let z = ProcessTitleCount[y] + 1; z < ProcessTitleCount[y + 1]; z++) //Перебор одного блока массива
                    {
                        if (SubProcessItem.isProcessBlank[z] != null || SubProcessItem.isProcessBlank[z] != undefined) {
                            console.log(SubProcessItem.Name[z], x, y, z);
                            CountForShape++;
                        }
                    }
                }
            }
        }










    })
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function getBackground(tempData) {
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
function isBlank(lastRow, data) {
    var tempArray = [];

    for (var Jungle = 0; Jungle < lastRow; Jungle++) {
        if (data[Jungle] == null || data[Jungle] == '' || data[Jungle] == undefined) { tempArray.push(false); }
        else { tempArray.push(true); }
    }
    return tempArray;
}
function milestoneTitleCount(lastRow, dataMilestone) {
    var tempArray = [];
    milestoneBlanks = isBlank(lastRow, dataMilestone);
    for (var Jungle = 0; Jungle < lastRow; Jungle++) {
        if (milestoneBlanks[Jungle] == true) { tempArray.push(Jungle); }
    }
    return tempArray;
}
function milestoneTitle(data, lastRow) {
    var tempArray = [];
    milestoneBlanks = isBlank(lastRow, data);
    for (var Jungle = 0; Jungle < lastRow; Jungle++) {
        if (milestoneBlanks[Jungle] == true) { tempArray.push(data[Jungle]); }
    }
    return tempArray;
}
function getTitlesCountsProcess(lastRow, SubProcessItem) {
    var tempArray = [];
    for (let n = 0; n < lastRow; n++) {
        if (SubProcessItem.ColorProcess[n] == '#d9ead3') { tempArray.push(n); }
    }
    return tempArray;
}
function getTitlesProcess(lastRow, SubProcessItem) {
    var tempArray = [];
    for (let n = 0; n < lastRow; n++) {
        if (SubProcessItem.ColorProcess[n] == '#d9ead3'
            && SubProcessItem.isProcessBlank[n] == true) { tempArray.push(SubProcessItem.Name[n]) }
    }
    return tempArray;
}
function getTitlesCountsProcessOnlyEnd(lastRow, SubProcessItem) {
    var tempArray = [];
    for (let n = 0; n < lastRow; n++) {
        if (SubProcessItem.ColorProcess[n] == '#d9ead3'
            && SubProcessItem.isProcessBlank[n] == false) { tempArray.push(n) }
    }
    return tempArray;
}