let saunaTemp = 0

while (saunaTemp < 73 || saunaTemp > 77) {

       saunaTemp = (parseInt(window.prompt('Please enter a suitable sauna temperatur')) - 32) / (9/5)

       if (saunaTemp< 73){
        alert('To cold, please turn up the heat!')
       }
       if (saunaTemp> 77) {
        alert('To hot, please turn the heat down!')
       }
      
}

alert('The sauna is ready to use')


// F = C * 9/5 + 32
// °C = (°F - 32) ÷ 9/5 
