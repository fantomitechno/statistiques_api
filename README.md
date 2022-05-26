# statistiques_api
 
An API to store statistics : 

```ssh
GET /stats/{id}?choice_id={choice_id?}
```
STATUS : 
- SUCCES : 200
if no choice_id provided
```json
{
  id: {id},
  stats: {
    [string]: number
  }
}
```
if choice_id provided
```json
{
  id: {id},
  choice: {
    id: {choice_id},
    number: number
  }
}
```

```ssh
POST /register
BODY : { id : string }
```
STATUS :
- SUCCESS : 200
- FAILURE : 400
```json
{
  message: string
}
```

```ssh
POST incremente/{id}/{choice_id}
```
STATUS :
- INCREMENTE : 200
- CREATION : 201
```json
{
  id: {id},
  choice: {
    id: {choice_id},
    number: number
  }
}
```
- FAILURE : 400
```json
{
  message: string
}
```