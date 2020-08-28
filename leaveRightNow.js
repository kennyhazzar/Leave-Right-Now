var axios = require('axios');
var qs = require('qs');
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
async function a() {

    var token1;
    var tempDataValueProcess;
    var colorValuesProcess = [];
    var dataProcess;
    var dataPractice;
    var dataProvider;
    var dataResource;
    var dataResourceDemand;
    var dataProduct;
    var dataProductDemand;
    var colorDataPractice;
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
                let urlDataPractice = encodeURI(`${urlSheet}!C:C?access_token=${token}`);
                let urlDataProvider = encodeURI(`${urlSheet}!E:E?access_token=${token}`);
                let urlDataResource = encodeURI(`${urlSheet}!F:F?access_token=${token}`);
                let urlDataResourceDemand = encodeURI(`${urlSheet}!G:G?access_token=${token}`);
                let urlDataProcess = encodeURI(`${urlSheet}!I:I?access_token=${token}`);
                let urlDataProduct = encodeURI(`${urlSheet}!K:K?access_token=${token}`);
                let urlDataProductDemand = encodeURI(`${urlSheet}!L:L?access_token=${token}`);
                let urlColorPractice = encodeURI(`${urlColorSheet}!C:C?access_token=${token}`)
                axios.get(urlDataProcess)//Запрос на получение данных со столбца Процесс
                    .then((response) => {
                        dataProcess = response.data.values;// Получение данных из ответа
                    })
                    .then(() => {
                        axios.get(urlDataPractice)//Запрос на получение данных со столбца Практика
                            .then((response) => {
                                dataPractice = response.data.values;// Получение данных из ответа
                            })
                    })
                    .then(() => {
                        axios.get(urlDataProvider)//Запрос на получение данных со столбца Поставщик
                            .then((response) => {
                                dataProvider = response.data.values// Получение данных из ответа
                            })

                    })
                    .then(() => {
                        axios.get(urlDataResource)//Запрос на получение данных со столбца Ресурс
                            .then((response) => {
                                dataResource = response.data.values;// Получение данных из ответа
                            })
                    })
                    .then(() => {
                        axios.get(urlDataResourceDemand)//Запрос на получение данных со столбца Ресурс:Требования
                            .then((response) => {
                                dataResourceDemand = response.data.values;// Получение данных из ответа
                            })
                    })
                    .then(() => {
                        axios.get(urlDataProduct)//Запрос на получение данных со столбца Продукт
                            .then((response) => {
                                dataProduct = response.data.values;// Получение данных из ответа
                            })
                    })
                    .then(() => {
                        axios.get(urlDataProductDemand)//Запрос на получение данных со столбца Продукт::Требования
                            .then((response) => {
                                //конец работы с помощью resolve
                                dataProductDemand = response.data.values;// Получение данных из ответа
                            })
                    })
                    .then(() => {
                        axios.get(encodeURI(`${urlSheetColor}!I:I&access_token=${token}`))
                            .then((response) => {
                                tempDataValueProcess = response.data.sheets[0].data[0];
                                for (let n = 0; n <= tempDataValueProcess.rowData.length; n++) {
                                    try {
                                        r = Math.floor(tempDataValueProcess.rowData[n].values[0].userEnteredFormat.backgroundColor.red * 255);
                                        g = Math.floor(tempDataValueProcess.rowData[n].values[0].userEnteredFormat.backgroundColor.green * 255);
                                        b = Math.floor(tempDataValueProcess.rowData[n].values[0].userEnteredFormat.backgroundColor.blue * 255);
                                        colorValuesProcess.push(rgbToHex(r, g ,b));
                                    }
                                    catch (error) {
                                        colorValuesProcess.push('#ffffff');
                                    }
                                    try {
                                        r = Math.floor(tempDataValueProcess.rowData[n].values[0].userEnteredFormat.backgroundColor.red * 255);
                                        g = Math.floor(tempDataValueProcess.rowData[n].values[0].userEnteredFormat.backgroundColor.green * 255);
                                        b = Math.floor(tempDataValueProcess.rowData[n].values[0].userEnteredFormat.backgroundColor.blue * 255);
                                        colorValuesProcess.push(rgbToHex(r, g ,b));
                                    }
                                    catch (error) {
                                        colorValuesProcess.push('#ffffff');
                                    }
                                    try {
                                        r = Math.floor(tempDataValueProcess.rowData[n].values[0].userEnteredFormat.backgroundColor.red * 255);
                                        g = Math.floor(tempDataValueProcess.rowData[n].values[0].userEnteredFormat.backgroundColor.green * 255);
                                        b = Math.floor(tempDataValueProcess.rowData[n].values[0].userEnteredFormat.backgroundColor.blue * 255);
                                        colorValuesProcess.push(rgbToHex(r, g ,b));
                                    }
                                    catch (error) {
                                        colorValuesProcess.push('#ffffff');
                                    }
                                }
                                console.log(colorValuesProcess);



                            })
                    })

            })
            .catch((error) => {
            });
    })

    mainPromise.then(() => {
        // console.log(dataProductDemand)

    })


}
a()