var dict = require('./dict');

var ipsumomat = function() {
    function getRandomInt(max, min) {
        if (min === undefined) {
            min = 0;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {
        omat: function(sentenceLength) {
            if (dict.start && dict.start && dict.start) {
                var text = "";
                var start = "";
                var center = "";
                var end = "";
                if(sentenceLength === undefined) {
                    sentenceLength = 10;
                };
                start = dict.start[getRandomInt(dict.start.length -1 )] + " ";
                for(var i = 0; i <= sentenceLength; i++) {
                    center += dict.center[getRandomInt(dict.center.length -1 )] + " ";
                }
                end = dict.end[getRandomInt(dict.end.length -1 )];

                return start + " " + center + " " + end;
            }
        }
    };
};

module.exports = ipsumomat;