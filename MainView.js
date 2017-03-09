var Observable = require('FuseJS/Observable')

exports.listRowSpacing = Observable(2)
exports.listData = Observable()

var start = 1
var end = 10

function addItems (startAt, endAt, addToTop) {
    for (var i = startAt; addToTop ? i >= endAt : i <= endAt; addToTop ? i-- : i++) {
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
        if (addToTop) {
            exports.listData.insertAt(0, section)
        } else {
            exports.listData.add(section)
        }
    }
    if (addToTop) {
        if (start === undefined || endAt < start) {
            start = endAt
        }
    }

    if (end === undefined || endAt > end) {
        end = endAt
    }
}
addItems(start, end)

exports.doLoadAfter = function () {
    addItems(end + 1, end + 3)
}

exports.doLoadBefore = function () {
    addItems(start - 1, start - 3, true)
}