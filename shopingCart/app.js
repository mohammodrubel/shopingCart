function updateProductNumber(product,price,incrising){
    const productInput = document.getElementById(product+'-number')
    let productNumber = productInput.value;
        if (incrising == true){
            productNumber= parseInt(productNumber) + 1;
        }else if (productNumber > 0){
            productNumber= parseInt(productNumber) - 1;
        }

        productInput.value = productNumber
    // update Balance Value Inner Text 
    const productTotal = document.getElementById(product+'-total')
    productTotal.innerText = productNumber * price;
}
// phone incris and decris 
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false)
})


// incris and decrisis 
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true)
})
document.getElementById('case-minus').addEventListener('click',function(){   
    updateProductNumber('case',59,false) 
})