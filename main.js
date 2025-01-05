

function sendToWhatsapp(){
    
    let number = "+9647505887492"
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value
    let y = document.getElementById('yes').checked
    let n = document.getElementById('no').checked
    if(y==true && n==false){
        var check = "Yes"
    }else{
        check = "No"
    }

    var url = "https://wa.me/" + number + "?text="+"Name: "+name+"%0a"+"Email: "+email+"%0a"+"Check: "+check+"%0a"+"Message: "+message+"%0a%0a"
    window.open(url,"_blank").focus()

}
