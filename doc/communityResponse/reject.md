# Reject Posts

REJECT POSTS in the collection

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/managePosts/reject`  |
| Method                | `GET`                     |
| Auth required         | `YES`                     |
| Permissions required  | `YES`                    |

## Parameters

### Input

```json
{
  "post_id": "post_id", 
}
```

### Output

```json
{
    "status": "200 OK",
    "result": "json object array is here",
    "message": "${tournament_id} fixtures information is available here"
}
```

[Go Home](../README.md)
