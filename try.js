

function bringData(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'showEmailsData.php')

    xhr.onload = function(){
        console.log(this.response)
        var data = JSON.parse(this.response)
        console.log(data)
        for(let key in data){
            out += data[key].emails+"<br>"
            plc.innerHTML = out;
        }
    }
    xhr.send()
}