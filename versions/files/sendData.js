var axios = require('axios');
var qs = require('qs');
var fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');
function toSendMiro(wdata, wconfig, xx, id1) {
        try {
            if (wdata[xx][0] != undefined || wdata[xx][0] != null) {
                axios(wconfig).then((response) => {
                    id1 = response.data.id;
                    //console.log(response.data.type, xx, wdata[xx][0], response.data.id);
                });
            }
        } catch (err) { }
}
exports.sendData = (requestData, murl, countForShape, lrow, xx, countForMilestone, SubProcessItem) => {
    var mid1;
    var mid2;
    var wid1;
    var wid2;
    var what;
    var mvar = require('./miroVariables');
    var mdist = mvar.distance.fshape.y;
    var DataBody = {
        Shape: {
            "type": "shape",
            "x": mvar.distance.fshape.x + mvar.distance.checkpoint * countForShape,
            "y": mdist + countForMilestone * mvar.distance.dymilestone,
            "width": 34,
            "rotation": 0.0,
            "height": 36,
            "text": "",
            "style": {
                "backgroundColor": mvar.Color.HEX.CheckPointShape,
                "backgroundOpacity": 1.0,
                "borderColor": mvar.Color.HEX.CheckPointShape,
                "borderOpacity": 1.0,
                "borderStyle": "normal",
                "borderWidth": 4,
                "shapeType": "circle"
            }

        },
        SecondShape: {
            "type": "shape",
            "x": mvar.distance.fshape.x + mvar.distance.checkpoint * countForShape + mvar.distance.checkpoint,
            "y": mdist + countForMilestone * mvar.distance.dymilestone,
            "width": 34,
            "rotation": 0.0,
            "height": 36,
            "text": "",
            "style": {
                "backgroundColor": mvar.Color.HEX.CheckPointShape,
                "backgroundOpacity": 1.0,
                "borderColor": mvar.Color.HEX.CheckPointShape,
                "borderOpacity": 1.0,
                "borderStyle": "normal",
                "borderWidth": 4,
                "shapeType": "circle"
            }

        },
        Practice: {
            "type": "text",
            "x": mvar.distance.fshape.x + mvar.distance.checkpoint * countForShape,
            "y": mdist + countForMilestone * mvar.distance.dymilestone + mvar.distance.widget,
            "width": 98.7,
            "style": {
                "backgroundColor": mvar.Color.HEX.Practice,
                "backgroundOpacity": 1.0,
                "borderOpacity": 1.0,
                "borderStyle": "normal",
                "borderWidth": 2.0,
                "fontFamily": "OpenSans",
                "fontSize": 23,
                "textAlign": "center",
                "textColor": "#1a1a1a"
            },
            "text": `<p><span style=\"background-color:transparent\">${requestData.toSendDataPractice[xx]}</span></p>`
            // "text": `<p><span style=\"background-color:transparent\">undefined</span></p>`

        },
        Provider: {
            "type": "text",
            "x": mvar.distance.fshape.x + mvar.distance.checkpoint * countForShape,
            "y": mdist + countForMilestone * mvar.distance.dymilestone - mvar.distance.widget * 3,
            "width": 98.7,
            "style": {
                // fef445 yellow if lime is bad
                "backgroundColor": mvar.Color.HEX.Provider,
                "backgroundOpacity": 1.0,
                "borderOpacity": 1.0,
                "borderStyle": "normal",
                "borderWidth": 2.0,
                "fontFamily": "OpenSans",
                "fontSize": 23,
                "textAlign": "center",
                "textColor": "#1a1a1a"
            },
            "text": `<p><span style=\"background-color:transparent\">${requestData.toSendDataProvider[xx]}</span></p>`
            // "text": `<p><span style=\"background-color:transparent\">undefined</span></p>`
        },
        Resource: {
            "type": "text",
            "x": mvar.distance.fshape.x + mvar.distance.checkpoint * countForShape,
            "y": mdist + countForMilestone * mvar.distance.dymilestone - mvar.distance.widget * 2,
            "width": 98.7,
            "style": {
                "backgroundColor": mvar.Color.HEX.Resource,
                "backgroundOpacity": 1.0,
                "borderOpacity": 1.0,
                "borderStyle": "normal",
                "borderWidth": 2.0,
                "fontFamily": "OpenSans",
                "fontSize": 23,
                "textAlign": "center",
                "textColor": "#1a1a1a"
            },
            "text": `<p><span style=\"background-color:transparent\">${requestData.toSendDataResource[xx]}</span></p>`
            // "text": `<p><span style=\"background-color:transparent\">undefined</span></p>`
        },
        Process: {
            "type": "text",
            "x": mvar.distance.fshape.x + mvar.distance.checkpoint * countForShape,
            "y": mdist + countForMilestone * mvar.distance.dymilestone - mvar.distance.widget,
            "width": 98.7,
            "style": {
                "backgroundColor": mvar.Color.HEX.Process,
                "backgroundOpacity": 1.0,
                "borderOpacity": 1.0,
                "borderStyle": "normal",
                "borderWidth": 2.0,
                "fontFamily": "OpenSans",
                "fontSize": 23,
                "textAlign": "center",
                "textColor": "#ffffff"
            },
            "text": `<p><span style=\"background-color:transparent\">${requestData.toSendDataProcess[xx]}</span></p>`
            // "text": `<p><span style=\"background-color:transparent\">undefined</span></p>`
        },
        Product: {
            "type": "text",
            "x": mvar.distance.fshape.x + mvar.distance.checkpoint * countForShape,
            "y": mdist + countForMilestone * mvar.distance.dymilestone + mvar.distance.widget * 2,
            "width": 98.7,
            "style": {
                "backgroundColor": mvar.Color.HEX.Product,
                "backgroundOpacity": 1.0,
                "borderOpacity": 1.0,
                "borderStyle": "normal",
                "borderWidth": 2.0,
                "fontFamily": "OpenSans",
                "fontSize": 23,
                "textAlign": "center",
                "textColor": "#1a1a1a"
            },
            "text": `<p><span style=\"background-color:transparent\">${requestData.toSendDataProduct[xx]}</span></p>`
            // "text": `<p><span style=\"background-color:transparent\">undefined</span></p>`
        },
        User: {
            "type": "text",
            "x": mvar.distance.fshape.x + mvar.distance.checkpoint * countForShape,
            "y": mdist + countForMilestone * mvar.distance.dymilestone + mvar.distance.widget * 3,
            "width": 98.7,
            "style": {
                "backgroundColor": mvar.Color.HEX.User,
                "backgroundOpacity": 1.0,
                "borderOpacity": 1.0,
                "borderStyle": "normal",
                "borderWidth": 2.0,
                "fontFamily": "OpenSans",
                "fontSize": 23,
                "textAlign": "center",
                "textColor": "#ffffff"
            },
            "text": `<p><span style=\"background-color:transparent\">${requestData.toSendDataUser[xx]}</span></p>`
            // "text": `<p><span style=\"background-color:transparent\">undefined</span></p>`
        }
    };
    var mconfig =
    {
        shape: {
            method: 'post',
            url: murl,
            headers: { 'authorization': `${mvar.token}` },
            data: DataBody.Shape
        },
        user: {
            method: 'post',
            url: murl,
            headers: { 'authorization': `${mvar.token}` },
            data: DataBody.User
        },
        product: {
            method: 'post',
            url: murl,
            headers: { 'authorization': `${mvar.token}` },
            data: DataBody.Product
        },
        process: {
            method: 'post',
            url: murl,
            headers: { 'authorization': `${mvar.token}` },
            data: DataBody.Process
        },
        practice: {
            method: 'post',
            url: murl,
            headers: { 'authorization': `${mvar.token}` },
            data: DataBody.Practice
        },
        resource: {
            method: 'post',
            url: murl,
            headers: { 'authorization': `${mvar.token}` },
            data: DataBody.Resource
        },
        provider: {
            method: 'post',
            url: murl,
            headers: { 'authorization': `${mvar.token}` },
            data: DataBody.Provider
        },
        sshape: {
            method: 'post',
            url: murl,
            headers: { 'authorization': `${mvar.token}` },
            data: DataBody.SecondShape
        },
    };
    var aLine;
    var line;
    axios(mconfig.shape)
        .then((response) => {
            mid1 = response.data.id;
            console.log(response.data.type, xx);
        })
        .then(() => {
            axios(mconfig.sshape)
                .then((response) => {
                    mid2 = response.data.id;
                    aLine = {
                        "type": "line",
                        "startWidget": {
                            "id": `${mid1}`
                        },
                        "endWidget": {
                            "id": `${mid2}`
                        },
                        "style": {
                            "borderColor": "#414bb2",
                            "borderStyle": "normal",
                            "borderWidth": 2.0,
                            "lineEndType": "opaque_block",
                            "lineStartType": "opaque_circle",
                            "lineType": "straight"
                        }
                    };
                    line = {
                        method: 'post',
                        url: murl,
                        headers: { 'authorization': `${mvar.token}` },
                        data: aLine
                    };
                    return line
                })
                .then(() => {
                    axios(line)
                        .then(() => {
                            console.log('then ', aLine.startWidget.id)
                            console.log('then ', aLine.endWidget.id)
                        })
                })
        })
    // Поставщик и Пользователь СОЕДЕНИТЬ ЛИНИЕЙ (provider, user)


    var wpromise = new Promise((resolve, reject) => {
        toSendMiro(requestData.toSendDataPractice, mconfig.practice, xx, what);
        toSendMiro(requestData.toSendDataResource, mconfig.resource, xx, what);
        toSendMiro(requestData.toSendDataProcess, mconfig.process, xx, what);
        resolve(toSendMiro(requestData.toSendDataProduct, mconfig.product, xx, what));
    });
    wpromise.then(() => {
        wid1 = toSendMiro(requestData.toSendDataProvider, mconfig.provider, xx, what);
        wid2 = toSendMiro(requestData.toSendDataUser, mconfig.user, xx, what);
        console.log(wid1, wid2);
        var dline = {
            "type": "line",
            "startWidget": {
                "id": `${wid1}`
            },
            "endWidget": {
                "id": `${wid2}`
            },
            "style": {
                "borderColor": "#808080",
                "borderStyle": "dashed",
                "borderWidth": 2.0,
                "lineEndType": "none",
                "lineStartType": "none",
                "lineType": "straight"
            }
        };

    })
}