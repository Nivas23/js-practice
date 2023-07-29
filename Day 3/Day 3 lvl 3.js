//const da = new Date();
y=da.getFullYear();
m=da.getMonth()+1;
m=10
m<10?m=`0${m}`:m;
date=da.getDate();
h=da.getHours();
min=da.getMinutes();
console.log(`${y}/${m}/${date} ${h}:${min}`)

//console.log(typeof da.getMonth());
