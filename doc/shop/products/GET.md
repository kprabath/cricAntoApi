# PRODUCTS GET REQUESTS

Get the details of all the product information.

## 1. View All

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/shop/products/viewall`  |
| Method                | `GET`                     |
| Auth required         | `YES`                     |
| Permissions required  | `None`                    |

### Success Response 1

#### Input 1

```http
http://localhost:5000/shop/product/viewall
```

#### Output 1

```json
    {
        "_id": "61d2a7651c15ff57f35e0b62",
        "name": "Air pods New Release",
        "type": "Electric Items",
        "description": "This is a electronic device",
        "price": 35000,
        "quantity": 100,
        "product_id": "cf1146d0-6c67-11ec-acf7-fb6c45c39af6",
        "__v": 0
    }
```

## 2. View Specific Product

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/shop/products/get/:product_id`  |
| Method                | `GET`                     |
| Auth required         | `YES`                     |
| Permissions required  | `None`                    |

### Success Response 2

#### Input 2

```http
http://localhost:5000/shop/products/get/cf1146d0-6c67-11ec-acf7-fb6c45c39af6
```

#### Output 2

```json
{
    "status": "200 OK",
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
    "state": {
        "isUnique": true,
        "message": "There is only one value under this ID"
    }
}
```

## * Example Code (Js - Axios)

```js
const axios = require('axios');

let config = {
  method: 'get',
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
```

[Go Home](../../README.md)
