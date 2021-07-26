'use strict';

let imageElement=document.getElementById('images')
let buttonElement=document.getElementById('button')
let img1=document.getElementById('image1')
let img2=document.getElementById('image2')
let img3=document.getElementById('image3')

console.log(img1,img2,img3)

let attempts=25;
let userAttempts=0;

let imgIndex1;
let imgIndex2;
let imgIndex3;

let products=[];

function Items(name,src)
{
    this.name=name;
    this.source=src;
    this.vote=0;
    this.shown=0;
    products.push(this)
}

new Items('Bag','img/bag.jpg')
new Items('Banana','img/banana.jpg')
new Items('Bathroom','img/bathroom.jpg')
new Items('Boots','img/boots.jpg')
new Items('Breakfast','img/breakfast.jpg')
new Items('Bubblegum','img/bubblegum.jpg')
new Items('Chair','img/chair.jpg')
new Items('Cthulhu','img/cthulhu.jpg')

new Items('Dog Duck','img/dog-duck.jpg')
new Items('Dragon','img/dragon.jpg')
new Items('Pen','img/pen.jpg')
new Items('Pet Sweep','img/pet-sweep.jpg')
new Items('Scissors','img/scissors.jpg')
new Items('Shark','img/shark.jpg')
new Items('Sweep','img/sweep.jpg')
new Items('Tauntaun','img/tauntaun.jpg')

new Items('Unicorn','img/unicorn.jpg')
new Items('Water can','img/water-can.jpg')
new Items('Wine Glass','img/wine-glass.jpg')

function getNumbers()
{
    return Math.floor(Math.random() * products.length);
}
console.log(getNumbers())

console.log(products)

function render()
{
    imgIndex1=getNumbers();
    imgIndex2=getNumbers();
    imgIndex3=getNumbers();

    while(imgIndex1===imgIndex3 || imgIndex1 ===imgIndex2 || imgIndex3 === imgIndex2)
    {
        imgIndex1=getNumbers()
        imgIndex2=getNumbers()
    }
    img1.src=products[imgIndex1].source;
    img2.src=products[imgIndex2].source;
    img3.src=products[imgIndex3].source;

}

img1.addEventListener('click',userClick)
img2.addEventListener('click',userClick)
img3.addEventListener('click',userClick)

function userClick(event)
{
    userAttempts++;

    if(userAttempts<attempts)
    {
        if(event.target.id==='image1')
        {
            console.log(products[imgIndex1])
            products[imgIndex1].vote++;
        }
        else if(event.target.id==='image2')
        {
            console.log(products[imgIndex2])
            products[imgIndex2].vote++;
        }
        else if(event.target.id==='image3')
        {
            console.log(products[imgIndex3])
            products[imgIndex3].vote++;
        }
        render()
    

    }
    else
        {
            buttonElement.hidden=false;
            buttonElement.addEventListener('click',showList)

            function showList()
            {
                let list=document.getElementById('results')
                for(let i=0;i<products.length;i++)
            {
                let listItem=document.createElement('li')
                list.appendChild(listItem)

                listItem.textContent=`${products[i].name} has ${products[i].vote} votes`
            }
            buttonElement.removeEventListener('click',showList)
            }

            

        img1.removeEventListener('click',userClick)
        img2.removeEventListener('click',userClick)
        img3.removeEventListener('click',userClick)

        }
        

}
render()