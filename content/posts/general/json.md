---
title: 'JSON (JavaScript Object Notation)'
date: 2024-02-01
draft:  false   
featured: false  
description: "JSON (JavaScript Object Notation)"
thumbnail: "/posts/general/images/json.png"
featureImage: "/posts/general/images/json.png" 
shareImage: "/posts/general/images/json.png"
author: "Anand Vyas"
tags:
    - Json
categories:     
    - General
---

JSON (JavaScript Object Notation) is a standard file format that uses text to communicate data objects to array data types. This notation makes it easy for applications to parse and generate files. JSON grew out of the need to have a real-time server-to-web browser communication.

### Datatypes
- String
- Number
- Boolean
- null
- Object
- Array

### Eample
```json
{
    //comments
    "string": "Anand vyas",  // String
    "number": { // number, float
        "age": 29,
        "cost": 299.99,
        "temperature": -10.5,
        "speed_of_light": 1.23e11
    },
    "bool": true, // Boolean
    "value": null, // Null value
    "array": ["Anand","vyas"], // Array example
    "people" : [ // Array with object
        { "firstName": "John", "lastName": "Smith", "age": 35 },
        { "firstName": "Jane", "lastName": "Smith", "age": 32 }
    ],
    "address" : { // Object
        "line1" : "555 Main Street",
        "city" : "Denver",
        "stateOrProvince" : "CO",
        "zipOrPostalCode" : "80202",
        "country" : "USA"
    }
}
```