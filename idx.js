import { Sprite } from "./Sprite.js";
import { Node } from "./Node.js";
import { Director } from "./Director.js";

window.onload = function () {
    init();
}

var ele_canvas = document.getElementById("canvas");
var ctx = ele_canvas.getContext("2d");

var sp0 = Node.new();
sp0.set_opacity(0.5);
sp0.set_position_with_pos(100, 100);

var sp = Sprite.new("src/26.png");
sp.set_scale(0.1);
sp.set_position_with_pos(0, 0);
sp.set_opacity(0.5);
sp.set_rotation(0.3);

sp0.add_child(sp);

function init() {
    Director.init(ele_canvas, 60);

    Director.add_child(sp0, "l0");
}

// function update() {

//     ctx.fillRect(0, 0, 600, 400);
//     sp0.visit(ctx);
// }