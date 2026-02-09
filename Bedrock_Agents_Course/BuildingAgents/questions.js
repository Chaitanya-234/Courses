test.AddQuestion( new Question ("q1",
                                "How is Multi-Agent Collaboration best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Shared context: Agents can pass context between each other", "Supervisor: Routes requests to the appropriate specialist agent", "Session Management", "Pre-processing: Input analysis and intent detection"),
                                "Supervisor: Routes requests to the appropriate specialist agent",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "What does Multi-Agent Collaboration involve?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Sub-agents: Specialized agents (order handling, product info, etc.)", "Auto-expire idle sessions (configurable)", "Session attributes: Pass metadata (user ID, channel, etc.) across turns", "Action Groups: Sets of API actions the agent can perform via Lambda"),
                                "Sub-agents: Specialized agents (order handling, product info, etc.)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which statement about Multi-Agent Collaboration is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Action Groups with OpenAPI Schema", "Shared context: Agents can pass context between each other", "Orchestration: Planning which actions to take", "Pre-processing: Input analysis and intent detection"),
                                "Shared context: Agents can pass context between each other",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What is the primary purpose of Monitoring and Tracing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Supervisor: Routes requests to the appropriate specialist agent", "Bedrock supports supervisor agents that coordinate multiple sub-agents:", "Pre-processing: Input analysis and intent detection", "Prompt session attributes"),
                                "Pre-processing: Input analysis and intent detection",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "Which of the following best describes Monitoring and Tracing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Session TTL: Auto-expire idle sessions (configurable)", "Knowledge Bases: RAG-enabled document stores for grounding", "Enable trace logging to see the agent\'s reasoning process:", "Orchestration: Planning which actions to take"),
                                "Orchestration: Planning which actions to take",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What is a key characteristic of Monitoring and Tracing?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Post-processing: Formatting the final response", "Bedrock supports supervisor agents that coordinate multiple sub-agents:", "Monitoring and Tracing", "Foundation Model: The LLM that powers reasoning (Claude, Titan, Llama)"),
                                "Post-processing: Formatting the final response",
                                "obj_module_1")
                );