var axios = require('axios');
var qs = require('qs');
var fs = require('fs');
var vmiro = require('./files/miroVariables.js');
var bmiro = require('./files/sendData.js');
const { resolve } = require('path');
const { isUndefined } = require('util');
//цвета для создания виджетов в Миро
a();
async function a() {
    //\\
    var responseData =
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
        dataUser: [],
        lastRow: null
    };
    //\\
    var requestData =
    {
        toSendDataMilestone: [],
        toSendDataProcess: [],
        toSendDataPractice: [],
        toSendDataProvider: [],
        toSendDataResource: [],
        toSendDataResourceDemand: [],
        toSendDataProduct: [],
        toSendDataProductDemand: [],
        toSendDataUserDemand: [],
        toSendDataUser: []
    }
    var rg = //request Google
    {
        tid: '12_1YRHmFzCQMJb4D5oAQqxd3-y-mkaM82RPlRv5XmPI',
        sid: 'SIPOC (для Miro)',
        urlSheetColor: 'https://sheets.googleapis.com/v4/spreadsheets/12_1YRHmFzCQMJb4D5oAQqxd3-y-mkaM82RPlRv5XmPI?includeGridData=true&ranges=SIPOC (для Miro)',
        urlSheet: 'https://sheets.googleapis.com/v4/spreadsheets/12_1YRHmFzCQMJb4D5oAQqxd3-y-mkaM82RPlRv5XmPI/values/SIPOC (для Miro)',
        google_refresh_token: '1//0c-HAMQqviQPXCgYIARAAGAwSNwF-L9IrxwXh5A9PWgDu8gBYxVkMuGnpPz9MD-d0PgUyLf5qRnncSd-fTqYrvjFuIjzT8MxEYk0',
        urlToken: 'https://oauth2.googleapis.com/token'
    }
    var murl = 'https://api.miro.com/v1/boards/o9J_kp5pAx8=/widgets/';//ссылка для запросов к Миро
    var data = qs.stringify({
        'client_id': '499089821174-g49og4ec559f1knirmjntgdedo7mjjh7.apps.googleusercontent.com',
        'client_secret': 't17CQXdWsPmvRznO6NRN2W4g',
        'grant_type': 'refresh_token',
        'refresh_token': `${rg.google_refresh_token}`
    });
    var token_config = {
        method: 'post',
        url: rg.urlToken,
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
                let urlDataMilestone = encodeURI(`${rg.urlSheet}!A:A?access_token=${token}`);
                let urlDataPractice = encodeURI(`${rg.urlSheet}!C:C?access_token=${token}`);
                let urlDataProvider = encodeURI(`${rg.urlSheet}!E:E?access_token=${token}`);
                let urlDataResource = encodeURI(`${rg.urlSheet}!F:F?access_token=${token}`);
                let urlDataResourceDemand = encodeURI(`${rg.urlSheet}!G:G?access_token=${token}`);
                let urlDataProcess = encodeURI(`${rg.urlSheet}!I:I?access_token=${token}`);
                let urlDataProduct = encodeURI(`${rg.urlSheet}!K:K?access_token=${token}`);
                let urlDataProductDemand = encodeURI(`${rg.urlSheet}!L:L?access_token=${token}`);
                let urlDataUser = encodeURI(`${rg.urlSheet}!M:M?access_token=${token}`)
                let urlDataUserDemand = encodeURI(`${rg.urlSheet}!L:L?access_token=${token}`)
                axios.get(urlDataProcess)
                    .then((response) => { responseData.dataProcess = response.data.values; })
                    .then(() => {
                        axios.get(urlDataMilestone)
                            .then((response) => { responseData.dataMilestone = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataPractice)
                            .then((response) => { responseData.dataPractice = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataProvider)
                            .then((response) => { responseData.dataProvider = response.data.values })

                    })
                    .then(() => {
                        axios.get(urlDataResource)
                            .then((response) => { responseData.dataResource = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataResourceDemand)
                            .then((response) => { responseData.dataResourceDemand = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataProduct)
                            .then((response) => { responseData.dataProduct = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataProductDemand)
                            .then((response) => { responseData.dataProductDemand = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataUser)
                            .then((response) => { responseData.dataUser = response.data.values; })
                    })
                    .then(() => {

                        axios.get(urlDataUserDemand)
                            .then((response) => { responseData.dataUserDemand = response.data.values; })
                    })
                    .then(() => {
                        axios.get(encodeURI(`${rg.urlSheetColor}!A:A&access_token=${token}`))
                            .then((response) => {
                                tempDataValueMilestone = response.data.sheets[0].data[0];
                                responseData.colorValuesMilestone = getBackground(tempDataValueMilestone); //Цвет Вехов
                            })
                    })
                    .then(() => {
                        axios.get(encodeURI(`${rg.urlSheetColor}!I:I&access_token=${token}`))
                            .then((response) => {
                                tempDataValueProcess = response.data.sheets[0].data[0];
                                responseData.colorValuesProcess = getBackground(tempDataValueProcess); //Цвет Процесса
                                resolve(responseData.lastRow = responseData.colorValuesProcess.length);
                            })
                    })
            })//Верхний аксиос
            .catch((error) => {
                console.log(error);
            });
    });//Промис закончился
    //Тут можно исполнять код после того, как код в вышеупомянутом промисе окончил свою работу
    mainPromise.then(() => {
        console.log(`Загрузка таблицы ${rg.tid} с листа ${rg.sid} прошла успешно.`)
        var SubProcessItem =
        {
            Name: responseData.dataProcess,
            Milestone: responseData.dataMilestone,
            Practice: responseData.dataPractice, //массив с содержимым всех ячеек соответствующего столбца
            Provider: responseData.dataProvider, //массив с содержимым всех ячеек соответствующего столбца
            Resource: responseData.dataResource, //массив с содержимым всех ячеек соответствующего столбца
            ResourceDemand: responseData.dataResourceDemand, //массив с содержимым всех ячеек соответствующего столбца
            Product: responseData.dataProduct, //массив с содержимым всех ячеек соответствующего столбца
            UserDemand: responseData.dataUserDemand, //массив с содержимым всех ячеек соответствующего столбца
            User: responseData.dataUser, //массив с содержимым всех ячеек соответствующего столбца
            isMilestoneBlank: isBlank(responseData.lastRow, responseData.dataMilestone), //массив с булл содержимым пустая/непустая ячеек столбца
            isProcessBlank: isBlank(responseData.lastRow, responseData.dataProcess),
            ColorProcess: responseData.colorValuesProcess, //цвета процессов
            ColorMilestone: responseData.colorValuesMilestone,
            MilestoneTitleCount: milestoneTitleCount(responseData.lastRow, responseData.dataMilestone),
            MilestoneTitle: milestoneTitle(responseData.dataMilestone, responseData.lastRow)
        }
        var ProcessTitleCount = getTitlesCountsProcess(responseData.lastRow, SubProcessItem);
        SubProcessItem.MilestoneTitleCount.push(ProcessTitleCount[ProcessTitleCount.length - 1]);
        console.log('Структура сформирована.');
        var tt = getTitlesCountsProcessOnlyEnd(responseData.lastRow, SubProcessItem);
        console.log(tt[tt.length - 1]);
        /* Start */
        // console.log(SubProcessItem.isProcessBlank)
        // for(x = 0; x < 11; x++) { console.log(SubProcessItem.Name[x][0]); }
        var countForShape = 1;
        for (x = 0; x < SubProcessItem.MilestoneTitleCount.length - 1; x++)//Перебор первого массива с титлами Вехов
        {
            requestData.toSendDataMilestone = SubProcessItem.MilestoneTitle[x];
            for (y = 0; y < ProcessTitleCount.length - 1; y = y + 2) //Перебор второго массива с титлами Процесса
            {
                if (ProcessTitleCount[y] >= SubProcessItem.MilestoneTitleCount[x]
                    && ProcessTitleCount[y + 1] <= SubProcessItem.MilestoneTitleCount[x + 1]) {
                    for (let z = ProcessTitleCount[y] + 1; z < ProcessTitleCount[y + 1]; z++) //Перебор одного блока массива
                    {
                        requestData.toSendDataProcess.push(SubProcessItem.Name[z]);
                        requestData.toSendDataPractice.push(SubProcessItem.Practice[z]);
                        requestData.toSendDataProvider.push(SubProcessItem.Provider[z]);
                        requestData.toSendDataResource.push(SubProcessItem.Resource[z]);
                        requestData.toSendDataProduct.push(SubProcessItem.Product[z]);
                        requestData.toSendDataUser.push(SubProcessItem.User[z]);
                    }
                }
            }
        }
       
        // console.log(requestData.toSendDataProcess)
        // fs.writeFileSync(requestData, './files/logRequestData.txt')
        var countForMilestone = -1;
        var countForShape = 1;
        var xx = -1;
        var lrow = ProcessTitleCount[ProcessTitleCount.length - 1];
        console.log(lrow);
        var ivl = setInterval(() => {
            if (xx > lrow) {
                clearInterval(ivl);
            }
            else {
                xx++;
                countForShape++;
                console.log(xx, countForShape);
                if (SubProcessItem.MilestoneTitleCount.indexOf(xx) != -1) {
                    countForMilestone++;
                    countForShape = 2;
                    console.log("DASD", countForMilestone, countForShape);
                }
                bmiro.sendData(requestData, murl, countForShape,
                    ProcessTitleCount[ProcessTitleCount.length - 1], xx, countForMilestone, SubProcessItem);
                
            }
        }, vmiro.rspeed.wstandart);
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
            if (rgbToHex(r, g, b) == '#NaNNaNNaN') { tempArray.push('#000000'); }
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
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }