registerPaint('inset-bottom-bar',class  {
  static get inputProperties() { return ['--dropPosition'] }

  paint(ctx, geom, props) {
    const position = parseFloat(props.get('--dropPosition').toString())
    const {width, height} = geom
    const p = n => width * (n/100)
    const dropSize = 112.5
    const drop = position => {
      const start = position - 15
      const end = position + 15
      console.log(p(end)-p(start) );
      ctx.lineTo(p(start), 0)
      ctx.quadraticCurveTo(p(start + 5), 0 ,p(start + 5), 5)
      ctx.bezierCurveTo(p(start + 8), 47, p(end - 8), 47,p(end - 5), 5)
      ctx.quadraticCurveTo(p(end - 5),0 ,p(end), 0)
      ctx.lineTo(p(end), 0)
    }
      ctx.beginPath()
      ctx.moveTo(0,0)
      drop(position)
      ctx.lineTo(width, 0)
      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()
      ctx.fill()
  }
})

