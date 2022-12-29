"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function postLink(req, res) {
    res.send({ nome: 'marcel', idade: 54 });
}
function getLink(req, res) {
    res.send('getLink');
}
function hitLink(req, res) {
    res.send('hitLink');
}
exports.default = {
    postLink,
    getLink,
    hitLink,
};
