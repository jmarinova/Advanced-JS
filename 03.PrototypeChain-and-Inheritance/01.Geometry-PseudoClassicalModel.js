Object.prototype.extends = function(parent){
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

//a function to check if the given value is a number
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var shapeModule = (function(){
    function Shape(color){
        this._color = color;
    }

    Shape.prototype.toString = function () {
        return "Color: " + this._color;
    }

    var Circle = (function () {
        function Circle(centerX, centerY, radius, color){
            this._centerX = centerX;
            this._centerY = centerY;
            //check if the radius value entered is a valid number
            setRadius(this, radius);
            Shape.call(this, color);
        }

        function setRadius(circle, radiusValue){
            if (!isNumeric(radiusValue) || radiusValue < 0){
                throw new RangeError("Radius should be greater than 0!");
            }

            circle._radius = radiusValue;
        }

        return Circle;
    })();

    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;

    Circle.prototype.toString = function(){
        var result = "Circle: ";
        result += "Center: O(" + this._centerX + ", " + this._centerY + "), ";
        result += "Radius: " + this._radius + ", ";
        result += Shape.prototype.toString.call(this);

        return result;
    }

    var Rectangle = (function(){
        function Rectangle(topLeftX, topLeftY, width, height, color){
            this._topLeftX = topLeftX;
            this._topLeftY = topLeftY;
            setWidth(this, width);
            setHeight(this, height);
            Shape.call(this, color);
        }
        function setWidth(rect, widthValue){
            if(!isNumeric(widthValue) || widthValue <= 0){
                throw new Error("Width should be greater than 0");
            }

            rect._width = widthValue;
        }

        function setHeight(rect, heightValue){
            if (!isNumeric(heightValue) || heightValue <=0){
                throw new Error("Height should be a positive value");
            }

            rect._height = heightValue;
        }

        return Rectangle;
    })();

    Rectangle.prototype = Object.create(Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;

    Rectangle.prototype.toString = function(){
        var result = "Rectangle: ";
        result += "Left X: A(" + this._topLeftX + ", " + this._topLeftY + "), ";
        result += "Width: " + this._width + ", ";
        result += "Height: " + this._height + ", ";
        result += Shape.prototype.toString.call(this);

        return result;
    }

    var Triangle = (function () {
        function Triangle(aX, aY, bX, bY, cX, cY, color){
            setTriangleVertices(this, aX, aY, bX, bY, cX, cY);
            Shape.call(this, color);
        }

        function setTriangleVertices(triangle, pointAX, pointAY, pointBX, pointBY, pointCX, pointCY){
            if (!triangle.isValidTriangle(pointAX, pointAY, pointBX, pointBY, pointCX, pointCY)){
                throw new RangeError("Value should be greater than 0!");
            }

            triangle._aX = pointAX;
            triangle._aY = pointAY;
            triangle._bX = pointBX;
            triangle._bY = pointBY;
            triangle._cX = pointCX;
            triangle._cY = pointCY;
        }

        return Triangle;

    })();

    Triangle.prototype = Object.create(Shape.prototype);
    Triangle.prototype.constructor = Triangle;

    Triangle.prototype.toString = function(){
        var result = "Triangle: ";
        result += "A(" + this._aX + ", " + this._aY + "), ";
        result += "B(" + this._bX + ", " + this._bY + "), ";
        result += "C(" + this._cX + ", " + this._cY + "), ";
        result += Shape.prototype.toString.call(this);

        return result;
    }

    Triangle.prototype.isValidTriangle = function(aX, aY, bX, bY, cX, cY){
        var sideA = Shape.prototype.getDistanceBwTwoPoints(aX, aY, bX, bY);
        var sideB = Shape.prototype.getDistanceBwTwoPoints(bX, bY, cX, cY);
        var sideC = Shape.prototype.getDistanceBwTwoPoints(aX, aY, cX, cY);

        if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
            return false;
        }

        if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
            return false;
        }

        return true;
    }

    Shape.prototype.getDistanceBwTwoPoints = function(aX, aY, bX, bY){
        var deltaX = aX - bX;
        var deltaY = aY - bY;

        var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        return distance;
    }

    var Line = (function(){
        function Line(aX, aY, bX, bY, color){
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;
            Shape.call(this, color);
        }

        return Line;
    })();

    Line.prototype = Object.create(Shape.prototype);
    Line.prototype.constructor = Line;
    Line.prototype.toString = function(){
        var result = "Line: ";
        result += "A(" + this._aX + ", " + this._aY + "), ";
        result += "B(" + this._bX + ", " + this._bY + "), ";
        result += Shape.prototype.toString.call(this);

        return result;
    }

    var Segment = (function(){
        function Segment(aX, aY, bX, bY, color){
            Line.call(this, aX, aY, bX, bY, color);
        }

        return Segment;
    })();

    Segment.prototype = Object.create(Line.prototype);
    Segment.prototype.constructor = Segment;
    Segment.prototype.toString = function () {
        var result = "Segment: ";
        result += "A(" + this._aX + ", " + this._aY + "), B(" + this._bX + ", " + this._bY + "), ";
        result += Shape.prototype.toString.call(this);

        return result;
    }

    return{
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Line: Line,
        Segment: Segment
    }
})();

var circle = new shapeModule.Circle(1,2,3,"black");
console.log(circle.toString());

var rectangle = new shapeModule.Rectangle(2,2,3,4,"orange");
console.log(rectangle.toString());

var triangle = new shapeModule.Triangle(0,0,1,1,12,8, "yellow");
console.log(triangle.toString());

var line = new shapeModule.Line(0,0,5,5,"AAA");
console.log(line.toString());

var segment = new shapeModule.Segment(1,1,4,4,"888");
console.log(segment.toString());