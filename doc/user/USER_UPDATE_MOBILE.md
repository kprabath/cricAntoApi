# UPDATE MOBILE NUMBER

Update mobile number of the selected user

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/user/update/mobile_number`  |
| Method                | `POST`                     |
| Auth required         | `YES`                     |
| Permissions required  | `YES`                    |

## Parameters

### Input

```json
{
   "userName" : "userName is here",
   "updatedPhoneNumber": "Updated Phone Number is here",
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
  url: 'http://localhost:5000/user/updated/mobile_number',
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
