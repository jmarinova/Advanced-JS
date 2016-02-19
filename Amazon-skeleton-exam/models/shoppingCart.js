var models = models || {};

(function (scope) {
    function ShoppingCart(){
        this._items = [];
    }

    ShoppingCart.prototype.addItem = function (item) {
        this._items.push(item);
    }

    scope.getShoppingCart = function () {
        return new ShoppingCart();
    }
}(models))