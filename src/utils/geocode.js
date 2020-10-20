const request = require('postman-request');

const geocode = (address, callback) => {
    if (!address) {
        callback('Please provide an address');
    } else {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWxhbnRyaW5oIiwiYSI6ImNrZHgxOWM0NzJ3eTgyeXRha3RicXNmdXEifQ.iL4ng4OuuOXl09xfLNOhTw&limit=1`;

        request({ url, json: true }, (error, { body }) => {
            if (error) {
                callback('Unable to connect to location service');
            } else if (!body.features.length) {
                callback('Unable to find location. Try another search.');
            } else {
                callback(undefined, {
                    latitude: body.features[0].geometry.coordinates[1],
                    longitude: body.features[0].geometry.coordinates[0],
                    location: body.features[0].place_name,
                });
            }
        });
    }
};

module.exports = geocode;
