var Observable = require('FuseJS/Observable')

exports.listRowSpacing = Observable(2)
exports.listData = Observable()

for (var i = 1; i <= 10; i++) {
    var section = {
        title: 'Section ' + i,
        rows: []
    }
    for (var j = 1; j <= 5; j++) {
        section.rows.push({
            title: 'Row ' + i + ':' + j,
            height: Math.round(Math.random() * 30) + 30
        })
    }
    exports.listData.add(section)
}

exports.doLoadAfter = function () {

}

exports.doLoadBefore = function () {

}