---
title: 'Yaml (Yet Another Markup Language)'
date: 2024-02-01
draft:  false   
featured: false  
description: "Yaml (YAML Ain’t Markup Language)"
thumbnail: "/posts/general/images/yaml.png"
featureImage: "/posts/general/images/yaml.png" 
shareImage: "/posts/general/images/yaml.png"
author: "Anand Vyas"
tags:
    - Yaml
categories:     
    - General
---

YAML (“Yet Another Markup Language”) is a human-readable data serialization language. It is commonly used for configuration files

### Basic Rules
> YAML is case sensitive.

> YAML does not allow the use of tabs. Spaces are used instead as tabs because tabs are not universally supported.

### Scalar types (Datatypes)
```yaml
n1: 1            # integer          
n2: 1.234        # float      

s1: 'abc'        # string        
s2: "abc"        # string           
s3: abc          # string           

b: false         # boolean type 

d: 2015-04-05    # date type

e: !!str 123     # a string, disambiguated by explicit type
f: !!str Yes     # a string via explicit type
g: !!float 123   # also a float via explicit data type prefixed by (!!)
    
```
#### Equavalent JSON
```json {.wrap}
{
    "n1": 1,
    "n2": 1.234,
    "s1": "abc",
    "s2": "abc",
    "s3": "abc",
    "b": false,
    "d": "2015-04-05"
}
```

### Variables Reference
```yaml
some_thing: &VAR_NAME foobar
other_thing: *VAR_NAME
```

#### Equavalent JSON
```json {.wrap}
{
    "some_thing": "foobar",
    "other_thing": "foobar"
}
```

### Sequence
```yaml
object:
    attributes:
        - a1
        - a2
        - a3
    methods: [getter, setter]
```
#### Equavalent JSON
```json {.wrap}
{
    "object": {
        "attributes": ["a1", "a2", "a3"],
        "methods": ["getter", "setter"]
    }
}
```

### Sequence of sequences
```yaml
my_sequences:
    - [1, 2, 3]
    - [4, 5, 6]
```
#### Equavalent JSON
```json {.wrap}
{
    "my_sequences": [
        [1, 2, 3], 
        [4, 5, 6]
    ]
}
```



### Comments
```yaml
# A single line comment example

# block level comment example
# comment line 1
# comment line 2
# comment line 3
```

### Multiline strings
```yaml
description: |
    hello
    world
```
#### Equavalent JSON
```json {.wrap}
{"description": "hello\nworld\n"}
```

### Folded text
```yaml
description: >
    hello
    world
```
#### Equavalent JSON
```json {.wrap}
{"description": "hello world\n"}
```

### Hashes
```yaml
jack:
    id: 1
    name: Franc
    salary: 5000
    hobby:
        - a
        - b
    loc: {country: "A", city: "A-A"}
```
#### Equavalent JSON
```json {.wrap}
{
    "jack": {
        "id": 1,
        "name": "Franc",
        "salary": 5000,
        "hobby": ["a", "b"],
        "loc": {
            "country": "A", "city": "A-A"
        }
    }
}
```

### Nested dictionaries
```yaml
Employee:
    id: 1
    name: "Franc"
    department:
        name: "Sales"
        depid: "11"
```
#### Equavalent JSON
```json {.wrap}
{
    "Employee": {
        "id": 1,
        "name": "Franc",
        "department": {
            "name": "Sales",
            "depid": "11"
        }
    }
}
```

### Sequence of dictionaries
```yaml
children:
    - name: Jimmy Smith
        age: 15
    - name: Jenny Smith
        age: 12
```
#### Equavalent JSON
```json {.wrap}
{
    "children": [
        {"name": "Jimmy Smith", "age": 15},
        {"name": "Jenny Smith", "age": 12}
    ]
}
```

### Set
```yaml
set1: !!set
    ? one
    ? two
set2: !!set {'one', "two"}
```
#### Equavalent JSON
```json {.wrap}
{
    "set1": {"one": null, "two": null},
    "set2": {"one": null, "two": null}
}
```

### Inheritance
```yaml
parent: &defaults
    a: 2
    b: 3

child:
    <<: *defaults
    b: 4
```
#### Equavalent JSON
```json {.wrap}
{
"parent": {"a": 2, "b": 3},
"child": {"a": 2, "b": 4}
}
```



### Reference
```yaml
values: &ref
    - These values
    - will be reused below

other_values:
    i_am_ref: *ref
```
#### Equavalent JSON
```json {.wrap}
{
    "values": [
        "These values",
        "will be reused below"
    ],
    "other_values": {
            "i_am_ref": [
                "These values",
                "will be reused below"
            ]
        }
}
```

### Documents
```yaml
---
document: this is doc 1
---
document: this is doc 2
...
```
