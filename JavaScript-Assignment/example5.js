function circle(radius)
{
    this.radius = radius;

    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
}
var c = new circle(4);
console.log('Area =', c.area().toFixed(2));
