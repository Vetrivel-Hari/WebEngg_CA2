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
            entries = result["entries"];
            freq = {}

            for (i of entries){
                if(freq.hasOwnProperty(i["Category"])){
                    freq[i["Category"]]++;
                }
                else
                freq[i["Category"]] = 1;
            }

            xValues = Object.keys(freq)
            yValues = Object.values(freq)

            console.log(freq);
            console.log(xValues);
            console.log(yValues);

            var barColors = ["red", "green","blue","orange","brown"];

            c = 0;
            for (let i=1; i<=46; i++){
                if(c == 6)
                    c = 0
                
                barColors.push(barColors[c]);
                c++;
            }

            new Chart("myChart", {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                backgroundColor: barColors,
                data: yValues
                }]
            },
            options: {
                legend: {display: false}
              }
            });
        })
        .catch(error => console.log('error', error));
}