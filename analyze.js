window.onpaint = preloadFunc();

function preloadFunc()
{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.publicapis.org/entries", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log('error', error));
}