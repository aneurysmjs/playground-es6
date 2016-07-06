// get XHR
var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://www.omdbapi.com/?t=batman&y=2012&plot=short&r=json', true);

xhr.send();

xhr.onreadystatechange = () => {
   if (xhr.status >= 200) {
      let h4 = document.querySelector('h4');
      h4.innerHTML = JSON.stringify(xhr.responseText, null, 3);
   }
};