var mvar = require('./miroVariables');
// var rvar = require('./versions/leaveRightNowTesting')
exports.DataBody = {
    Shape: {
        "type": "shape",
        "x": mvar.distance.fshape.x + mvar.distance.checkpoint * mvar.countForShape,
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
        "x": mvar.distance.fshape.x + mvar.distance.checkpoint,
        "y": mvar.distance.fshape.y + mvar.distance.widget,
        "width": 98.69999999999999,
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
        // "text": `<p><span style=\"background-color:transparent\">${rvar.requestData.toSendDataPractice}</span></p>`
                "text": `<p><span style=\"background-color:transparent\">undefined</span></p>`
        
    },
    Provider: {
        "type": "text",
        "x": mvar.distance.fshape.x + mvar.distance.checkpoint,
        "y": mvar.distance.fshape.y - mvar.distance.widget * 3,
        "width": 98.69999999999999,
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
        // "text": `<p><span style=\"background-color:transparent\">${rvar.requestData.toSendDataProvider}</span></p>`
                "text": `<p><span style=\"background-color:transparent\">undefined</span></p>`
    },
    Resource: {
        "type": "text",
        "x": mvar.distance.fshape.x + mvar.distance.checkpoint,
        "y": mvar.distance.fshape.y - mvar.distance.widget * 2,
        "width": 98.69999999999999,
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
        // "text": `<p><span style=\"background-color:transparent\">${rvar.requestData.toSendDataResource}</span></p>`
                "text": `<p><span style=\"background-color:transparent\">undefined</span></p>`
    },
    Process: {
        "type": "text",
        "x": mvar.distance.fshape.x + mvar.distance.checkpoint,
        "y": mvar.distance.fshape.y - mvar.distance.widget,
        "width": 98.69999999999999,
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
        // "text": `<p><span style=\"background-color:transparent\">${rvar.requestData.toSendDataProcess}</span></p>`
                "text": `<p><span style=\"background-color:transparent\">undefined</span></p>`
    },
    Product: {
        "type": "text",
        "x": mvar.distance.fshape.x + mvar.distance.checkpoint,
        "y": mvar.distance.fshape.y + mvar.distance.widget * 2,
        "width": 98.69999999999999,
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
        // "text": `<p><span style=\"background-color:transparent\">${rvar.requestData.toSendDataProduct}</span></p>`
                "text": `<p><span style=\"background-color:transparent\">undefined</span></p>`
    },
    User: {
        "type": "text",
        "x": mvar.distance.fshape.x + mvar.distance.checkpoint,
        "y": mvar.distance.fshape.y + mvar.distance.widget * 3,
        "width": 98.69999999999999,
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
        // "text": `<p><span style=\"background-color:transparent\">${rvar.requestData.toSendDataUser}</span></p>`
                "text": `<p><span style=\"background-color:transparent\">undefined</span></p>`
    }
}