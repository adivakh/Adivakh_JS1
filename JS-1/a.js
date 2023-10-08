// IF

let harga = 150000

if (100000 < harga) {
    console.log('Murah')
}

//ELSE
let tinggi = 165

if (160 > 165) {
    console.log("TRUE")
} else {
    console.log("FALSE")
}

//NESTED IF
ipk=prompt("Masukan IPK")

if (ipk>=3.0 && ipk<=4.0){
    if (ipk>3.5){
        document.write("IPK kamu bagus banget")
     }else {
        document.write("IPK kamu bagus")
      }
}else if (ipk<3.0){
    document.write("Tingkatkan lagi IPK mu ya")
}else {
    document.write("IPK yang kamu masukan kelebihan maksimal 4.0")
}
