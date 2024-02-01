function scrollToElement(elementId, duration) {
    var element = document.getElementById(elementId);
    if (element) {
        var start = window.scrollY;
        var end = element.offsetTop - (window.innerHeight - element.offsetHeight) / 2;
        var distance = end - start;
        var startTime;

        function scrollAnimation(currentTime) {
            if (!startTime) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var scrollProgress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, start + distance * scrollProgress);

            if (timeElapsed < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        requestAnimationFrame(scrollAnimation);
    }
}

