import { Node } from "./Node.js";
import { Tools } from "./Tools.js";

var base_node = Node.new();
var g_canvas, g_ctx;
var g_time0 = new Date().getTime();

export class Director {
    static init(canvas, frame_rate) {
        g_canvas = canvas;
        g_ctx = g_canvas.getContext("2d");
        g_time0 = new Date().getTime() / 1000;
        setInterval(function () {
            Director.update();
        }, parseInt(1000 / frame_rate));
    }

    static update() {
        var time1 = new Date().getTime() / 1000;
        base_node.onupdate(time1 - g_time0);
        g_time0 = time1;

        g_ctx.fillRect(0, 0, g_canvas.offsetWidth, g_canvas.offsetHeight);
        base_node.visit(g_ctx);
    }

    static add_child(child) {
        base_node.add_child_with_key(child, Tools.generate_random_string(32));
    }

    static add_child_with_key(child, key) {
        base_node.add_child_with_key(child, key);
    }

    static remove_child(key) {
        base_node.remove_child(key);
    }
};