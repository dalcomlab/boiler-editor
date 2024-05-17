export class PointUtil {
    getInterSectionPoint(p1, p2, p3, p4) {
        let a, b, c, d, e, f;
        a = (p2.y - p1.y);
        b = p2.x - p1.x;
        c = (p4.y - p3.y);
        d = p4.x - p3.x;

        e = p1.y - (a/b * p1.x);
        f = p3.y - (c/d * p3.x);

        let rst = this.checkVerticalHorizonLine({p1: p1, p2: p2, p3: p3, p4: p4});
        if (rst !== null) {
            return rst;
        }

        rst = this.checkVerticalHorizonLine({p1: p3, p2: p4, p3: p1, p4: p2});
        if (rst !== null) {
            return rst;
        }

        const m = a/b;
        const m1 = c/d;

        const x = (f-e)/(m-m1);
        const y = m*x + e;
        rst = {x: x, y: y};

        const l1 = this.transLinePosition({p1: p1, p2: p2});
        const l2 = this.transLinePosition({p1: p3, p2: p4});
        if (this.checkAtPointInLine(l1, rst) && this.checkAtPointInLine(l2, rst)) {
            return rst;
        }

        return null;
    }

    checkVerticalHorizonLine({p1, p2, p3, p4}) {
        const l1 = this.transLinePosition({p1: p1, p2: p2});
        const l2 = this.transLinePosition({p1: p3, p2: p4});
        let a, b, c, d, e;
        a = (p2.y - p1.y);
        b = p2.x - p1.x;
        c = (p4.y - p3.y);
        d = p4.x - p3.x;
        e = p1.y - (a/b * p1.x);
        let rst = null;
        if (d === 0 && l1.p1.x <= p3.x && p3.x <= l1.p2.x) {
            rst = {x: p3.x, y: a/b * p3.x + e};
        }

        if (c === 0 && l1.p1.y <= p3.y && p3.y <= l1.p2.y) {
            rst = {x: (p3.y - e) / (a/b), y: p3.y};
        }

        if (rst == null) {
            return null;
        }

        if (this.checkAtPointInLine(l1, rst) && this.checkAtPointInLine(l2, rst)) {
            return rst;
        }

        return null;
    }

    checkAtPointInLine(line, p) {
        return line.p1.x <= p.x && p.x <= line.p2.x && line.p1.y <= p.y && p.y <= line.p2.y;
    }

    transLinePosition({p1, p2}) {
        let x1 = p1.x, x2 = p2.x;
        if (p2.x - p1.x < 0) {
            x1 = p2.x;
            x2 = p1.x;
        }

        let y1 = p1.y, y2 = p2.y;
        if (p2.y - p1.y < 0) {
            y1 = p2.y;
            y2 = p1.y;
        }

        return {p1: {x: x1, y: y1}, p2: {x: x2, y: y2}};
    }

    static catchEndPoint(p1, p2) {
        return (p1.x + 3 >= p2.x && p1.x - 3 <= p2.x) && (p1.y + 3 >= p2.y && p1.y - 3 <= p2.y);
    }
}