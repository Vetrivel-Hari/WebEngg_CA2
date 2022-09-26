window.onpaint = preloadFunc();

function preloadFunc()
{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("api.publicapis.org/entries", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}