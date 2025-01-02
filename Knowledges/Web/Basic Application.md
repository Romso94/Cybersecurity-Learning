


| **Request Header** | **Example**                                                                      | **Description**                                                                          |
| ------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Host               | `Host: tryhackme.com`                                                            | Specifies the name of the web server the request is for.                                 |
| User-Agent         | `User-Agent: Mozilla/5.0`                                                        | Shares information about the web browser the request is coming from.                     |
| Referer            | `Referer: https://www.google.com/`                                               | Indicates the URL from which the request came from.                                      |
| Cookie             | `Cookie: user_type=student; room=introtowebapplication; room_status=in_progress` | Information the web server previously asked the web browser to store is held in cookies. |
| Content-Type       | `Content-Type: application/json`                                                 | Describes what type or format of data is in the request.                                 |


# Body 

**URL Encoded (application/x-www-form-urlencoded)**  
A format where data is structured in pairs of key and value where (`key=value`). Multiple pairs are separated by an (`&`) symbol, such as `key1=value1&key2=value2`. Special characters are percent-encoded.


```http
POST /profile HTTP/1.1
Host: tryhackme.com
User-Agent: Mozilla/5.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 33

name=Aleksandra&age=27&country=US
```


**Form Data (multipart/form-data)**  
Allows multiple data blocks to be sent where each block is separated by a boundary string. The boundary string is the defined header of the request itself. This type of formatting can be used to send binary data, such as when uploading files or images to a web server.

```http
POST /upload HTTP/1.1
Host: tryhackme.com
User-Agent: Mozilla/5.0
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="username"

aleksandra
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="profile_pic"; filename="aleksandra.jpg"
Content-Type: image/jpeg

[Binary Data Here representing the image]
----WebKitFormBoundary7MA4YWxkTrZu0gW--
```

**JSON (application/json)**  
In this format, the data can be sent using the JSON (JavaScript Object Notation) structure. Data is formatted in pairs of name : value. Multiple pairs are separated by commas, all contained within curly braces { }.

```http
POST /api/user HTTP/1.1
Host: tryhackme.com
User-Agent: Mozilla/5.0
Content-Type: application/json
Content-Length: 62

{
    "name": "Aleksandra",
    "age": 27,
    "country": "US"
}
```

**XML (application/xml)**  
In XML formatting, data is structured inside labels called tags, which have an opening and closing. These labels can be nested within each other. You can see in the example below the opening and closing of the tags to send details about a user called Aleksandra.

```http
POST /api/user HTTP/1.1
Host: tryhackme.com
User-Agent: Mozilla/5.0
Content-Type: application/xml
Content-Length: 124

<user>
    <name>Aleksandra</name>
    <age>27</age>
    <country>US</country>
</user>
```

---
# Status 


| Status Code | Info                        |
| ----------- | --------------------------- |
| **100-199** | **Informational Responses** |
| **200-299** | **Successful Responses**    |
| **300-399** | **Redirection Messages**    |
| **400-499** | **Client Error Responses**  |
| **500-599** | **Server Error Responses**  |

---
# Security  Headers

> Content-Security-Policy (CSP) :  
> A CSP header is an additional security layer that can help mitigate against common attacks like Cross-Site Scripting (XSS). Malicious code could be hosted on a separate website or domain and injected into the vulnerable website. A CSP provides a way for administrators to say what domains or sources are considered safe and provides a layer of mitigation to such attacks.

- **default-src**  
    - which specifies the default policy of self, which means only the current website.  
      
- **script-src**  
    - which specifics the policy for where scripts can be loaded from, which is self along with scripts hosted on `https://cdn.tryhackme.com`  
      
- **style-src**  
    - which specifies the policy for where style CSS style sheets can be loaded from the current website (self)


>Strict-Transport-Security (HSTS) : 
>The HSTS header ensures that web browsers will always connect over HTTPS. Let's look at an example of HSTS

- **max-age**  
    - This is the expiry time in seconds for this setting  
    
- **includeSubDomains**  
    - An optional setting that instructs the browser to also apply this setting to all subdomains.  
    
- **preload  
    **- This optional setting allows the website to be included in preload lists. Browsers can use preload lists to enforce HSTS before even having their first visit to a website.

> X-Content-Type-Options : 
> The X-Content-Type-Options header can be used to instruct browsers not to guess the MIME time of a resource but only use the Content-Type header. Here’s an example 

- **nosniff**  
	- This directive instructs the browser not to sniff or guess the MIME type.

> Referrer-Policy 
> This header controls the amount of information sent to the destination web server when a user is redirected from the source web server, such as when they click a hyperlink. The header is available to allow a web administrator to control what information is shared.  Here are some examples of Referrer-Policy

- **no-referrer**  
    - This completely disables any information being sent about the referrer  
      
- **same-origin**  
    - This policy will only send referrer information when the destination is part of the same origin. This is helpful when you want referrer information passed when hyperlinks are within the same website but not outside to external websites.  
    
- **strict-origin**  
    - This policy only sends the referrer as the origin when the protocol stays the same. So, a referrer is sent when an HTTPS connection goes to another HTTPS connection.  
      
- **strict-origin-when-cross-origin**  
    - This is similar to strict-origin except for same-origin requests, where it sends the full URL path in the origin header.

--- 
# Fingerprint Web Server

> Banner Grabing to find the version and other informations about a server
#### Apache

> Apache header looks like : 

```
HTTP/1.1 200 OK
Date: Thu, 05 Sep 2019 17:42:39 GMT
Server: Apache/2.4.41 (Unix)
Last-Modified: Thu, 05 Sep 2019 17:40:42 GMT
ETag: "75-591d1d21b6167"
Accept-Ranges: bytes
Content-Length: 117
Connection: close
Content-Type: text/html
...
```

> It follow this order : 
	- Date
	- Server
	- Last-Modified
	- ETag
	- Accept-Ranges
	- Content-Length
	- Connection
	- Content-Type
#### Nginx 

```
HTTP/1.1 200 OK
Server: nginx/1.17.3
Date: Thu, 05 Sep 2019 17:50:24 GMT
Content-Type: text/html
Content-Length: 117
Last-Modified: Thu, 05 Sep 2019 17:40:42 GMT
Connection: close
ETag: "5d71489a-75"
Accept-Ranges: bytes
...
```

> It follow like other server this order : 

- Server
- Date
- Content-Type

#### Obfuscate Header

To prevent from banner grabing we can obfuscate the information sent by the server in the header.

