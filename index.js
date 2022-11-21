function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function higherOrder() {};
}

function returnsAnAnonymousFunction() {
    return function () {};
}