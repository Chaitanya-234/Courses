// Module 1 Assessment: Core Concepts
// Covers Agents, Communication, and Configuration

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.core_1",
                                "What is the primary role of a UserProxyAgent in a standard AutoGen workflow?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To generate Python code using an LLM", "To execute code and solicit human input", "To manage the group chat manager", "To store vector embeddings"),
                                "To execute code and solicit human input",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.core_2",
                                "Which agent class is designed to act as the AI assistant, typically configured with an LLM?",
                                QUESTION_TYPE_CHOICE,
                                new Array("UserProxyAgent", "AssistantAgent", "GroupChatManager", "RetrieveUserProxyAgent"),
                                "AssistantAgent",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.core_3",
                                "Which method is used to start a conversation between two agents?",
                                QUESTION_TYPE_CHOICE,
                                new Array("start_conversation()", "initiate_chat()", "begin_dialogue()", "run_chat()"),
                                "initiate_chat()",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.core_4",
                                "What is the effect of setting 'human_input_mode' to 'NEVER'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The agent will always ask for human input", "The agent will never ask for human input and rely on auto-replies", "The agent will stop the conversation immediately", "The agent will ask for input only on termination"),
                                "The agent will never ask for human input and rely on auto-replies",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.core_5",
                                "Why is using a 'config_list' in llm_config recommended over a single API key?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It allows using multiple models for fallback and resilience", "It is required by the Python interpreter", "It encrypts the API key", "It speeds up the API calls"),
                                "It allows using multiple models for fallback and resilience",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.core_6",
                                "For secure code execution, what is the recommended setting for 'use_docker' in code_execution_config?",
                                QUESTION_TYPE_CHOICE,
                                new Array("False (run on host)", "True or a Docker image name", "None", "The path to the python executable"),
                                "True or a Docker image name",
                                "obj_module1")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.core_7",
                                "What mechanism does AutoGen use to automatically generate responses when a message is received?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Auto-Reply Loop (generate_reply)", "The Event Listener Loop", "The WebSocket Connection", "The Cron Job"),
                                "The Auto-Reply Loop (generate_reply)",
                                "obj_module1")
                );
