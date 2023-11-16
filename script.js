; (function () {
    document.onmousemove = handleMouseMove
    function handleMouseMove(event) {
        var eventDoc, doc, body
        event = event || window.event
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document
            doc = eventDoc.documentElement
            body = eventDoc.body
            event.pageX =
                event.clientX +
                ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
                ((doc && doc.clientLeft) || (body && body.clientLeft) || 0)
            event.pageY =
                event.clientY +
                ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
                ((doc && doc.clientTop) || (body && body.clientTop) || 0)
        }
        const pos = document.createElement('div')
        pos.setAttribute('id', 'cursor');
        const hover = document.getElementById('hover')
        let left = event.pageX - 30
        let right = event.pageY - 30
        pos.style.left = left + 'px'
        pos.style.top = right + 'px'
        while (hover.lastElementChild) {
            hover.removeChild(hover.lastElementChild)
        }
        hover.appendChild(pos)
    }
})()

