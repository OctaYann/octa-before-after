window.addEventListener("DOMContentLoaded", () => {
    /**
     * @type {HTMLDivElement | null}
     */
    const scroller = document.querySelector(".before-after .scroller");
    /**
     * @type {HTMLDivElement | null}
     */
    const wrapper = document.querySelector(".before-after");
    /**
     * @type {HTMLDivElement | null}
     */
    const after = document.querySelector(".before-after .after");
    let active = false;

    if (scroller && wrapper && after) {
        scroller.addEventListener("mousedown", function () {
            active = true;
            scroller.classList.add("scrolling");
        });
        document.body.addEventListener("mouseup", function () {
            active = false;
            scroller.classList.remove("scrolling");
        });
        document.body.addEventListener("mouseleave", function () {
            active = false;
            scroller.classList.remove("scrolling");
        });

        document.body.addEventListener("mousemove", function (e) {
            if (!active) return;
            let x = e.pageX;
            x -= wrapper.getBoundingClientRect().left;
            scrollIt(x);
        });

        /**
         *
         * @param {number} x
         */
        const scrollIt = (x) => {
            const transform = Math.max(0, Math.min(x, wrapper.offsetWidth));
            after.style.width = transform + "px";
            scroller.style.left = transform - 25 + "px";
        };

        scrollIt(150);

        scroller.addEventListener("touchstart", function () {
            active = true;
            scroller.classList.add("scrolling");
        });
        document.body.addEventListener("touchend", function () {
            active = false;
            scroller.classList.remove("scrolling");
        });
        document.body.addEventListener("touchcancel", function () {
            active = false;
            scroller.classList.remove("scrolling");
        });
    }
});
