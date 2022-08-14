import { Node } from "./Node.js";
import { ImagePool } from "./ImagePool.js";

export class Sprite extends Node {
    constructor(src) {
        super();
        this.img = ImagePool.get(src);
    }

    static new(src) {
        return new Sprite(src);
    }

    visit(ctx) {
        var arr = Array.from(this.children);
        arr.sort(function (a, b) {
            return a[1].z_order - b[1].z_order;
        });

        var x = this.pos.x;
        var y = this.pos.y;
        ctx.save();
        ctx.globalAlpha = ctx.globalAlpha * this.opacity;
        var dx = this.img.width * this.anchor.x;
        var dy = this.img.height * this.anchor.y;
        ctx.scale(this.scale, this.scale);
        ctx.translate(x + dx, y + dy);
        ctx.rotate(this.rotation);

        var p = 0;
        for (var i = 0; i < arr.length; ++i) {
            var ch = arr[i][1];
            if (ch.z_order == 0) {
                p = i;
                break;
            }
            ch.visit(ctx);
        }

        //自绘制
        ctx.drawImage(this.img, -dx, -dy);
        ///

        for (var i = p; i < arr.length; ++i) {
            var ch = arr[i][1];
            ch.visit(ctx);
        }

        ctx.restore();

    }
}

