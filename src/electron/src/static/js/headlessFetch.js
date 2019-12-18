
function populateHtml(jsonPayload){
    document.getElementById("title_movie").innerText = jsonPayload.name;
    let tagsString = ""
    for(var i=0;i<jsonPayload.tags.length;i++){
        tagsString+= " / "+jsonPayload.tags[i]
    }
    document.getElementById("tags").innerText = tagsString;
    document.getElementById("description_tag").innerText = jsonPayload.description;
    document.getElementById("score_text").innerText = `${jsonPayload.rank}/10`;
    document.getElementById("time_duration").innerText = jsonPayload.duration;
    document.getElementById("year_date").innerText = jsonPayload.year;
    document.getElementById("card_movie").src = jsonPayload.image;
}
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        let jsonPayload = JSON.parse(xhr.responseText);
        populateHtml(jsonPayload);
    }
}
xhr.open('GET', 'http://localhost:4000/api/movies/0', true);
xhr.send();


