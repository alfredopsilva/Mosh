"use strict";
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
let alfredo = {
    id: 2,
    name: 'Alfredo',
    retire: (date) => console.log(date),
};
function kgToLbs(weight) {
    const ratio = 2.20462;
    if (typeof weight === 'string')
        console.log(Number.parseFloat(weight) * ratio);
    else
        console.log(weight * ratio);
}
kgToLbs(20);
//# sourceMappingURL=app.js.map