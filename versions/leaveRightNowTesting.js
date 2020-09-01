var axios = require('axios');
var qs = require('qs');
var fs = require('fs');
const { isIPv4 } = require('net');
const { runInThisContext } = require('vm');
a();
async function a() {
    var tempDataValueProcess;
    var tempDataValueMilestone;
    var colorValuesProcess;
    var colorValuesMilestone;
    var dataMilestone;
    var dataProcess;
    var dataPractice;
    var dataProvider;
    var dataResource;
    var dataResourceDemand;
    var dataProduct;
    var dataProductDemand;
    var dataUserDemand;
    var dataUser;
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
                    .then((response) => { dataProcess = response.data.values; })
                    .then(() => {
                        axios.get(urlDataMilestone)
                            .then((response) => { dataMilestone = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataPractice)
                            .then((response) => { dataPractice = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataProvider)
                            .then((response) => { dataProvider = response.data.values })

                    })
                    .then(() => {
                        axios.get(urlDataResource)
                            .then((response) => { dataResource = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataResourceDemand)
                            .then((response) => { dataResourceDemand = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataProduct)
                            .then((response) => { dataProduct = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataProductDemand)
                            .then((response) => { dataProductDemand = response.data.values; })
                    })
                    .then(() => {
                        axios.get(urlDataUser)
                            .then((response) => { dataUser = response.data.values; })
                    })
                    .then(() => {

                        axios.get(urlDataUserDemand)
                            .then((response) => { dataUserDemand = response.data.values; })
                    })
                    .then(() => {
                        axios.get(encodeURI(`${urlSheetColor}!A:A&access_token=${token}`))
                            .then((response) => {
                                tempDataValueMilestone = response.data.sheets[0].data[0];
                                colorValuesMilestone = getBackground(tempDataValueMilestone); //Цвет Вехов
                            })
                    })
                    .then(() => {
                        axios.get(encodeURI(`${urlSheetColor}!I:I&access_token=${token}`))
                            .then((response) => {
                                tempDataValueProcess = response.data.sheets[0].data[0];
                                colorValuesProcess = getBackground(tempDataValueProcess); //Цвет Процесса
                                resolve(lastRow = colorValuesProcess.length);
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
            Name: dataProcess,
            Milestone: dataMilestone,
            Practice: dataPractice, //массив с содержимым всех ячеек соответствующего столбца
            Provider: dataProvider, //массив с содержимым всех ячеек соответствующего столбца
            Resource: dataResource, //массив с содержимым всех ячеек соответствующего столбца
            ResourceDemand: dataResourceDemand, //массив с содержимым всех ячеек соответствующего столбца
            Product: dataProduct, //массив с содержимым всех ячеек соответствующего столбца
            UserDemand: dataUserDemand, //массив с содержимым всех ячеек соответствующего столбца
            User: dataUser, //массив с содержимым всех ячеек соответствующего столбца
            isMilestoneBlank: isBlank(lastRow, dataMilestone), //массив с булл содержимым пустая/непустая ячеек столбца
            isProcessBlank: isBlank(lastRow, dataProcess),
            ColorProcess: colorValuesProcess, //цвета процессов
            ColorMilestone: colorValuesMilestone,
            MilestoneTitleCount: milestoneTitleCount(lastRow, dataMilestone),
            MilestoneTitle: milestoneTitle(dataMilestone, lastRow)
        }
        console.log(SubProcessItem.MilestoneTitleCount)
        var ProcessTitleCount = getTitlesCountsProcess(lastRow, SubProcessItem)
        for (var Amazonka = 0; Amazonka <= SubProcessItem.MilestoneTitleCount.length; Amazonka++) {
            for (var Missisipi = SubProcessItem.MilestoneTitleCount[Amazonka]; Missisipi < SubProcessItem.MilestoneTitleCount[Amazonka + 1]; Missisipi++) {
                //Отправка одного веха и переход к следующему, описано выше
                n = 0;
                for (var Araguaya = ProcessTitleCount[n]; Araguaya < SubProcessItem.MilestoneTitleCount[Amazonka + 1]; n++) {
                    
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
    tempArray.push(lastRow)
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
    console.log(tempArray)
    return tempArray;
}
