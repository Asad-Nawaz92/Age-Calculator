function calculateAge() {

    var birthDate = new Date(document.getElementById('birthdate').value)

    var currentDate = new Date()

    if (birthDate <= currentDate) {

        var difference = currentDate - birthDate

        var age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365))

        document.getElementById('result').style.color = 'white'
        document.getElementById('result').style.textAlign = 'center'
        document.getElementById('result').style.fontSize = '20px'
        document.getElementById('result').style.margin = '50px 450px auto 450px'
        document.getElementById('result').style.border = '2px solid yellowgreen'
        document.getElementById('result').style.borderRadius = '25px'

        document.getElementById('result').innerHTML = 'Your Age is : ' + age + ' Years'
    }
    else{
        document.getElementById('result').innerHTML = 'Please Enter a Validate Birthdate.'
        document.getElementById('result').style.color = 'white'
        document.getElementById('result').style.textAlign = 'center'
        document.getElementById('result').style.fontSize = '20px'
        document.getElementById('result').style.margin = '50px 450px auto 450px'
        document.getElementById('result').style.border = '2px solid yellowgreen'
        document.getElementById('result').style.borderRadius = '25px'
    }
}