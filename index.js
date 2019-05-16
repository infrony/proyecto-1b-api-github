const axios = require('axios');

module.exports = {
    /**
     * Instroducir el usuario de github para obtener sus datos de la API
     * @example
     * usuario = 'infrony'
     * @param {string} usuario Usuario del que queremos los datos de la API 
     */
    obtenerDatosDeUsuario: function ( usuario ) {
        const url = `https://api.github.com/users/${ usuario }`;
        return axios.get(url).then(
            data => data.data
        ).
        catch( error => console.log(error));
    }
}