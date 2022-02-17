# REGISTER VERIFY

Register a new user in the system

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/login/verify`  |
| Method                | `POST`                     |
| Auth required         | `No`                     |
| Permissions required  | `None`                    |

## Success Response

### Input

```json
{
  "userName": "codevsrilanka@gmail.com",
  "verificationCode": "594802"
}
```

### Output

```json
{
    "status": "200 OK",
    "message": "Saved Successfully",
    "response": "response here"
}
```

## * Example Code (Js - Axios)

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
