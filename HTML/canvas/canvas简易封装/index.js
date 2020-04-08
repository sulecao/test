function Ecanvas(dom) {
    this.init(dom)
    this.initEvent()
}

Ecanvas.prototype = {
    constructor: Ecanvas,
    init(dom) {
        // 初始化canvas
        this.canvas = document.createElement('canvas')
        let {
            width,
            height
        } = window.getComputedStyle(dom)
        this.canvas.width = parseInt(width)
        this.canvas.height = parseInt(height);
        dom.appendChild(this.canvas)
        this.dom = dom
        this.ctx = this.canvas.getContext('2d')
        // 初始化hover相关
        this.hoverDiv = document.createElement('div')
        this.hoverDiv.style.width = '50px'
        this.hoverDiv.style.height = '50px'
        this.hoverDiv.style.position = 'absolute';
        this.hoverDiv.style.backgroundColor = 'rgba(50,50,50,0.7)'
        this.hoverDiv.style.display = 'none'
        this.hoverDiv.style.color = 'white'
        this.dom.appendChild(this.hoverDiv)
        this.isHover = false
    },
     // 初始化事件监听
    initEvent() {
        this.canvas.addEventListener('click', (e) => {
            let {
                X,
                Y
            } = this.getXY(e)
            this.findClick(X, Y, e)
        })
        this.canvas.addEventListener('mousemove', (e) => {
            let {
                X,
                Y
            } = this.getXY(e)
            this.findMouseover(X, Y, e)
        })
    },
    getXY(e) {
        let {
            clientX,
            clientY
        } = e
        let {
            left,
            top
        } = this.canvas.getBoundingClientRect();
        return {
            X: clientX - left,
            Y: clientY - top
        }
    },
    setOption(option) {
        this.option = option
        this.ctx.clearRect(0, 0, 400, 400)
        option.forEach(item => {
            this['draw' + item.type](item)
        });
    },
    // 绘制图形相关
    drawline(item) {
        let [moveToX, moveToY, lineToX, lineToY] = item.data
        this.ctx.beginPath();
        this.ctx.moveTo(moveToX, moveToY);
        this.ctx.lineTo(lineToX, lineToY);
        this.ctx.stroke();
    },
    drawfillText(item) {
        let [word, x, y] = item.data
        this.ctx.font = item.fontStyle
        this.ctx.textAlign = item.textAlign || 'center'
        this.ctx.fillText(word, x, y);
    },
    drawfillRect(item) {
        this.ctx.beginPath();
        let [x, y, width, height] = item.data
        item.isHover ? this.ctx.fillStyle = item.hoverStyle : this.ctx.fillStyle = item.fillStyle
        this.ctx.fillRect(x, y, width, height)
    },
    drawfillCircel(item) {
        this.ctx.beginPath();
        let [x, y, radius, startAngle, endAngle, anticlockwise] = item.data
        this.ctx.fillStyle = item.fillStyle
        radius = item.isHover ? radius * 1.2 : radius//hover状态半径变大
        this.ctx.moveTo(x, y);
        this.ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
        this.ctx.fill();
    },
    // 监测事件相关
    checkClickfillRect(item, curX, curY, e) {
        if (this.IsInRect(item, curX, curY)) {
            item.event.click(e)
        }
    },
    checkClickfillCircel(item, curX, curY, e) {
        if (this.IsInCircel(item, curX, curY)) {
            item.event.click(e)
        }
    },
    checkMouseoverfillRect(item, curX, curY) {
        item.isHover = false
        return this.IsInRect(item, curX, curY)
    },
    checkMouseoverfillCircel(item, curX, curY) {
        item.isHover = false
        return this.IsInCircel(item, curX, curY)
    },
    IsInRect(item, curX, curY) {
        let [x, y, width, height] = item.data
        if (curX >= x && curX <= x + width && curY >= y && curY <= y + height) {
            return true
        }
    },
    IsInCircel(item, curX, curY) {
        let [x, y, radius, startAngle, endAngle] = item.data
        let powDistance = Math.pow(x - curX, 2) + Math.pow(y - curY, 2)
        let distance = Math.pow(powDistance, 0.5)
        if (distance <= radius) {
            let r = this.getAngle(x, y, curX, curY)
            return startAngle < r && r < endAngle
        }
    },
    getAngle(cx, cy, mx, my) {
        let x = Math.abs(cx - mx),
            y = Math.abs(cy - my),
            radina = Math.atan2(x, y);
        if (mx > cx && my > cy) {
            return -radina + Math.PI / 2;
        } else if (mx < cx && my > cy) {
            return Math.PI / 2 + radina;
        } else if (mx > cx && my < cy) {
            return Math.PI / 2 * 3 + radina
        } else {
            return Math.PI / 2 * 3 - radina
        }
    },
    findClick(X, Y, e) {
        this.option.forEach(item => {
            if (item.event && item.event.click) {
                this['checkClick' + item.type](item, X, Y, e)
            }
        })

    },
    findMouseover(X, Y, e) {
        let items = this.option.filter(item => item.event && item.event.hover && this['checkMouseover' + item.type](item, X, Y, e))
        items[0] ? this.setHoverOption(items[0], X, Y, e) : this.setNoHoverOption()
        this.setOption(this.option)
    },
    setHoverOption(item, X, Y, e) {
        let t = item.fillStyle.split(',')
        let [r, g, b] = [t[0].substring(5), t[1], t[2]]
        item.hoverStyle = item.hoverStyle || `rgba( ${0.299 * r} , ${0.587 * g} ,  ${0.114 * b})`
        item.isHover = true
        this.hoverDiv.style.display = 'block'
        this.hoverDiv.style.left = X + 25 + 'px';
        this.hoverDiv.style.top = Y + 25 + 'px';
        this.hoverDiv.innerHTML = item.hoverContent
        this.dom.style.cursor = 'pointer'
        item.event.hover(e)
    },
    setNoHoverOption() {
        this.hoverDiv.style.display = 'none'
        this.dom.style.cursor = 'default'
    }
}