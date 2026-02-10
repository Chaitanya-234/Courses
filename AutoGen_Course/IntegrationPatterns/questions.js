// Module 3 Assessment: Integration & Patterns
// Covers Tool Use, RAG, and Pros/Cons

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.int_1",
                                "What is the primary function of Tool Use (Function Calling) in AutoGen?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To speed up the LLM response time", "To allow agents to execute external code and access data beyond the LLM's training", "To format the output as HTML", "To encrypt the conversation history"),
                                "To allow agents to execute external code and access data beyond the LLM's training",
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.int_2",
                                "Which specific agent class is designed to handle Retrieval Augmented Generation (RAG) workflows?",
                                QUESTION_TYPE_CHOICE,
                                new Array("UserProxyAgent", "RetrieveUserProxyAgent", "AssistantAgent", "SearchAgent"),
                                "RetrieveUserProxyAgent",
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.int_3",
                                "Why are Python type hints crucial when defining functions for tool use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("They make the code run faster", "They are required by the Python compiler", "They help the LLM understand the expected input format for arguments", "They prevent the function from being called recursively"),
                                "They help the LLM understand the expected input format for arguments",
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.int_4",
                                "What is identified as a significant technical risk when deploying autonomous agent systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Infinite conversation loops consuming resources", "The LLM forgetting the English language", "The agents becoming sentient", "The Python environment crashing on startup"),
                                "Infinite conversation loops consuming resources",
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.int_5",
                                "How does RAG specifically address the issue of LLM hallucinations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By increasing the temperature setting", "By providing retrieved ground-truth documents in the context window", "By forcing the model to only answer 'I don't know'", "By training the model on more Wikipedia data"),
                                "By providing retrieved ground-truth documents in the context window",
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.int_6",
                                "Which of the following is considered a key business advantage of using AutoGen?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It replaces all human employees", "It allows for rapid prototyping of complex multi-agent workflows", "It guarantees 100% accuracy on all tasks", "It is free to use with any model provider"),
                                "It allows for rapid prototyping of complex multi-agent workflows",
                                "obj_module3")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.int_7",
                                "When registering a tool, what serves as the 'prompt' description for the LLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The function name only", "The Python docstring of the function", "The file name containing the function", "The return type of the function"),
                                "The Python docstring of the function",
                                "obj_module3")
                );
