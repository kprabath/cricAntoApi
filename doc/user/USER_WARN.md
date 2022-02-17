# SEND WARNINGS

Send warnings to the users if they have done any illegal actions

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/user/warn`  |
| Method                | `POST`                     |
| Auth required         | `YES`                     |
| Permissions required  | `YES`                    |

## Parameters

### Input

```json
{
  "userName" : "userName is here",
}
```

### Output

```json
{
    "status": "202 OK",
    "result": "json object array is here",
    "message": "User updated successfully"
}
```

## * Example Code (Js - Axios)

### Sample Input

```js
const axios = require('axios');

let config = {
  method: 'post',
  url: 'http://localhost:5000/user/warn',
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
