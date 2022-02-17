# PRODUCTS POST REQUESTS

Get the details of all the product information.

## 1. Save a Product

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/shop/products/`  |
| Method                | `POST`                     |
| Auth required         | `YES`                     |
| Permissions required  | `None`                    |

### Success Response

#### Input

```json
{
    "name": "Air pods New Release",
    "type": "Electric Items",
    "description": "This is a electronic device",
    "price": "35000",
    "quantity": "100"
}
```

#### Output

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
