(function() {
    // `consoleProxy`: a clone of the standard `console` object (only used to shorten the script by using `c` instead of `console`, here we could directly access the `console` object)
    var consoleProxy = console;

    // `schemes`: a 2-dimensional array to hold the respective identifiers & colors.
    var schemes = [['e', 's', 'i'], ['#c0392b', '#2ecc71', '#1abc9c']];

    // `i`: A simple iterator for the loop
    var i = 2;

    // **loop**: Loop from `i` to 0
    while (i--){
        //`j`: We need this global holder as we can't access mutable variables from a closure (i.e: the `i` variable in this case)
         j = i;
        // For each identifier in the first inner-array of the `schemes` variable, we create a new property of the console object
        consoleProxy[schemes[0][i]] = function(m) {
            // Put the pieces together, and match the corresponding color in the second inner-array of the `schemes` variable
            consoleProxy.log('%c' + m, 'color:#ecf0f1;background:' + [schemes[1][j]]);
        }
    }
})();
