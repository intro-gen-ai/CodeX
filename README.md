# CodeTracer
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
- Manuel Avila, manuel.a.avila@vanderbilt.edu, avilama, Co-Developer

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
6. Enable developer mode (on the top right corener) and click "Load Unpacked" on the top left corner of Google Chrome
7. Find the project on your local computer and select the "dist" directory within the project
8. The Chrome extension is now ready for you to use!

To use the Chrome extension, follow the steps below:
1. Click the Extensions tab on the top right of your browser and click the "CodeTracer" icon
3. To verify that it works, close the popup and repeat step 1 again, you should see a Chrome side panel popping up
4. Enter your OpenAI API key and click "Submit"
5. Highlight any piece of code you see while on Chrome, right click on the highlighted code
6. Under the drop-down menu, click "Generate code description"
7. The description for your code should appear on the Chrome Side panel to your right

## Self-Evaluation
**Due April 26, 11:59pm**

300-1000 words

In developing CodeTracer, we successfully met our main objectives, which were ambitious and essential for the tool’s effectiveness. Firstly, CodeTracer was able to accurately summarize highlighted code snippets by the user, a feature stands out as key to the product's success. This functionality provides clear and insightful explanations that help developers understand complex codebases more efficiently which enhanced code comprehension as outlined in our project goals. This feature has a very noble use-case as different developers implement different logical steps in their works. Thus, having this toll in one's tool box can make interpreting code a more accessible and faster part of the process of collaborative developing.

Secondly, the integration of CodeTracer into the Google Chrome ecosystem through an extension was executed flawlessly. This seamless integration, with an easy installation process, allows users to access CodeTracer’s functionalities without disrupting their typical workflow. Meeting this objective was essential, as it ensures that our extension can become an integral part of a developer's toolkit, thus, enhancing productivity and minimizing the stresses associated with adopting new software tools.

Thirdly, our extension’s ability to support a diverse range of programming languages was a critical achievement. By accommodating for various coding languages using a custom prompt call in openAI's API, CodeTracer serves a broad audience, fulfilling our goal to accomodate to a diverse group of developers and thereby broadening its utility across different coding environments and projects.

In terms of assessing our project’s success through our predefined metrics, we excelled in maintaining a low error rate, achieving an 'A' grade. The current version of the tool operates without any errors or crashes, demonstrating the robustness of our coding and the reliability of the CodeTracer extension. However, one significant area where we fell short was in the implementation of a user feedback system. Due to time constraints, this crucial component of our project could not be developed within the project's timeline. This feature is vital for iterative development and enhancement of the tool based on actual user experiences. Its absence limits our capacity to evaluate and enhance the tool’s effectiveness and user satisfaction dynamically.

Despite these challenges, the project's success in key areas provides a solid foundation for future enhancements and establishes the value of our solution for the tech community.

## Reflection on Learning
**Due April 26, 11:59pm**

500-1000 words

As a group of undergraduate students with different backgrounds, our engagement with the CodeTracer project has significantly impacted our collective understanding of AI's practical applications. The core task of developing a Chrome extension that utilizes AI to analyze and summarize code snippets in real-time demonstrated the potential of artificial intelligence to facilitate complex problem-solving within a user's current workflow. The integration of AI, particularly through the OpenAI API, not only showcased AI's ability to enhance efficiency but also its potential to improve user experiences dramatically. This application of AI technology illustrated its evolving role as an active partner in the technology ecosystem, capable of providing substantial support to software developers. Previously, the only way to understand someone’s code would be through inquiry with the author, however, with tools like CodeTracer in our toolbox we can now translate complex chunks of code into accessible natural language.

Throughout the various stages of this project, each phase presented its own set of unique challenges and learning opportunities for us. Initially, the project demanded a thorough understanding of APIs, specifically how technologies like OpenAI can be incorporated into browser extensions. This challenge extended beyond mere coding as it required a deep dive into understanding not only how to integrate, but also how to use OpenAI’s available APIs. As the project advances, the importance of user-centered design in software development became increasingly noticed. Although we were unable to implement a user feedback system within the project timeline, the planning and conceptual design stages revealed the vital role of user input in iterative design. This approach not only helps in refining software solutions but also ensures that they are adaptable and address every user’s needs, which is crucial for their long-term success.

Engagement with the ethical implications of AI in software development also emerged as a significant aspect of this project. Although the scope of this project was very individual, we were dealing with some private data from the user (such as API keys) and had to ensure that that information was properly handled. Besides that, the task of code summarization with a prompt engineered to specialize in such task made us think of personal biases when crafting the prompt as each of us had a different background with coding. Therefore, we had to ensure that this tool was accessible and inclusive to different types of developers. We achieved this by developing a simple, yet inclusive, custom prompt for the first version of this project. 

This project also fostered an environment of collaborative and interdisciplinary learning, highlighting the benefits of diverse team dynamics. Working alongside peers from various academic backgrounds, each contributing different skills and insights, emphasized the importance of collaboration in overcoming challenges and enhancing the project’s development. Such interdisciplinary collaboration is essential in the tech field, as it brings together varied perspectives that can lead to more innovative solutions and more robust problem-solving strategies.

Reflecting on the CodeTracer project as a whole, we have gained a deeper appreciation for the dynamic relationship between developing technologies and user-centered design. This project not only refined our technical abilities but also strengthened our skills in critical thinking and adaptive problem-solving. It underscored the importance of being flexible and responsive to user feedback, which is crucial in technology roles where new challenges and revisions are common. The experience has impacted our plans after college as it gave us a solid foundation on how to integrate AI to improve our productivity when developing products.

All in all, the CodeTracer project was a remarkable path of our educational journey, fostering our understanding of AI's capabilities and its broader impacts on society. The project didn't just enhance our technical skills, but it also expanded our perspectives on how AI can be effectively integrated into our daily lives, setting a foundation for our future endeavors in the field of technology.




## What's Next?
**Due April 22, 11:59pm**

100-500 words

Building on the successes and lessons learned from developing CodeTracer, the next steps involve significant enhancements to refine and expand the tool's capabilities. The next step is to implement a user feedback system. This system will not only allow us to collect valuable insights on user satisfaction and tool efficacy but also help in refining the AI's code summarization capabilities based on real user experiences.

Additionally, we plan to introduce customizable parameters for the code summarization process which will be inlcuded in the custom prompt. These parameters will include the programming language of the code snippet and the desired level of detail in the summary. By allowing users to specify these inputs, CodeTracer will provide more tailored and relevant content, thereby enhancing the overall user experience and tool functionality.

## Video Demonstration
[Click here](https://vanderbilt.zoom.us/rec/share/Yr-7uG_Y5Z9Y0KesbLIVk6lhfjXsqueLaY7z9WtrzdSOYwMj3G3OKpkpHvo8Z6R3.Tr0OBidwQIOaGjt3?startTime=1714154640000) to view our demonstration
