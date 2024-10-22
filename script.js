var a = '';
for (var b = 0; b < 5; b++) {
    for (var c = 4; c > b; c--) {
        a += ' ';
    }
    for (var d = 0; d <= b; d++) {
        a += '*';
    }
    a += '\n';
}
console.log(a);

var e = '';
for (var f = 0; f < 5; f++){
    for(var g = 0; g <= f; g++){
        e += '*';
    }
    e += '\n';
}
console.log(e);

var h = '';
for (var i = 1; i <= 5; i++) {
    for (var j = 5; j > i; j--) {
        h += ' ';
    }
    for (var k = 0; k < (2 * i - 1); k++) {
        h += '*';
    }
    h += '\n';
}
console.log(h);

var l = '';
for(var m = 5; m > 0; m--){
    for(var n = 0; n < m; n++){
        l += '*';
    }
    l += '\n';
}
console.log(l);

var o = '';
for (var p = 1; p <= 5; p++) {
    for (var q = 5; q > p; q--) {
        o += ' ';
    }
    for (var r = 0; r < (2 * p - 1); r++) {
        o += '*';
    }
    o += '\n';
}
for(var s = 4; s > 0; s--){
    for(var t = 0; t < 4; t++){
        o += ' ';
    }
    for(var v = 0; v < s; v++){
        o += '*';
    }
    o += '\n';
}
console.log(o);

var w = '';
for (var x = 5; x > 0; x--) {
    for (var y = 5; y > x; y--) {
        w += ' ';
    }
    for (var z = 0; z < x; z++) {
        w += '*';
    }
    w += '\n';
}
console.log(w);

var aa = '';
for (var ab = 1; ab <= 5; ab++) {
    for (var ac = 5; ac > ab; ac--) {
        aa += ' ';
    }
    for (var ad = 0; ad < (2 * ab - 1); ad++) {
        aa += '*';
    }
    aa += '\n';
}
for (var ae = 4; ae > 0; ae--) {
    for (var af = 5; af > ae; af--) {
        aa += ' ';
    }
    for (var ag = 0; ag < (2 * ae - 1); ag++) {
        aa += '*';
    }
    aa += '\n';
}
console.log(aa);

var ah = '';
for(var ai = 0; ai < 5; ai++){
    for (var aj = 0; aj < 1; aj ++){
        for(var ak = 0; ak < 5; ak++){
            ah += '# ';
        }
        ah += '\n';
    }
    for (var aj = 0; aj < 1; aj ++){
        for(var ak = 0; ak < 5; ak++){
            ah += ' #';
        }
        ah += '\n';
    }
}
console.log(ah)

var al = '';
for (var am = 0; am < 5; am++) {
    for (var an = 0; an < 5 - am - 1; an++) {
        al += ' ';
    }
    var number = 1;
    for (var ao = 0; ao <= am; ao++) {
        al += number + ' ';
        number = number * (am - ao) / (ao + 1);
    }
    al += '\n';
}
console.log(al);