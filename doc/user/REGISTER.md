# REGISTER NEW USER

Register a new user in the system

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/login`  |
| Method                | `POST`                     |
| Auth required         | `No`                     |
| Permissions required  | `None`                    |

## Success Response

### Input

```json
{
    "userName": "codevsrilanka@gmail.com",
    "password": "123456789",
    "firstName": "Test",
    "lastName": "User",
    "email":"codevsrilanka@gmail.com",
    "address": "User Address goes here",
    "phoneNumber": "+94771011006",
}
```

### Output

```json
{
    "status": "200 OK",
    "message": "Saved Successfully",
    "result": {
        "_id": "61d2a7651c15ff57f35e0b62",
        "name": "Air pods New Release",
        "type": "Electric Items",
        "description": "This is a electronic device",
        "price": 35000,
        "quantity": 100,
        "product_id": "cf1146d0-6c67-11ec-acf7-fb6c45c39af6",
        "__v": 0
    },
    "product_id": "cf1146d0-6c67-11ec-acf7-fb6c45c39af6"
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
