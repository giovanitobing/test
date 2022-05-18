// function bintang segitiga sama kaki
function kaki(segitiga){
let stars  = ''

for (let i = segitiga; i > 0; i--) {
    for (let j = 1; j <= segitiga; j++) {
        if (j >= i) {
            stars += '* ';
        } else {
            stars += ' '
        }
    }
    stars += '\n';
}
console.log(stars);}
kaki(8)

// function bintang segitiga siku-siku
function siku(segi){
let stars  = ''

for(let i = 0; i < segi; i++)
{
    for(let j=0;j < i+1;j++)
{
    stars += ' * '
       
    }
    stars += '\n'
}
console.log(stars);}
siku(5)

// function persegi
function sisi(tiga){
let stars = '\n'

for(let i = 0 ; i<tiga ; i++)
{
    for(let j = 0; j < tiga ;j++)
    {
       stars += (' * ')
    }
   stars += '\n'
}
console.log(stars);}
sisi(4)

// bintang
for(let i = 0 ; i<5 ; i++)
{
    console.log(' * ')
}

// bintang
stars = '\n'
for(let i = 0 ; i<5 ; i++)
{
    stars += ' * '
}
console.log(stars)