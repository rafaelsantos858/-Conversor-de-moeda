function calculartroco(){

    var reais = document.getElementById('valorreais').value
    
    var centavos = reais * 100

    var moeda5 = centavos/5

    var moeda10 = centavos/10

    var moeda25 = centavos/25

    var moeda50 = centavos/50

    var moeda1real = centavos/100


    var campocentavostotal = document.getElementById("centavostotal")

    campocentavostotal.value = centavos



   var camopo5 = document.getElementById("5cent")

   camopo5.value = moeda5


   var camopo10 = document.getElementById("10cent")

   camopo10.value = moeda10

   var camopo25 = document.getElementById("25cent")

   camopo25.value = moeda25


   var camopo50 = document.getElementById("50cent")

   camopo50.value = moeda50


   var camopo100 = document.getElementById("1real")

   camopo100.value = moeda1real


}