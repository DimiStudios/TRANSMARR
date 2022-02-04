var xhr = new XMLHttpRequest();
var url = "http://localhost:8000/api/task";
var form = document.querySelector('.form');
var formButton = document.querySelector('.custom-submit');


function getData() {
    xhr.open("GET", url+'/1', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var children = "";
            var div = document.createElement("div");
            div.classList.add("response-container");

            for (var i in response) {
                children += '<p class="response">' + i + ': ' + response[i] + '</p>';
            }
            
            div.innerHTML = children;

            form.appendChild(div);

        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            console.log("ha existido un error");
        }
    };

    xhr.send ();
}

function createData(data) {
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 201) {
            formButton.innerHTML = '<p>Enviado! Gracias, he recibido:</p>';
            getData(); //Siento la cutrada... no me ha dado tiempo a mejorarlo
        } else if (xhr.readyState === 4 && xhr.status !== 201) {
            console.log("ha existido un error");
        }
    };

    xhr.send(JSON.stringify(data));
}



/* devuelve err_empty_response
function updateData(data) {
    xhr.open("PUT", url+'/1', true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            console.log("ha existido un error");
        }
    };

    xhr.send();
}
*/

//getData();