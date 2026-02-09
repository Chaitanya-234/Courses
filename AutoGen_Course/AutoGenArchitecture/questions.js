test.AddQuestion( new Question ("q1",
                                "What is a key characteristic of Speaker Selection Methods?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ConversableAgent", "auto: The LLM decides which agent should speak next based on conversation context", "Code Execution in AutoGen", "Code execution, human feedback"),
                                "auto: The LLM decides which agent should speak next based on conversation context",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "What is an important aspect of Speaker Selection Methods?",
                                QUESTION_TYPE_CHOICE,
                                new Array("High - isolated container", "Represents the human user, can execute code", "Custom function: Evaluate each message to decide if the task is complete", "round_robin: Agents take turns in a fixed order"),
                                "round_robin: Agents take turns in a fixed order",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which statement about Speaker Selection Methods is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AssistantAgent", "ConversableAgent", "random: A random agent is selected each turn", "Use clear termination conditions so agents know when to stop"),
                                "random: A random agent is selected each turn",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "Which of the following best describes Speaker Selection Methods?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Custom function: Provide your own selection logic for deterministic workflows", "Best Practices", "Jupyter executor: Medium - notebook kernel", "Two-Agent Conversation"),
                                "Custom function: Provide your own selection logic for deterministic workflows",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "How is Termination Conditions best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AssistantAgent: LLM-powered agent that generates responses and code", "Two-Agent Conversation", "Max rounds: Limit the total number of conversation turns", "Set reasonable max_round limits to prevent infinite agent loops"),
                                "Max rounds: Limit the total number of conversation turns",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "Which of the following is true regarding Termination Conditions?",
                                QUESTION_TYPE_CHOICE,
                                new Array("GroupChatManager", "Custom executor", "Docker executor: High - isolated container", "Termination message: Stop when a specific keyword appears (e.g., \"TERMINATE\")"),
                                "Termination message: Stop when a specific keyword appears (e.g., \"TERMINATE\")",
                                "obj_module_1")
                );