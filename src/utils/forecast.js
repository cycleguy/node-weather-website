const request = require('postman-request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=808622c2472f4ed0c991a2afeb59088b&units=f&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(lon)

    request({url, json: true}, (error, response, body) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, 'Overall ' + body.current.weather_descriptions[0] + '.  It is currently ' + body.current.temperature + ' degrees and feels like ' + body.current.feelslike + ' degrees.  Winds: ' + body.current.wind_speed + 'mph ' + body.current.wind_dir)
        }
    })


}

module.exports = forecast