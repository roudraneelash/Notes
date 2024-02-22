JSON-web-token(JWT)

- encrypted token(it uses hashing, i.e it cannot be decoded back)
- stateless
- easy to scale
- can be used by mobile and web both

structure:

header.payload.signature

header{
"alg":"HS256"
"typ":"JWT"
}
Payload{
"sub":"123456789",
"name":"John Doe",
"admin":true
}
Signature{
HMA(BASE64URLENCODED(HEADER)+"."+

base64UrlEncode(payload),secret)
}

workflow

client sends credentials-> server(verifies) and creates jwt
server send the token to the client -> clients send the token everytime with the request as authorization
server verified the token and handles request
