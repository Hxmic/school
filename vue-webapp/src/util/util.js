export default {
    dateFormat:function(row, column) {
        var date = row[column.property];
        var d = new Date(date);
        var year = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' 
        + d.getDate();
        return year;
    }  
}