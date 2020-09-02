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