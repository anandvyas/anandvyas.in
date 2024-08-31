---
title: 'SOLID principles'
date: 2017-02-26
draft:  false   
featured: false  
description: "What is SOLID principles?"
thumbnail: "/posts/q&a/images/solid_principles.png"
featureImage: "/posts/q&a/images/solid_principles.png" 
shareImage: "/posts/q&a/images/solid_principles.png"
author: "Anand Vyas"
tags:
    - Design Principles
categories:     
    - General
---
 
SOLID principles are a set of five design principles in object-oriented programming and design, introduced by Robert C. Martin (often known as "Uncle Bob"). These principles aim to make software designs more understandable, flexible, and maintainable. SOLID is an acronym that stands for:

- S - Single Responsibility Principle (SRP)
- O - Open/Closed Principle (OCP)
- L - Liskov Substitution Principle (LSP)
- I - Interface Segregation Principle (ISP)
- D - Dependency Inversion Principle (DIP)

### Single Responsibility Principle (SRP)
A class should have only one reason to change, meaning it should have only one job or responsibility. This principle encourages separating concerns in a system by ensuring that each class handles a specific piece of functionality. By following SRP, code becomes more modular, easier to understand, and easier to maintain.

```cpp
class Employee {
public:
    std::string name;
    int age;
    // Other employee-related properties and methods
};

class EmployeeDatabase {
public:
    void save(Employee employee) {
        // Code to save the employee to the database
    }
};

```

### Open/Closed Principle (OCP)
Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. The OCP suggests that the behavior of a module should be extendable without modifying its source code. This can be achieved by using interfaces, abstract classes, or other forms of polymorphism, allowing new functionality to be added as new derived classes or components.

### Summary
- `SRP`: A class should have one responsibility, one reason to change.
- `OCP`: Software entities should be open for extension but closed for modification.
- `LSP`: Subtypes should be substitutable for their base types without altering the correctness.
- `ISP`: Prefer many small, specific interfaces over a single, large interface.
- `DIP`: Depend on abstractions, not on concrete implementations.

Following the SOLID principles helps developers build systems that are modular, maintainable, and flexible, making it easier to extend and refactor code over time without introducing bugs.



