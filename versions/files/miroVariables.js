var mbody = require('./miroBody')
exports.distance = {
    checkpoint: 1000, //x
    widget: 120, //y
    fshape: { x: 0, y: 0 },/*first shape*/
    pmilestone: { x: null, y: null },/*optional */
    stsign: /*координаты для работы с User (Пользователь) снизу и Provider (Поставщик)*/
    {
        x: 400, /*если желание двигаться и "ставить" вех, то следует отнимать это значение от */
        y: 600 /*вверх, вниз*/
    },
    tshape: { x: null, y: null }
};
exports.token = 'https://api.miro.com/v1/boards/o9J_kp5pAx8=/widgets/';