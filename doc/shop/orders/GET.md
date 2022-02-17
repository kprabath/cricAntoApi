# ORDERS GET REQUESTS

Get the details of all the product information.

## 1. View All

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/shop/order/viewall`  |
| Method                | `GET`                     |
| Auth required         | `YES`                     |
| Permissions required  | `None`                    |

### Success Response 1

#### Input 1

```http
http://localhost:5000/shop/order/viewall
```

#### Output 1

```json
     {
      "_id": "61d1ec399492a3a5dd42688e",
      "item_name": "Air Pods",
      "type": "electric",
      "description": "The item ordered",
      "price": 100,
      "quantity": 2,
      "user_email": "thisisatest@test.com",
      "__v": 0
  }
```

## 2. View Specific Order

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/shop/order/get/:order_id`  |
| Method                | `GET`                     |
| Auth required         | `YES`                     |
| Permissions required  | `None`                    |

### Success Response 2

#### Input 2

```http
http://localhost:5000/shop/order/get/13e5f2e0-6c60-11ec-a22c-3bb378cf3ecc
```

#### Output 2

```json
  {
    "status": "200 OK",
    "result": {
        "_id": "61d29a6c8233b143ec821e7d",
        "item_name": "Air Pods",
        "type": "electric",
        "description": "The item ordered",
        "price": 100,
        "quantity": 2,
        "user_email": "thisisatest@test.com",
        "order_id": "13e5f2e0-6c60-11ec-a22c-3bb378cf3ecc",
        "__v": 0
    },
    "state": {
        "isUnique": true,
        "message": "There is only one value under this ID"
    }
  }
```

## * Example Code (Js - Axios)

```js
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://localhost:5000/shop/order/viewall',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

```

[Go Home](../../README.md)
