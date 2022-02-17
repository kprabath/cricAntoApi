# CHANGE PASSWORD

Send the token to the api and api will update the sent password.

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/login/change_password`  |
| Method                | `POST`                     |
| Auth required         | `YES`                     |
| Permissions required  | `None`                    |

## Parameters

### Input

```json
{
    "token": "[pass the user web token]",
}
```

### Output

```json
{
    "status": "200 OK",
    "response": "response goes here",
    "message": "Password changed Successfully",
}
```

## * Example Code (Js - Axios)

### Sample Input

```js
const axios = require('axios');

let config = {
  method: 'post',
  url: 'http://localhost:5000/login/change_password',
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
