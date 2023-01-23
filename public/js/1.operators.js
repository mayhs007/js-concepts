//
/*----------Assignment----------*/
// =
var x = 10
var y = x

// += (Add and assign)
x += 5 // x = x + 5
y += x // y = y + x

// -= (sub and assign)

x -= 5 //x = x - 5
y -= 5 //y = y - 5

// *= (multiplty and assign)

x *= 5 //x = x * 5
y *= x //y = y * x

// /= (divide and assign)
x /= 5 //x = x / 5
y /= x //y = y / x

// %= (find reminder and assign)

x %= 5
y %= x

// **=  (power and assign)

x **= 5 //x = x ** 5
y **= x //y = y ** x

/*----------Shift Assignment----------*/

// Left Shift

// <<=
x = 9
console.log(x, "Before")
x <<= 2
console.log(x, "After")
// x=x<<5
y <<= x
// y = y << x

//Right Shift
//>>=

x >>= 5
x = x >> 5

y >>= x
y = y >> x

// Bitwise Operators

// &=
x &= 5
// x = x & 5
y &= x
// y = y & x

x |= 5
y |= x

x ^= 5
x = x ^ 5

y ^= x

y = y ^ x
