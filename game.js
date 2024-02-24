
// pc ye 1-20 arasında sayı tuttrduk
let rasgeleSayı = Math.ceil(Math.random()*20)
// console.log(rasgeleSayı);

let mesaj = document.querySelector(".msg");

let skor = 10;
// skoru index.htmlden çekebilirdik.ama çok kullanacağımız için bu daha tercih edilen bir yol.
let enYüksekSkor = 0;

document.querySelector(".check").addEventListener("click", ()=>{
    // inputa girilen değere yani kullanıcının tahiminine erişmek istiyorum
    const tahmin = document.querySelector(".guess").value
    // console.log(tahmin);

// ilk tahmin yoksa tahmin girmeden butona bastıysak

if (!tahmin) {
    mesaj.textContent = "lütfen bir sayı giriniz..."
    // tahmin doğruysa 
} else if(tahmin === rasgeleSayı) {
    
    mesaj.textContent = "tebrikler bildiniz...."
    document.querySelector("body").style.backgroundColor= "green"
    document.querySelector(".number").textContent = rasgeleSayı;

    // top-score kontrolu yap
    // !tahmin yanlışsa
}else{
    // ?skor 1 den büyük olduğu sürece hakkım var 
    if(skor>1){
        skor--;
        document.querySelector(".score").textContent= skor
        // turnary yöntemi  kullandık
        tahmin<rasgeleSayı ? mesaj.textContent= "Arttır" : mesaj.textContent= "Azalt"
    }else{
// GAME OVER 
mesaj.textContent = "oyunu kaybettiniz :( "
document.querySelectorİ(".score").textContent = 0;
document.querySelector("body").style.backgroundColor = "red"
    }
}

})

// Again butonuna basınca ayarlar başlangıç değerlerine kurulsun.arka plan #2d3436 olsun

document.querySelector(".again").onclick = ()=>{
    document.querySelector("body").style.backgroundColor = "#2d3436"
    rasgeleSayı = Math.ceil( Math.random()*20)
    console.log("rastgele sayı:",rasgeleSayı);

    skor=10;
    document.querySelector(".score").textContent=skor
    document.querySelector(".number").textContent="?"
    document.querySelector(".guess").value ="";
    mesaj.textContent = "oyun yeni oyun için başlıyor..."
}


// ! ENTER TUŞU ÇALIŞSIN..
// KLAVYEDEN ENTER BUTONUNA BASILDIĞINDA CHECK BUTONUNU TETİKLE 

document.addEventListener("keydown",function(e){
    console.log(e);
    if (e.key==="enter") {
       document.querySelector(".check").click ()
    }
})


 

