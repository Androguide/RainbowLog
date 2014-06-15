(function () {
    // `consoleProxy`: a clone of the standard `console` object (only used to shorten the script by using `c` instead of `console`, here we could directly access the `console` object)
    var consoleProxy = console,

    // `i`: A simple iterator for the loop
        i = 3,

    // `schemes`: a 2-dimensional array to hold the respective identifiers & colors.
        schemes = [
            ["e", "s", "i"],
            ["#c0392b", "#2ecc71", "#3498db"]
        ];

    // **loop**: Loop from `i` to 0
    // For each identifier in the first inner-array of the `schemes` variable, we create a new property of the console object
    while(i--) consoleProxy[schemes[0][i]] = f(i);

    function f(j) {
        return function(m, s) {
            // Put the pieces together, apply the CSS rules, and match the corresponding color in the second inner-array of the `schemes` variable
            consoleProxy.log('%c' + m, s+ ';color:#fff;background:' + schemes[1][j])
        };
    }
})();

