exports.DataBody = {
    Shape: {
        "type": "shape",
        "x": idFirstShape[0] + CheckpointDistance * CountForShape,
        "y": idFirstShape[1],
        "width": 34,
        "rotation": 0.0,
        "height": 36,
        "text": "",
        "style": {
            "backgroundColor": Color.HEX.CheckPointShape,
            "backgroundOpacity": 1.0,
            "borderColor": Color.HEX.CheckPointShape,
            "borderOpacity": 1.0,
            "borderStyle": "normal",
            "borderWidth": 4,
            "shapeType": "circle"
        }

    },
    Practice: {
        "type": "text",
        "x": idFirstShape[0] + CheckpointDistance * CountForShape,
        "y": idFirstShape[1] + WidgetDistance,
        "width": 98.69999999999999,
        "style": {
            "backgroundColor": Color.HEX.Practice,
            "backgroundOpacity": 1.0,
            "borderOpacity": 1.0,
            "borderStyle": "normal",
            "borderWidth": 2.0,
            "fontFamily": "OpenSans",
            "fontSize": 23,
            "textAlign": "center",
            "textColor": "#1a1a1a"
        },
        "text": `<p><span style=\"background-color:transparent\">${DataPractice}</span></p>`
    },
    Provider: {
        "type": "text",
        "x": idFirstShape[0] + CheckpointDistance * CountForShape,
        "y": idFirstShape[1] - WidgetDistance * 3,
        "width": 98.69999999999999,
        "style": {
            // fef445 yellow if lime is bad
            "backgroundColor": Color.HEX.Provider,
            "backgroundOpacity": 1.0,
            "borderOpacity": 1.0,
            "borderStyle": "normal",
            "borderWidth": 2.0,
            "fontFamily": "OpenSans",
            "fontSize": 23,
            "textAlign": "center",
            "textColor": "#1a1a1a"
        },
        "text": `<p><span style=\"background-color:transparent\">${DataProvider}</span></p>`
    },
    Resource: {
        "type": "text",
        "x": idFirstShape[0] + CheckpointDistance * CountForShape,
        "y": idFirstShape[1] - WidgetDistance * 2,
        "width": 98.69999999999999,
        "style": {
            "backgroundColor": Color.HEX.Resource,
            "backgroundOpacity": 1.0,
            "borderOpacity": 1.0,
            "borderStyle": "normal",
            "borderWidth": 2.0,
            "fontFamily": "OpenSans",
            "fontSize": 23,
            "textAlign": "center",
            "textColor": "#1a1a1a"
        },
        "text": `<p><span style=\"background-color:transparent\">${DataResource}</span></p>`
    },
    Process: {
        "type": "text",
        "x": idFirstShape[0] + CheckpointDistance * CountForShape,
        "y": idFirstShape[1] - WidgetDistance,
        "width": 98.69999999999999,
        "style": {
            "backgroundColor": Color.HEX.Process,
            "backgroundOpacity": 1.0,
            "borderOpacity": 1.0,
            "borderStyle": "normal",
            "borderWidth": 2.0,
            "fontFamily": "OpenSans",
            "fontSize": 23,
            "textAlign": "center",
            "textColor": "#ffffff"
        },
        "text": `<p><span style=\"background-color:transparent\">${DataProcess}</span></p>`
    },
    Product: {
        "type": "text",
        "x": idFirstShape[0] + CheckpointDistance * CountForShape,
        "y": idFirstShape[1] + WidgetDistance * 2,
        "width": 98.69999999999999,
        "style": {
            "backgroundColor": Color.HEX.Product,
            "backgroundOpacity": 1.0,
            "borderOpacity": 1.0,
            "borderStyle": "normal",
            "borderWidth": 2.0,
            "fontFamily": "OpenSans",
            "fontSize": 23,
            "textAlign": "center",
            "textColor": "#1a1a1a"
        },
        "text": `<p><span style=\"background-color:transparent\">${DataProduct}</span></p>`
    },
    User: {
        "type": "text",
        "x": idFirstShape[0] + CheckpointDistance * CountForShape,
        "y": idFirstShape[1] + WidgetDistance * 3,
        "width": 98.69999999999999,
        "style": {
            "backgroundColor": Color.HEX.User,
            "backgroundOpacity": 1.0,
            "borderOpacity": 1.0,
            "borderStyle": "normal",
            "borderWidth": 2.0,
            "fontFamily": "OpenSans",
            "fontSize": 23,
            "textAlign": "center",
            "textColor": "#ffffff"
        },
        "text": `<p><span style=\"background-color:transparent\">${DataUser}</span></p>`
    }
}