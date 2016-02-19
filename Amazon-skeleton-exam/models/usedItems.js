var models = models || {};

(function (scope) {
    function UsedItem(title, description, price, condition){
        scope.getItem.call(this, title, description, price);
        this.condition = condition;
        this._customerReviews = {};
    }

    UsedItem.prototype = Object.create(scope._Item);
    UsedItem.prototype.constructor = UsedItem;
}(models))