test.AddQuestion( new Question ("m2_q1",
                                "In the lifecycle of a Q App, what is the primary purpose of the 'Refinement' phase?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To write the initial code for the application's backend.",
                                          "To iteratively test the app with various inputs to ensure the AI output is accurate and reliable.",
                                          "To gather financial approval for the app's deployment.",
                                          "To delete old versions of the app from the library."),
                                "To iteratively test the app with various inputs to ensure the AI output is accurate and reliable.",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q2",
                                "You have just finished a complex research task using Amazon Q Business chat and want to save the workflow. What is the most efficient way to create a Q App from this experience?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Manually recreate every step in the 'From Scratch' builder.",
                                          "Copy and paste the text into a Word document and upload it later.",
                                          "Click the 'Create Q App' button directly within the conversation interface.",
                                          "Ask the IT department to export the logs into an app."),
                                "Click the 'Create Q App' button directly within the conversation interface.",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q3",
                                "Which card type is responsible for defining the user interface elements like dropdowns and file upload buttons?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Query Card",
                                          "Plugin Card",
                                          "Input Card",
                                          "Output Card"),
                                "Input Card",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q4",
                                "What is the primary purpose of defining a 'Persona' within a Query Card's prompt instructions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To give the AI a name so it can be easily identified.",
                                          "To guide the tone, style, and professional expertise level of the AI's response to match the target audience.",
                                          "To allow the AI to access the user's personal social media account.",
                                          "To translate the app's code into a human-like dialect."),
                                "To guide the tone, style, and professional expertise level of the AI's response to match the target audience.",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q5",
                                "Which of the following is an example of a 'Multi-Step Workflow' in a Q App?",
                                QUESTION_TYPE_CHOICE,
                                new Array("An app that has one input field and one output field.",
                                          "An app where Query Card 2 uses the results from Query Card 1 to perform further analysis.",
                                          "An app that can be used by more than one person at a time.",
                                          "An app that is published in multiple languages simultaneously."),
                                "An app where Query Card 2 uses the results from Query Card 1 to perform further analysis.",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q6",
                                "According to the design best practices in the module, why should you use dropdown menus instead of open text fields where possible?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To save space on the screen.",
                                          "To make the AI's output more predictable and accurate by restricting the scope of the input.",
                                          "To prevent users from typing too much data.",
                                          "Because dropdown menus require less processing power than text fields."),
                                "To make the AI's output more predictable and accurate by restricting the scope of the input.",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q7",
                                "What is the specific function of a 'Plugin Card' in an Amazon Q App?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To change the color and theme of the application.",
                                          "To trigger actions in external systems like ServiceNow or Jira.",
                                          "To increase the word limit of the AI's response.",
                                          "To add background music to the user interface."),
                                "To trigger actions in external systems like ServiceNow or Jira.",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("m2_q8",
                                "TRUE or FALSE: A Query Card can be configured to ignore certain enterprise data sources even if they are connected to the main Amazon Q Business instance.",
                                QUESTION_TYPE_TF,
                                new Array("True", "False"),
                                "True",
                                "obj_module_2")
                );