exports.distance = {
    checkpoint: 1000, //x
    widget: 120, //y
    fshape: { x: 1, y: 1 },/*first shape*/
    pmilestone: { x: null, y: null },/*optional */
    stsign: /*координаты для работы с User (Пользователь) снизу и Provider (Поставщик)*/
    {
        x: 400, /*если желание двигаться и "ставить" вех, то следует отнимать это значение от */
        y: 600 /*вверх, вниз*/
    },
    tshape: { x: null, y: null }
};
exports.token = 'Bearer 7c5ea6f9-8b19-41b3-96cf-e0c83ec7752b';
exports.Color = {
    //в HEX коде:
    HEX:
    {
        Practice: '#8fd14f',
        Provider: '#e0ff66',
        Resource: '#2d9bf0',
        Process: '#000000',
        Product: '#fac710',
        User: '#9510ac',
        DeadGreen: '#d9ead3',
        CheckPointShape: '#414bb2'
    },
    //в виде RED GREEN BLUE:
    RGB:
    {
        Practice: '143, 209, 79',
        Provider: '224, 255, 102',
        Resource: '45, 155, 240',
        Process: '0, 0, 0',
        Product: '250, 199, 16',
        User: '149, 16, 172'
    }
};
exports.countForShape = 1;