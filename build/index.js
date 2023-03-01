"use strict";
var json;
var parse;
parse = (json = JSON).parse;
var keys = parse('{"Keys":["Hello", "World"]}')['Keys'];
for (var k of keys) {
    console.log(k);
}
