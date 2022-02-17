# EDIT TOURNAMENT

Editing tournament in the collection

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/tournament/edit`  |
| Method                | `GET`                     |
| Auth required         | `YES`                     |
| Permissions required  | `YES`                    |

## Parameters

### Input

```json
{
    "tournament_id": "tournament_id",
    "updatedName":  "updatedName",
    "updatedFormat": "updatedFormat",
    "updatedType": "updatedType",
    "updatedAgeGroup":  "updatedAgeGroup",
    "updatedDescription": "updatedDescription"
}
```

### Output

```json
{
    "status": "200 OK",
    "result": "json object array is here",
    "message": "${tournament_id} Tournament information is available here"
}
```

## * Example Code (Js - Axios)

### Sample Input

```js
const axios = require('axios');

let config = {
  method: 'get',
  url: 'http://localhost:5000/tournament/end',
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
