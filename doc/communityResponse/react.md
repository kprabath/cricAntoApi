# Update Reactions

Update Reactions in the collection

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/response/react`  |
| Method                | `POST`                     |
| Auth required         | `YES`                     |
| Permissions required  | `YES`                    |

## Parameters

### Input

```json
{
   "post_id": "post_id", 
   "userName": "userName"
}
```

### Output

```json
{
    "status": "200 OK",
    "result": "json object array is here",
    "message": "${post_id} post information is available here"
}
```

[Go Home](../README.md)
