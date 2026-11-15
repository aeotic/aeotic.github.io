(() => {
    const username = "aeotic";
    const prefix = "@";
    let index = 0;
    let deleting = false;

    document.title = prefix;

    function animateTitle() {
        if (!deleting) {
            index++;
            document.title = prefix + username.slice(0, index);

            if (index >= username.length) {
                deleting = true;
                setTimeout(animateTitle, 1800);
                return;
            }
        } else {
            index--;

            if (index <= 0) {
                index = 0;
                deleting = false;
                document.title = prefix;
                setTimeout(animateTitle, 500);
                return;
            }

            document.title = prefix + username.slice(0, index);
        }

        setTimeout(animateTitle, deleting ? 120 : 220);
    }

    setTimeout(animateTitle, 500);
})();