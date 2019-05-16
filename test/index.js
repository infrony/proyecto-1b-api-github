const obtenerUsuario = require('./../index').obtenerDatosDeUsuario;

const expect = require('chai').expect;

var nock = require('nock');

const infrony = require('./respuestas/infrony');

describe('Test de datos de diferentes usuarios de Github', () => {
    beforeEach(() => {
        nock('https://api.github.com')
            .log(console.log)
            .get('/users/infrony')
            .reply(200, infrony);
    });
    it('Obtener datos de usuario "infrony"', () => {
        return obtenerUsuario('infrony').then(
            respuesta => {
                // Probar el tipo de variable que obtenemos de respuesta. Tiene que se un objeto.
                expect(typeof respuesta).to.equal('object');

                // Comprobar que el usuario de la APi es infrony
                expect(respuesta.login).to.equal('infrony');
                // Comprobar que el ID deL usuario es numerico
                expect(typeof respuesta.id).to.equal('number');
                // Seguidores y seguidos sean numericos
                expect(typeof respuesta.followers).to.equal('number');
                expect(typeof respuesta.following).to.equal('number');
                // Location = Panama
                expect(respuesta.location).to.equal('Panama');
            }
        )
    });
});