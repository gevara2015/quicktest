//Factory
StartApp.factory('Data', function () {
    return {message: "test"}
});


/*function showJson() {
 var flickerAPI = "http://504080.com/api/v1/services/services/categories";

 $.getJSON(flickerAPI, {}).done(function (json) {
 console.log(JSON.stringify(json));
 });

 }

 showJson();*/

//Services

StartApp.constant('appConfig', {
    api: {
        baseURL: 'http://504080.com/api/v1',
        clientId: '3a86983b1eb394cf06283874b85c1223671f1bd9'
    }
});


StartApp.service('foursquareApiService', function ($resource, appConfig) {
    var url = appConfig.api.baseURL + '/services/services/categories';
    return $resource(url, {
            client_id: appConfig.api.clientId,
            callback: 'JSON_CALLBACK'
        },
        {
            places: {
                method: 'JSONP',
                isArray: true,
                transformResponse: function (data) {
                    console.log(data);
                    return data.response.venues;
                }
            }
        });
});
