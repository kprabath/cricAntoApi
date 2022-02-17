# EDIT fixtures

Editing fixtures in the collection

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/fixtures/edit`  |
| Method                | `GET`                     |
| Auth required         | `YES`                     |
| Permissions required  | `YES`                    |

## Parameters

### Input

```json
{
   "tournament_id": "tournament_id", 
   "updatedStatus": "updatedStatus"
}
```

### Output

```json
{
    "status": "200 OK",
    "result": "json object array is here",
    "message": "${tournament_id} fixtures information is available here"
}
```

## * Example Code (Js - Axios)

### Sample Input

```js
const axios = require('axios');

let config = {
  method: 'get',
  url: 'http://localhost:5000/fixtures/update',
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
