// 日期格式化
function timeFor(date) {
    let strM,strD;
    let d = new Date(date);
    let month = (d.getMonth() + 1);
    let day = d.getDate();

    if(month < 10) {
        strM ='0' + month;
    } else {
        strM = month;
    }
    if(day < 10) {
        strD = '0' + day;
    } else {
        strD = day;
    }
    let time = d.getFullYear() + '-' + strM + '-' 
               + strD;
    return time;
}

export {
    timeFor
}