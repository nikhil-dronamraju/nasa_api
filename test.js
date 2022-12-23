var date = "2022-12-12T11:34:00Z"
var regex = /T\d\d:\d\d:\d\dZ/
var date = date.replace(regex, "")
console.log(date)