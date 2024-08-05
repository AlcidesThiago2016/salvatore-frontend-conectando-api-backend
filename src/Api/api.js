export const Api = {
    baseUrl: 'https://salvatore-backend-integrando-front-end.onrender.com/',

    personagem: {
        endpoint: function(){
            return Api.baseUrl + 'personagem'
        },
        readAll: function () {
            return this.endpoint() + '/'
        }
    },

    buildApiGetRequest: function(url) {
        return fetch(url, { method: 'GET'}).catch(function (error) {
            console.error('Erro ao carregar dados' + url , error)
            toast.error('Erro ao carregar dados')
        })    
    }
}