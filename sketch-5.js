noFill();
var a = 10
var b = 180
var c = 200

while (c < width)
{
line (b, a, c, a)
var a = a + 10;
var b = b - 10;
var c = c + 10;
}

while (a <= 360)
{
line (b, a, c, a)
var a = a + 10;
var b = b + 10;
var c = c - 10;
}
