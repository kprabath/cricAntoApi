# LOGIN USER / LOGOUT USER

Used to collect a Token for a registered User.

> "Check is the `isTempPassword` is `true` or `false`. If it is true navigate to password change UI and follow the `/change_password` route and update the password."
> For the logout remove the token from the client end and call the `/logout` route to set the values into null

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/login`  |
| Method                | `POST`                     |
| Auth required         | `No`                     |
| Permissions required  | `None`                    |

## Parameters

### Input

```json
{
    "username": "[valid email address]",
    "password": "[password in plain text]"
}
```

### Output

```json
{
    "status": "200 OK",
    "token": "login token is here",
    "message": "user Information Successfully Validated",
}
```

## * Example Code (Js - Axios)

### Sample Input

```js
const axios = require('axios');

let config = {
  method: 'post',
  url: 'http://localhost:5000/register',
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
