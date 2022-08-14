export class Size {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    static new() {
        return new Size(0, 0);
    }

    static with_size(w, h) {
        return new Size(w, h);
    }

    static with_other(other) {
        return Size.with_size(other.w, other.h);
    }
}