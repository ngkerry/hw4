noFill ();
colorMode (HSB);
stroke (11, 2, 62)

var a = 10
var b = 10

while (b <= 500)
{
ellipse (160, 160, b, b);
var b = b + 10
}

while (a <= 400)
{
line(0, a, 360, a);
var a = a + 10
}

var b = 10
while (b <= 400)
{
line(b, 0, b, 360);
var b = b + 10
}
