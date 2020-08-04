class Table {
    constructor(arr) {
        this.header = arr.slice(0,1)[0];
        arr.shift();
        this.rows = arr;
    }

    get ColumnnCount() {
        return this.header.length;
    }

    get RowCount() {
        return this.rows.length;
    }

}



module.exports = Table;