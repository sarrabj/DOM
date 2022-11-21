
// item1//
var buttons = document.querySelector('.buttons')

var item1 = document.querySelector('.item1')

var materialsymbolsoutlined = document.querySelector('.material-symbols-outlined')

var favorite = document.querySelector('.myfav')

 
var elem = document.getElementById('red')
favorite.addEventListener('click',()=>{
elem.style.color='red'
})

materialsymbolsoutlined.addEventListener('click',()=>{
item1.remove()
}) 




//item2//
var item2 = document.querySelector('.item2')

var mydel= document.querySelector('.mydel')

var myfav2= document.querySelector('.myfav2')


mydel.addEventListener('click',()=>{
    item2.remove()
    }) 

var el = document.getElementById('red1')
myfav2.addEventListener('click',()=>{
el.style.color='red'
})

//item3//
var item3 = document.querySelector('.item3')

var mydell= document.querySelector('.mydell')

var myfav3= document.querySelector('.myfav3')

mydell.addEventListener('click',()=>{
    item3.remove()
    }) 

    var ell = document.getElementById('red2')
    ell.addEventListener('click',()=>{
    ell.style.color='red'
    })




    
    let addbuttons=Array.from(document.querySelectorAll("#plus"))
    console.log(addbuttons)
    
    let minbuttons=Array.from(document.querySelectorAll("#moins"))
    console.log(minbuttons)
    
    let quantitys= Array.from(document.querySelectorAll("#count"))
    console.log(quantitys)
    
    let prices = Array.from(document.querySelectorAll(".total-price"))
    console.log(prices)
    
    let arrOfQuantity=[]
    let arrOfPrices=[]
     
    for (let i in quantitys){
        arrOfQuantity[i]=0;
    }
    for (let i in prices){
        arrOfPrices[i]=+ prices[i].innerHTML;
    } 
    function updateTotal(){
         let total = 0 ;
        for(let i in quantitys)
        
            total += arrOfPrices[i]*arrOfQuantity[i];
            document.getElementById('totalp').textContent=`Total Price : ${total}$ ` ;
        
    }
    updateTotal();
    
    for(let i in addbuttons){
        addbuttons[i].addEventListener("click",function(){
            arrOfQuantity[i]++;
            quantitys[i].innerHTML =arrOfQuantity[i];
            updateTotal()
        })
    }
    
    for(let i in minbuttons){
        minbuttons[i].addEventListener("click",function(){
            if(arrOfQuantity[i]>0){  
            arrOfQuantity[i]--;
            quantitys[i].innerHTML =arrOfQuantity[i];
            updateTotal();}
        })
    }