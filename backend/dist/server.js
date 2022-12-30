"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database"));
database_1.default.sync({ force: true });
console.log('Database running at 3306');
const server = app_1.default.listen(3000, () => {
    console.log('Servidor rodando...');
});
process.on('SIGINT', () => {
    server.close();
    console.log('APP Finalizado!');
});
