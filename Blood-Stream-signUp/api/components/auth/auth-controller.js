const TABLA = 'auth';

module.exports = function (injectedStore = require('../../../store/dummy')) {

    return {
        upsert: (data) => {
            const authData = {
                id: data.id
            }
    
            if (data.username) {
                authData.username = data.username;
            }
    
            if (data.password) {
                authData.password = data.password;
            }
    
            return injectedStore.upsert(TABLA, authData);
        }
    }
}

