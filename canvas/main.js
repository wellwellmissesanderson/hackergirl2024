const canv = document.getElementById('canvas1');

// The 2D Context for the HTML canvas element. It
// provides objects, methods, and properties to draw and
// manipulate graphics on a canvas drawing surface.
const ctx = canv.getContext('2d');

// canvas width and height
canv.width = 300; // 2048
canv.height = 300; // 2014

// create an image element
const img = new Image();

// specify the image source relative to the html or js file
// when the image is in the same directory as the file
// only the file name is required:
// img.src = "snow1.webp";
img.src = "space.png";

// window.onload is an event that occurs when all the assets
// have been successfully loaded( in this case only the spacebg.png)
window.onload = function () {
    // the initial image height
    let imgHeight = 0;
    let imgWidth = 0;

    // the scroll speed
    // an important thing to ensure here is that can.height
    // is divisible by scrollSpeed
    const scrollSpeed = 1;

    // this is the primary animation loop that is called 60 times
    // per second
    function loop() {
        // draw image 1
        // ctx.drawImage(img, 0, imgHeight);
        ctx.drawImage(img, imgWidth, imgHeight);

        // draw image 2
        // ctx.drawImage(img, 0, imgHeight - can.height);
        ctx.drawImage(img, imgWidth - canv.width, imgHeight);

        // update image height
        // imgHeight += scrollSpeed;
        imgWidth += scrollSpeed;

        //resetting the images when the first image entirely exits the screen
        // if (imgHeight == can.height)
        if (imgWidth == canv.width)
            // imgHeight = 0;
            imgWidth = 0;

        // this function creates a 60fps animation by scheduling a
        // loop function call before the
        // next redraw every time it is called
        window.requestAnimationFrame(loop);
    }

    // this initiates the animation by calling the loop function
    // for the first time
    loop();

}
