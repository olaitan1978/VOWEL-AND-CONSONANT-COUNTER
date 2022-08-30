let inpo=document.getElementById("fond")
let outy=document.getElementById("out");
let button_vowel=document.getElementById("vowe");
let button_consonant=document.getElementById("conso");
let count=0
let vowel="aeiou"
let consonant="b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z"

button_vowel.addEventListener("click",()=>{

    for(let i=0; i<(inpo.value).length; i++){
        if((vowel.indexOf(inpo.value[i]))>-1){
            count++
            outy.innerHTML=`THE TOTAL VOWEL IN THIS YOUR WRITE-UP IS ${count} .THANK YOU`
            outy.style.backgroundColor="white"
                      
        }
        
    }

})
button_consonant.addEventListener("click",()=>{

    for(let i=0; i<(inpo.value).length; i++){
        if((consonant.indexOf(inpo.value[i]))>1){
            count++
            outy.innerHTML=`THE TOTAL CONSONANT IN THIS YOUR WRITE-UP IS ${count} .THANK YOU`
            outy.style.backgroundColor="grey"

        }
        
    }
})