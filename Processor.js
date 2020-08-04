class Processor {
    constructor() {

    }
    Processor(data) {
        var rows = [];
        var arr = data.split("\n");

        arr.forEach(elem => {
            rows.push(elem.split(","));
        });

        return rows;
    }
}



module.exports = Processor;