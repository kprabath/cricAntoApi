# REGISTER NEW Fixtures

Register a new fixtures in the system

|     Description      |     Value     |
| :------------------: | :-----------: |
|         URL          | `/fixtures` |
|        Method        |    `POST`     |
|    Auth required     |     `No`      |
| Permissions required |    `None`     |

## Success Response

### Input

```json
{
  "item_name": "item_name",
  "status": "status",
  "format": "format",
  "type": "type",
  "age_group": "age_group",
  "timeOfDay": "timeOfDay",
  "matchNumber": "match_number",
  "matchName": "match",
  "venue": "venue",
  "startingDate": "startingDate",
  "endingDate": "endingDate",
  "startingTime": "startingTime",
}
```

### Output

```json
{
    "status": "200 OK",
    "message": "Saved Successfully",
    "result": {
        "_id": "61d2a7651c15ff57f35e0b62",
        "item_name": "item_name",
        "status": "status",
        "format": "format",
        "age_group": "age_group",
        "type": "type",
        "description": "description",
        "tournament_id": "cf1146d0-6c67-11ec-acf7-fb6c45c39af6",
        "__v": 0
    },
    "tournament_id": "cf1146d0-6c67-11ec-acf7-fb6c45c39af6"
}
```

## * Example Code (Js - Axios)

```js
const axios = require('axios');

let config = {
  method: 'post',
  url: 'http://localhost:5000/fixtures',
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
