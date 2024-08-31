---
title: 'WET principle'
date: 2017-02-26
draft:  false   
featured: false  
description: "What is WET principle?"
thumbnail: "/posts/q&a/images/wet.png"
featureImage: "/posts/q&a/images/wet.png" 
shareImage: "/posts/q&a/images/wet.png"
author: "Anand Vyas"
tags:
    - Design Principles
categories:     
    - General
---
 
The WET Principle, which stands for `Write Everything Twice` or `We Enjoy Typing` is often seen as the opposite of the DRY (`Don't Repeat Yourself`) principle. While DRY focuses on minimizing code duplication to reduce redundancy and maintenance effort, the WET principle suggests that some level of repetition or redundancy in code can be beneficial, especially for the sake of clarity, readability, and simplicity.

### Key Ideas Behind the WET Principle
- `Readability Over Abstraction`: Sometimes, overly abstracting code to avoid duplication can lead to code that is difficult to understand. By allowing some repetition, the code can be more explicit and easier to follow.

- `Avoid Over-Optimization`: Prematurely optimizing for DRY can lead to convoluted code structures that are hard to maintain and debug. WET encourages writing straightforward, easily readable code even if it means repeating certain logic.

- `Contextual Understanding`: Repeating similar code can provide context that helps developers understand the specific scenario or use case being addressed. This can be especially useful in the early stages of development, where clarity and understanding are more critical than optimization.

- `Simplicity in Small Projects`: For smaller projects or scripts, applying the DRY principle rigorously may not be necessary. In these cases, having some repetition might be acceptable if it keeps the code simple and easy to understand.

### Benefits of the WET Principle
- `Clarity`: Code that is slightly repetitive can sometimes be clearer and easier to understand than highly abstracted code. This can be important for new team members or less experienced developers.

- `Ease of Development`: In the initial stages of development, focusing on getting the functionality working is often more critical than optimizing for DRY. WET allows for quicker prototyping and iteration.

- `Fewer Abstractions`: By avoiding unnecessary abstractions, WET can reduce the mental overhead required to understand the code. This makes maintenance and debugging simpler because the flow of logic is more explicit.

- `Reduced Overhead for Small Projects`: For small-scale projects, the overhead of designing highly reusable and abstract components might not be justified. WET can keep things simple and manageable.

### When to Use WET
- `Prototyping and Initial Development`: During the early phases of a project, focusing on clear, working code rather than eliminating duplication can speed up development.

- `High Readability Needs`: In educational contexts or projects where code clarity is paramount (e.g., open-source libraries, documentation examples), WET can be beneficial.

- `Low Maintenance Scenarios`: For scripts or code that is unlikely to change often, avoiding the complexity of DRY abstractions can be beneficial.

### Common Misconceptions about WET
- `WET Is Not About Careless Duplication`: WET doesn't mean developers should be careless about code duplication. Instead, it suggests that some duplication is acceptable if it serves clarity, simplicity, or readability.

- `WET Doesn’t Oppose DRY Entirely`: Both WET and DRY are principles that guide decisions. Depending on the context, one might be more appropriate than the other. It's about finding a balance that suits the particular needs of the project.

- `WET Is Not a License to Write Bad Code`: The principle emphasizes avoiding unnecessary complexity, but it still encourages writing good, clean code that is understandable and maintainable.