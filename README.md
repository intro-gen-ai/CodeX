# CodeX
Short description of project. Replace this and the project section below with a 1-3 sentence description of your project. 

Project Notes:

- Please remember to keep your repo private when you create it from this template.
- Be sure to create your report in the **intro-gen-ai** organization. 
- The name of the repo should be the name of the project, or a shortened version of the name.
- Each section should be completed by the deadline indicated. You submit by making a commit of this README.md file. Except for minor edits, please do no change the Proposal, Goals, or Metrics sections after the submission deadline.
- General guidance on formatting writing in markdown files (like this README.md file) is at https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax.
- There is a [recording of the the class discussion on the use of this template](https://vanderbilt.zoom.us/rec/share/RjihScz0Ti7RId0KMj7GWBc8XueS571_JnFqDQwli0AuKLsgaau0j_RcphBjwYtV.HP10ROf2TwPUn6TA?startTime=1697553005000).
- You can sign up for a time to discuss your ideas for the project at https://calendly.com/jesse-spencer-smith. We'll also be discussing project in class on Tuesday after Fall Break.
- Remember that there is an AI Showcase on April 19 (with prizes for Best in Show), so you might want to consider completing your project by then. 

## Project PI/Project Team 
**Due March 21, 11:59pm**

- Franco Lu, ji.lu@vanderbilt.edu, luj11, Co-Developer
- Rafael Anargyrou, rafael.anargyrou@vanderbilt.edu, anargyr, Co-Developer
- Manuel Avila, manuel.a.avila@vanderbilt.edu, avilaam, Co-Developer

## Project Proposal 
**Due March 21, 11:59pm**

300-1000 words total across all of the sections below

### Description of Problem/Opportunity

When browsing through online code repositories like GitHub, programmers often have hard times understanding the codebase. We have personally experienced this issue while collaborating with others on GitHub projects, facing challenges in grasping coding patterns, deciphering complex algorithms, and identifying potential bugs or optimizations at a glance. This not only slows down the development process but also increases the cognitive load, making code review and comprehension more taxing than it needs to be. This is where our Chrome extension comes to play. It is designed to mitigate these challenges by providing an on-the-fly analysis of any code a programmer highlights in their browser. Whether it's a snippet on GitHub, a code block in a blog post, or an example in online documentation, CodeTracer aims to make every piece of code easily understandable, interactive, and insightful, thereby enhancing the overall productivity and efficiency of developers across the globe.

### Proposed Solution/Approach

For this project, we will use Javascript, HTML, and CSS to develop an application that integrates different APIs (OpenAI, Google Chrome). This extension will show descriptions to code highlighted by the user on the Chrome browser.

### Project Outline and Timeline
What are the steps to complete the project? State your milestones and the dates you want to complete them. 
1. Understand and connect OpenAI API - April 10
2. Understand and connect Chrome API - April 10
3. Engineer the prompt for the application - April 17
5. Finish Frontend of application - April 23

## Goals of project 
**Due March 21, 11:59pm**

1. Enhance Code Comprehension: The primary goal of CodeEx is to significantly improve the ease and speed with which developers can understand complex codebases. By providing instant explanations and insights for highlighted code snippets, CodeEx aims to lower the cognitive burden on programmers, facilitating quicker and more effective collaboration across various coding projects.

2. Integrate Seamlessly with Developers' Workflow: To ensure CodeEx becomes an indispensable part of a developer's toolkit, the extension will be designed to integrate seamlessly into the Chrome browser. This allows for minimal disruption to the existing workflow, enabling developers to utilize the tool without needing to navigate away from their current tasks or environments.

3. Support a Wide Range of Programming Languages: Acknowledging the diversity in programming languages used across different projects, CodeEx aspires to support a broad spectrum of languages. This inclusivity ensures that a wider community of developers can benefit from the tool, regardless of their project's language basis.

## Project Metrics 
**Due March 21, 11:59pm**

Compose 2-5 metrics to determine the success of the project. These should be measureable, and should translate to a letter grade for each. 

1. Error Rate: Measure the times in which the extension's prompt fails to produce a code summary  or the API call returns an error. THis metric will target the operational efficiency of the extension. This will be assed on a rigid scale (A > 95%, B > 90%, C > 85, D > 80%, F <= 80%).

2. User Feedback of Code Analysis: Measure the extensions ability to accurately provide helpful insights and explanations for a wide variety of code snippets. After each use case, the user will be prompted to enter feedback on the effectiveness of the code summary a scale of 1-5 (A = 5, B = 4, C = 3, D = 2, F = 1).

## Project Installation & Usage
To install the project, follow the steps below:
1. On your local terminal, enter "git clone https://github.com/intro-gen-ai/CodeX.git" to clone the project to your local environment
2. Open the project on your favorite IDE (Or just use the cd command)
3. Enter "npm install" to install the necessary dependencies for this project
4. Enter "yarn build" to built the project, you should be able to see a new folder within the directory called "dist"
5. Now, open Google Chrome and navigate to the Extensions tab on the top right of your browser and click "Manage Extensions"
6. Click "Load Unpacked" on the top left corner of Google Chrome
7. Find the project on your local computer and select the "dist" directory within the project
8. The Chrome extension is now ready for you to use!

To use the Chrome extension, follow the steps below:
1. Click the Extensions tab on the top right of your browser and click the "CodeTracer" icon
2. To verify that it works, close the popup and repeat step 1 again, you should see a Chrome side panel popping up
3. Enter your OpenAI API key and click "Submit"
4. Highlight any piece of code you see while on Chrome, right click on the highlighted code
5. Under the drop-down menu, click "Generate code description"
6. The description for your code should appear on the Chrome Side panel to your right

## Self-Evaluation
**Due April 26, 11:59pm**

300-1000 words

Address each of the goals, and assess each of the metrics. Include a statement on each on what you achieved or did not achieve, give support for your assessments.

## Reflection on Learning
**Due April 26, 11:59pm**

500-1000 words

What do you take away from the project? Has this changed how you understand AI? Does and how does this affect future plans for learning, work, or otherwise?

This project was very eye-opening for me because I had never worked on an AI project before where I employed ChatGPT to perform a specialized function, such as in the case of this project, where we utilized ChatGPT's power to provide our extension's users with a simpler, more effective way of understanding code when coming across it on the web. I had no idea that AI could be used to create personalized browser extensions, which I find really interesting and now hope to expand upon with my future personal projects, as my teammates surely concur with. 

Personally, I have always had a passion for learning languages and I can truly see the power in leveraging AI to create a personalized language professor that can help you reach fluency quickly and effectively and that is available 24/7. This vision is credited to this course, which really opened my eyes to the potential of AI in the language-learning field. As a matter of fact, this course has enabled me to begin working on a personal project aiming to achieve exactly that: creating a chatbot that can speak any language desired and that can teach you at anytime. I have specifically instructed my chatbot to act like a language professor and it has since been very helpful in helping me continue in my path to fluency in French and Portuguese. 

This project has also allowed me to realize that... (to be continued)

## What's Next?
**Due April 22, 11:59pm**

100-500 words

Do you plan on continuing the project? What will you do with what you've learning?
