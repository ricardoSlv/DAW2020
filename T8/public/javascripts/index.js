function showImage(name, type) {

    let ficheiro
    if(type==='image/png' || type==='image/jpeg')
        ficheiro = $(`
        <img src="/fileStore/${name}" style="display:block; max-height:90%; max-width:100%"> 
            <h3>
                <a class="w3-text-blue" href="/files/download/${name}" download rel="noopener noreferrer" target="_blank">
                    ${name}
                </a>
                , ${type}
            </h3> 
        </img>`)
    else
        ficheiro = $('<p>'+name+', '+type+'</p>')

    $('#display').empty()
    $('#display').append(ficheiro)
    $('#display').modal()
}

function addFormFileField(){
    const fileObj = $(`
    <div class="w3-row w3-margin-bottom">
        <label class="w3-col s3 w3-text-blue">
            <b>Description</b>
        </label>
        <input class="w3-col s9 w3-border w3-input w3-border w3-light-grey" type="text" name="desc" />
        <label class="w3-col s3 w3-text-blue">
            <b>Select file</b>
        </label>
        <input class="w3-col s9 w3-border w3-input w3-border w3-light-grey"type="file" multiple="multiple" name="myFile" />
    </div>`)

    $(fileObj).insertBefore($('#form1 > input:last-of-type'))
}
