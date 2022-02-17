# CREATE NEW POST

Create a New Post

|     Description      |     Value     |
| :------------------: | :-----------: |
|         URL          | `/newpost` |
|        Method        |    `POST`     |
|    Auth required     |     `No`      |
| Permissions required |    `None`     |

## Success Response

### Input

```json
{
  "userName": "userName",
  "postTitle": "postTitle",
  "postContent": "postContent",
}
// pass the image as the form-data in the request (key: postUpload)
```

### Output

```json
{
    "status": "200 OK",
    "message": "Saved Successfully",
    "result": "",
    "post_id": "cf1146d0-6c67-11ec-acf7-fb6c45c39af6",
    "imageURL":"imageURL"
}
```

[Go Home](../README.md)
