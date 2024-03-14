document.getElementById("load").onclick = getFile
var table = [];
var tableHeaders = [];

function getFile() {
    const input = document.getElementById('input-file')
    if ('files' in input && input.files.length > 0) {
        placeFileContent(document.getElementById('visualization-area'),input.files[0]);
    }
}

function placeFileContent(target, file) {
    target.removeAttribute("hidden");
        readFileContent(file).then(content => {
        target.querySelector("#content").innerHTML = mapCSVtoTable(content);
        target.querySelector("#success-msg").innerText = "Archivo leído exitosamente"
        target.querySelector("#row-count").innerText = `Total: ${table.length} filas`
    }).catch(error => {
        console.log(error)
        target.querySelector("#success-msg").innerText = `Hubo un error al leer el archivo:\n${error}`
    })
}

function readFileContent(file) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result)
        reader.onerror = error => reject(error)
        reader.readAsText(file)
    })
}

function mapJSONtoTable(data){
    table = [];
    tableHeaders = [];
    let html='';
    html += '<thead>';
    for(field of Object.keys(data[0])){
        html += `<th>${field}</th>`;
        tableHeaders.push(field);
    }
    html += '</thead><tbody><tr>';

    for(idx in data){
        let item = data[idx];
        table.push([]);
        let allfields = Object.keys(item);
        for(field of allfields){
            html += `<td>${item[field]}</td>`;
            table[idx].push(item[field])
        }
        html += '</tr><tr>';
    }
    html += '</tr></tbody>';
    return html;
}
function getContent() {
    let mockarooApiKey = '1c2194a0';
    let url = `https://my.api.mockaroo.com/users.json?key=1c2194a0`;
    let target = document.getElementById('visualization-area');
    $.ajax( {
        url: url,
        responseType:'application/json',
        success: function(data) {
            target.removeAttribute("hidden");
            target.querySelector("#content").innerHTML = mapJSONtoTable(data);
            target.querySelector("#success-msg").innerText = "Información obtenida exitosamente"
            target.querySelector("#row-count").innerText = `Total: ${table.length} filas`
        
        }, 
        error: function(xhr, status, error) {   
            target.querySelector("#success-msg").innerText = `Hubo un error al leer el archivo:\n${error}`
        }
    });
}

document.getElementById("fetch-button").onclick = getContent