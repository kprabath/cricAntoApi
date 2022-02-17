# Notice VIEW ALL

Viewing one notice in the collection

|      Description      |           Value           |
|:--------------------: |:------------------------: |
| URL                   | `/notice/view_one`  |
| Method                | `GET`                     |
| Auth required         | `YES`                     |
| Permissions required  | `YES`                    |

## Parameters

### Input

```json
{
    "notice_id": "notice_id",
}
```

### Output

```json
{
    "status": "200 OK",
    "result": "json object array is here",
    "message": "${notice_id} post information is available here"
}
```

[Go Home](../README.md)
