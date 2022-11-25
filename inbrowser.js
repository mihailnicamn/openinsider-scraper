var script = document.createElement('script');
script.onload = function () {
    const getData = () => {
        const table = $(".tinytable")
        var thisData = []
        const columns_ = table.find("th")
        var columns = []
        columns_.each((i, column) => {
            columns.push($(column).text())
        })
        //console.log(columns)
        columns[0] = "Filing Type"
        const rows_ = table.find("tr")
        rows = []
        rows_.each((i, row) => {
            _row = $(row)
            var data_row = []
            data_ = _row.find('td')
            data_.each((i, data) => {
                data_row.push($(data).text())
            })
            var thisRowData = {}
            columns.forEach((column, i) => {
                thisRowData[column.trim()] = data_row[i]
            })
            thisData.push(thisRowData)
        })
        return thisData

    }
    console.log(getData())
};
script.src = 'https://code.jquery.com/jquery-3.6.1.js';
document.head.appendChild(script);