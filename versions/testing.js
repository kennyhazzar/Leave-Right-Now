var axios = require('axios');


n = 1;
var a = setInterval(() => {
    axios.get('https://reqres.in/api/users?page=2')
            .then((response) => {
                console.log(response.data.total);
            });
    n++;
    if(n == 11){clearInterval(a)}    
}, 1000);