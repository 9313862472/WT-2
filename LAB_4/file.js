const fs = require('fs')

const homedata=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>HOME PAGE </h1>
    <a href="/contact">contact</a>
    <a href="/about">about</a>
</body>
</html>`

fs.writeFileSync('home.html',homedata,'utf-8')



const aboutdata=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>ABOUT PAGE </h1>
    <a href="/home">home</a>
    <a href="/contact">contact</a>
</body>
</html>`

fs.writeFileSync('about.html',aboutdata,'utf-8')

const contactdata=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>CONTACT PAGE </h1>
    <a href="/home">home</a>
    <a href="/about">about</a>
</body>
</html>`

fs.writeFileSync('contact.html',contactdata,'utf-8')