# New Donation

Register a new Donation in the system

|     Description      |     Value     |
| :------------------: | :-----------: |
|         URL          | `/donations` |
|        Method        |    `POST`     |
|    Auth required     |     `No`      |
| Permissions required |    `None`     |

## Success Response

### Input

```json
{
    "userName": "userName",
    "name": "name",
    "email": "email",
    "phoneNumber": "phoneNumber",
    "membershipStatus": "membershipStatus",
    "description": "description",
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

[Go Home](../README.md)
