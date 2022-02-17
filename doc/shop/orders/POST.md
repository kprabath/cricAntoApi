# PRODUCTS POST REQUESTS

Get the details of all the product information.

## 1. Save a Product

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/shop/order/`  |
| Method                | `POST`                     |
| Auth required         | `YES`                     |
| Permissions required  | `None`                    |

### Success Response

#### Input

```json
{
  "item_name": "Air Pods Latest",
  "type": "electric",
  "description": "The item ordered",
  "price": 100,
  "quantity": 3,
  "user_email": "test@test.com"
}
```

#### Output

```json
  {
    "status": "200 OK",
    "message": "Saved Successfully",
    "result": {
        "_id": "61d2a3db2d8f7a60f7782340",
        "item_name": "Air Pods Latest",
        "type": "electric",
        "description": "The item ordered",
        "price": 100,
        "quantity": 3,
        "user_email": "test@test.com",
        "order_id": "b31c8450-6c65-11ec-aaca-555bd9f57f29",
        "__v": 0
    },
    "orderID": "b31c8450-6c65-11ec-aaca-555bd9f57f29"
  }
```

## * Example Code (Js - Axios)

```js
const axios = require('axios');

let config = {
  method: 'post',
  url: 'http://localhost:5000/shop/products',
  headers: { }
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

[Go Home](../../README.md)
