var axios = require('axios');
var qs = require('qs');
var fs = require('fs');
function toSendMiro(wdata, wconfig, xx) {
    if (wdata[xx][0] != undefined
        || wdata[xx][0] != null) {
        axios(wconfig)
            .then((response) => {
                console.log(response.data.type, xx, wdata[xx][0]);
            });
    }
}
exports.sendData = (requestData, murl, countForShape, lrow, xx) => {
    var mvar = require('./miroVariables');
    DataBody = {
        Shape: {
            "type": "shape",
            "x": mvar.distance.fshape.x + mvar.distance.checkpoint * countForShape,
            "y": mvar.distance.fshape.y,
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
            "y": mvar.distance.fshape.y + mvar.distance.widget,
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
            "y": mvar.distance.fshape.y - mvar.distance.widget * 3,
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
            "y": mvar.distance.fshape.y - mvar.distance.widget * 2,
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
            "y": mvar.distance.fshape.y - mvar.distance.widget,
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
            "y": mvar.distance.fshape.y + mvar.distance.widget * 2,
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
            "y": mvar.distance.fshape.y + mvar.distance.widget * 3,
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
        }
    };
    axios(mconfig.shape)
        .then((response) => {
            console.log(response.data.type, xx);
        });
        toSendMiro(requestData.toSendDataPractice, mconfig.practice, xx);
        toSendMiro(requestData.toSendDataProvider, mconfig.provider, xx);
        toSendMiro(requestData.toSendDataResource, mconfig.resource, xx);
        toSendMiro(requestData.toSendDataProcess, mconfig.process, xx);
        toSendMiro(requestData.toSendDataProduct, mconfig.product, xx);
        toSendMiro(requestData.toSendDataUser, mconfig.user, xx);

    // if (requestData.toSendDataPractice[xx][0] != undefined
    //     || requestData.toSendDataPractice[xx][0] != null) {
    //     axios(mconfig.practice)
    //         .then((response) => {
    //             console.log(response.data.type, xx, requestData.toSendDataPractice[xx][0]);
    //         })
    // }
    // if (requestData.toSendDataPractice[xx][0] != undefined
    //     || requestData.toSendDataProvider[xx][0] != null) {
    //     axios(mconfig.provider)
    //         .then((response) => {
    //             console.log(response.data.type, xx, requestData.toSendDataProvider[xx][0]);
    //         })
    // }
    // if (requestData.toSendDataResource[xx][0] != undefined
    //     || requestData.toSendDataResource[xx][0] != null) {
    //     axios(mconfig.resource)
    //         .then((response) => {
    //             console.log(response.data.type, xx, requestData.toSendDataResource[xx][0]);
    //         })
    // }
    // if (requestData.toSendDataProcess[xx][0] != undefined
    //     || requestData.toSendDataProcess[xx][0] != null) {
    //     axios(mconfig.process)
    //         .then((response) => {
    //             console.log(response.data.type, xx, requestData.toSendDataProcess[xx][0]);
    //         })
    // }
    // if (requestData.toSendDataProduct[xx][0] != undefined
    //     || requestData.toSendDataProduct[xx][0] != null) {
    //     axios(mconfig.product)
    //         .then((response) => {
    //             console.log(response.data.type, xx, requestData.toSendDataProduct[xx][0]);
    //         })
    // }
    // if (requestData.toSendDataUser[xx][0] != undefined
    //     || requestData.toSendDataUser[xx][0] != null) {
    //     axios(mconfig.user)
    //         .then((response) => {
    //             console.log(response.data.type, xx, requestData.toSendDataUser[xx][0]);
    //         })
    // }
    // axios(mconfig.shape)
    // .then((response) => {
    //     console.log(response.data.type, xx);
    // });
    // axios(mconfig.practice)
    //     .then((response) => {
    //         console.log(response.data.type, xx);
    //     });
    // axios(mconfig.provider)
    //     .then((response) => {
    //         console.log(response.data.type, xx);
    //     });
    // axios(mconfig.resource)
    //     .then((response) => {
    //         console.log(response.data.type, xx);
    //     });
    // axios(mconfig.process)
    //     .then((response) => {
    //         console.log(response.data.type, xx);
    //     });
    // axios(mconfig.product)
    //     .then((response) => {
    //         console.log(response.data.type, xx);
    //     });
    // axios(mconfig.user)
    //     .then((response) => {
    //         console.log(response.data.type, xx);
    //     });

}