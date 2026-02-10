// Final Assessment Questions - Amazon Q Apps Course
// Focus: Comprehensive and Applied Knowledge - REVISED FOR ABSOLUTE UNIQUENESS
// Total: 20 Unique Questions

test.AddQuestion( new Question ("final_q1",
                                "In the hierarchy of AWS generative AI services, where does Amazon Q Apps sit in relation to Amazon Q Business?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is a standalone service that does not require Q Business.",
                                          "It is an application-building capability that operates within the context and security boundary of an Amazon Q Business application.",
                                          "It is the underlying engine that powers Amazon Bedrock.",
                                          "It is a programming language used to write Q Business plugins."),
                                "It is an application-building capability that operates within the context and security boundary of an Amazon Q Business application.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q2",
                                "Which concept refers to the shift where business employees, rather than just IT developers, create AI tools to solve their own productivity challenges?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Software Outsourcing",
                                          "The Democratization of AI and the rise of the 'Citizen Developer'",
                                          "Hardware Virtualization",
                                          "Data Siloing"),
                                "The Democratization of AI and the rise of the 'Citizen Developer'",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q3",
                                "When converting a chat conversation into an app, how does the AI determine what inputs the user should provide when they run the app later?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It requires the user to write a JSON schema.",
                                          "It automatically identifies the specific parameters and intent from the previous chat to create dynamic Input Cards.",
                                          "It asks the IT department to define the variables.",
                                          "It uses a standard set of inputs for every app regardless of the conversation."),
                                "It automatically identifies the specific parameters and intent from the previous chat to create dynamic Input Cards.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q4",
                                "In the multi-card app builder, what is the technical purpose of 'Dynamic Variable Referencing' between cards?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To change the background color of the app.",
                                          "To allow the output of one step (e.g., a data extraction) to serve as the prompt input for a subsequent step (e.g., a summary).",
                                          "To store the user's password securely.",
                                          "To link the app to a different AWS account."),
                                "To allow the output of one step (e.g., a data extraction) to serve as the prompt input for a subsequent step (e.g., a summary).",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q5",
                                "How does the 'Serverless' nature of Amazon Q Apps benefit a company's financial model regarding AI experimentation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It requires a large upfront investment in servers.",
                                          "It allows for low-cost experimentation because there is no infrastructure to provision or maintain.",
                                          "It eliminates the need for any AWS billing.",
                                          "It provides a fixed cost regardless of how many people use the app."),
                                "It allows for low-cost experimentation because there is no infrastructure to provision or maintain.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q6",
                                "Which mechanism ensures that a Q App's response is grounded in actual company documents rather than just the general knowledge of a Large Language Model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hard-coding the answers into the app.",
                                          "Retrieval-Augmented Generation (RAG) using the Amazon Q Business index.",
                                          "Sending the user to a Google search.",
                                          "Using a spell-checker on the AI's output."),
                                "Retrieval-Augmented Generation (RAG) using the Amazon Q Business index.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q7",
                                "A legal department is concerned that using AI to summarize contracts might leak data. How does Amazon Q Apps address this concern technically?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By encrypting the summary and sending it to the public web.",
                                          "By ensuring all data processing occurs within the enterprise's private AWS environment and never using customer data to train the underlying models.",
                                          "By requiring all contracts to be printed first.",
                                          "By only allowing summaries of non-sensitive documents."),
                                "By ensuring all data processing occurs within the enterprise's private AWS environment and never using customer data to train the underlying models.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q8",
                                "What is the primary function of the 'Q Apps Library' in a large organization with thousands of employees?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To store the source code for the AWS Management Console.",
                                          "To serve as a searchable marketplace where employees can discover, run, and share useful AI apps created by their peers.",
                                          "To provide a list of physical books available in the corporate office.",
                                          "To manage the company's social media accounts."),
                                "To serve as a searchable marketplace where employees can discover, run, and share useful AI apps created by their peers.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q9",
                                "Scenario: Your marketing app is generating social media posts that are too technical. What is the most effective way to adjust the 'Instructional Tone' of the app?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Reinstalling the web browser.",
                                          "Modifying the prompt within the Query Card to specifically define the desired persona and target audience.",
                                          "Asking every user to type 'make it less technical' in their input.",
                                          "Buying a faster computer."),
                                "Modifying the prompt within the Query Card to specifically define the desired persona and target audience.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q10",
                                "An administrator wants to ensure that no Q App in the company mentions a specific competitor by name. Which feature should they use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Individual app deletion.",
                                          "Configuring 'Guardrails' at the Amazon Q Business application level.",
                                          "Writing a custom CSS rule.",
                                          "Disabling the internet in the office."),
                                "Configuring 'Guardrails' at the Amazon Q Business application level.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q11",
                                "In the context of the 'Center of Excellence' (CoE), what is meant by 'Evangelism and Adoption'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Enforcing strict rules that prevent anyone from building apps.",
                                          "The process of showcasing successful AI use cases to encourage other departments to innovate with Q Apps.",
                                          "Converting the company's website to use AI only.",
                                          "Moving the corporate headquarters to a different city."),
                                "The process of showcasing successful AI use cases to encourage other departments to innovate with Q Apps.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q12",
                                "Why would a user prefer to use an 'Admin Curated' app over a newly created one in the library?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Because curated apps have more colorful icons.",
                                          "Because it signals that the app has been verified for accuracy, security, and quality by the organization's IT or AI specialists.",
                                          "Because curated apps are the only ones that work on Fridays.",
                                          "Because it is required by law to only use curated apps."),
                                "Because it signals that the app has been verified for accuracy, security, and quality by the organization's IT or AI specialists.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q13",
                                "Which step in the 'Human-in-the-loop' workflow is most important for maintaining high professional standards in AI-generated reports?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Automating the email delivery of every AI output without reading it.",
                                          "The critical review and fact-checking of the AI's output by a human subject matter expert before the content is used.",
                                          "Increasing the font size of the report.",
                                          "Using the AI to generate the exact same report every day."),
                                "The critical review and fact-checking of the AI's output by a human subject matter expert before the content is used.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q14",
                                "Scenario: You have updated a popular app to use a new data source, but you want to revert to the previous version because of a bug. How does Q Apps facilitate this?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By requiring you to rebuild the app from scratch.",
                                          "Through built-in versioning that allows creators to manage and deploy specific iterations of their applications.",
                                          "By automatically deleting the bug.",
                                          "By calling AWS support to fix the code."),
                                "Through built-in versioning that allows creators to manage and deploy specific iterations of their applications.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q15",
                                "From a business perspective, how does reducing the 'Time-to-Value' for custom AI tools impact organizational agility?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It slows down the organization by creating too many tools.",
                                          "It allows teams to rapidly build and deploy solutions to emerging problems in hours rather than months.",
                                          "It has no effect on agility.",
                                          "It makes the organization more rigid and less likely to change."),
                                "It allows teams to rapidly build and deploy solutions to emerging problems in hours rather than months.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q16",
                                "Can an Amazon Q App interact with external systems like Jira or Salesforce, and if so, how?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No, it can only read static PDF files.",
                                          "Yes, by utilizing 'Plugin Cards' that connect to pre-configured Amazon Q Business extensions.",
                                          "Yes, but only if the user writes custom Java code for the integration.",
                                          "No, external integrations are blocked for security reasons."),
                                "Yes, by utilizing 'Plugin Cards' that connect to pre-configured Amazon Q Business extensions.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q17",
                                "In the Natural Language App Builder, if the generated app structure isn't exactly what you wanted, what is the next logical step?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Deleting the AWS account.",
                                          "Manually refining the cards, prompts, and inputs in the visual editor to fine-tune the app's behavior.",
                                          "Giving up on the project.",
                                          "Using a different web browser."),
                                "Manually refining the cards, prompts, and inputs in the visual editor to fine-tune the app's behavior.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q18",
                                "Scenario: A team needs an app that analyzes a customer's mood from an email and then suggests a personalized response. What is the most efficient card configuration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("One single Query Card that does everything.",
                                          "An Input Card (Email text), a Query Card (Sentiment Analysis), and a second Query Card (Response Generation) that uses the sentiment as an input.",
                                          "A Plugin Card for Salesforce and nothing else.",
                                          "Three separate Input Cards for the same email."),
                                "An Input Card (Email text), a Query Card (Sentiment Analysis), and a second Query Card (Response Generation) that uses the sentiment as an input.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q19",
                                "If a security auditor needs to investigate whether sensitive data was accessed by an unauthorized app, which administrative tool provides the necessary forensic trail?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Q Apps Library description field.",
                                          "Detailed Audit Logs and Monitoring integrated with AWS CloudTrail and CloudWatch.",
                                          "The app creator's personal email.",
                                          "The 'Help' menu in the app."),
                                "Detailed Audit Logs and Monitoring integrated with AWS CloudTrail and CloudWatch.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_q20",
                                "Which of the following best describes the 'Feedback Loop' in Amazon Q Apps?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The way the AI's fans make noise.",
                                          "The ability for users to rate and provide feedback on apps in the library, helping creators improve their tools over time.",
                                          "An error message that repeats infinitely.",
                                          "The sound the computer makes when an app is finished building."),
                                "The ability for users to rate and provide feedback on apps in the library, helping creators improve their tools over time.",
                                "obj_final")
                );