

function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    }
}


window.addEventListener("load", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight - 400;
    canvas.width = window.innerWidth - 400;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let drawing = false; 

    function startPosition(e) {
        drawing = true;
        //draw(e);
    }

    function endPosition() {
        drawing = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!drawing) return;

        ctx.lineWidth = 3.5;

        var mousePos = getMousePos(canvas, e)
        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.lineCap = "round";

        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(mousePos.x, mousePos.y);
    }



    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);

})
