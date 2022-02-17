# Fixtures VIEW ALL

Viewing all the Fixtures in the collection

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/fixtures/view_all`  |
| Method                | `GET`                     |
| Auth required         | `YES`                     |
| Permissions required  | `YES`                    |

## Parameters

### Input

```json
{
    
}
```

### Output

```json
{
    "status": "200 OK",
    "result": "json object array is here",
    "message": "All Fixtures information is available here"
}
```

## * Example Code (Js - Axios)

### Sample Input

```js
const axios = require('axios');

let config = {
  method: 'get',
  url: 'http://localhost:5000/fixtures/view_all',
  headers: { },
  body: {"JSON Object"}
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

});
```

[Go Home](../README.md)
