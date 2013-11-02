var dict = require('./dict');

var ipsumomat = function() {
    function getRandomInt(max, min) {
        if (min === undefined) {
            min = 0;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {
        omat: function(sentenceLength, sentenceNumber) {
            if (dict.start && dict.start && dict.start) {
                var ipsum = "";
                if(sentenceNumber === undefined) {
                    sentenceNumber = 3;
                };

                for(var i = 0; i <= sentenceNumber; i++) {
                    var text = "";
                    var start = "";
                    var center = "";
                    var end = "";
                    if(sentenceLength === undefined) {
                        sentenceLength = 5;
                    };

                    start = dict.start[getRandomInt(dict.start.length -1 )] + " ";
                    for(var j = 0; j <= sentenceLength; j++) {
                        center += dict.center[getRandomInt(dict.center.length -1 )] + " ";
                    }
                    end = dict.end[getRandomInt(dict.end.length -1 )];

                    ipsum += start + " " + center + " " + end + " ";
                }

                return ipsum;

            }
        }
    };
};

module.exports = ipsumomat;