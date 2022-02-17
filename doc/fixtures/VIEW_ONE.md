# Fixtures VIEW ALL

Viewing all the fixtures in the collection

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/fixtures/view_one`  |
| Method                | `GET`                     |
| Auth required         | `YES`                     |
| Permissions required  | `YES`                    |

## Parameters

### Input

```json
{
    "fixtures_id": "fixtures_id",
}
```

### Output

```json
{
    "status": "200 OK",
    "result": "json object array is here",
    "message": "${fixture_id} fixtures information is available here"
}
```

## * Example Code (Js - Axios)

### Sample Input

```js
const axios = require('axios');

let config = {
  method: 'get',
  url: 'http://localhost:5000/tournament/view_one',
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
