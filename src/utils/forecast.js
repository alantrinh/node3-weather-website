const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=bcf9428d1541a97e0be0f0661ed1b48a&query=${latitude},${longitude}&units=m`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            const { temperature, feelslike, humidity } = body.current;
            const description = body.current.weather_descriptions[0];
            callback(undefined, `${description}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out. The humidity is ${humidity}%.`);
        }
    });
};

module.exports = forecast;
