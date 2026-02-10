// Final Comprehensive Assessment - 20 Questions
// Covers all modules: Core Concepts, Advanced Orchestration, Integration & Patterns

// --- Core Concepts ---

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.core_1",
                                "What is the common base class for all conversational agents in AutoGen?",
                                QUESTION_TYPE_CHOICE,
                                new Array("AgentBase", "ConversableAgent", "BaseChat", "LLMWrapper"),
                                "ConversableAgent",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.core_2",
                                "By default, does the AssistantAgent execute the code it generates?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Yes, always", "No, it relies on another agent (like UserProxyAgent) to execute it", "Only if running in Docker", "Only if the code is Python"),
                                "No, it relies on another agent (like UserProxyAgent) to execute it",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.core_3",
                                "In a typical configuration, what is the content of the UserProxyAgent's system message?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A detailed persona description", "Usually empty or minimal, as it represents the user", "The Python source code of the application", "The history of previous chats"),
                                "Usually empty or minimal, as it represents the user",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.core_4",
                                "What is the primary purpose of the 'seed' parameter in the llm_config?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To set the random number generator for reproducibility and caching", "To define the initial prompt", "To limit the cost", "To set the API key"),
                                "To set the random number generator for reproducibility and caching",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.core_5",
                                "Can a single AutoGen agent instance participate in multiple sequential conversations?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No, an agent is destroyed after one chat", "Yes, but state management (resetting) is important", "Only if it is a GroupChatManager", "No, it throws a RuntimeException"),
                                "Yes, but state management (resetting) is important",
                                "obj_final")
                );

// --- Advanced Orchestration ---

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.orch_1",
                                "In a GroupChat, what is the downside of using the 'random' speaker selection method?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses too many API credits", "It lacks coherence and context awareness", "It is not supported in the current version", "It always selects the same agent"),
                                "It lacks coherence and context awareness",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.orch_2",
                                "If 'use_docker' is set to a string value like 'python:3' in the code_execution_config, what does it signify?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The path to the local python executable", "The name of the Docker image to use for the container", "The version of AutoGen to install", "The password for the Docker daemon"),
                                "The name of the Docker image to use for the container",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.orch_3",
                                "What is the default behavior if 'work_dir' is not specified in code_execution_config?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It uses a temporary directory", "It uses the current working directory of the script", "It throws an error", "It uses /tmp"),
                                "It uses the current working directory of the script",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.orch_4",
                                "How can an agent initiate a nested chat within a reply function?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By calling agent.initiate_chat() inside the function", "By returning a special 'NESTED' string", "It is not possible to nest chats", "By creating a new thread"),
                                "By calling agent.initiate_chat() inside the function",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.orch_5",
                                "What happens if a tool/function execution raises an exception?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The entire application crashes", "The error message is sent back to the LLM agent to handle", "The agent skips the turn", "The tool is automatically unregistered"),
                                "The error message is sent back to the LLM agent to handle",
                                "obj_final")
                );

// --- Integration & Patterns ---

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.int_1",
                                "Which default vector database is commonly used by the RetrieveUserProxyAgent in AutoGen examples?",
                                QUESTION_TYPE_CHOICE,
                                new Array("MongoDB", "ChromaDB", "PostgreSQL", "Redis"),
                                "ChromaDB",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.int_2",
                                "Does AutoGen support using local LLMs (e.g., via Ollama or LM Studio)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("No, only OpenAI is supported", "Yes, provided they expose an OpenAI-compatible API endpoint", "Yes, but only for code execution", "No, local LLMs are too weak"),
                                "Yes, provided they expose an OpenAI-compatible API endpoint",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.int_3",
                                "In a standard tool use pattern, where is the tool function typically executed?",
                                QUESTION_TYPE_CHOICE,
                                new Array("On the AssistantAgent (LLM side)", "On the UserProxyAgent (Executor side)", "On the OpenAI server", "In the browser"),
                                "On the UserProxyAgent (Executor side)",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.int_4",
                                "What is a primary cost implication of using Group Chats compared to two-agent chats?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Group Chats are cheaper", "Group Chats can be more expensive due to message broadcasting and management overhead", "They cost the same", "Group Chats use a different currency"),
                                "Group Chats can be more expensive due to message broadcasting and management overhead",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.int_5",
                                "What does the 'chunk_token_size' parameter control in RAG configuration?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The cost of the API call", "The maximum size of text segments split from documents", "The size of the vector database", "The number of files to ingest"),
                                "The maximum size of text segments split from documents",
                                "obj_final")
                );

// --- General / Best Practices ---

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.gen_1",
                                "What Python library is commonly recommended in AutoGen to enforce schema validation for complex tool inputs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Pandas", "Pydantic", "NumPy", "Django"),
                                "Pydantic",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.gen_2",
                                "Which of the following is NOT a standard input mode in AutoGen?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ALWAYS", "TERMINATE", "NEVER", "RANDOM"),
                                "RANDOM",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.gen_3",
                                "Why might you want to set 'cache_seed' to None in production?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To ensure responses are always fresh and non-deterministic", "To save disk space", "To speed up the application", "It is required for GPT-4"),
                                "To ensure responses are always fresh and non-deterministic",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.gen_4",
                                "What is the recommended way to handle sensitive credentials like API keys?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcode them in the script", "Use environment variables or a secure configuration loader", "Write them in a text file committed to git", "Pass them as command line arguments"),
                                "Use environment variables or a secure configuration loader",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.final.gen_5",
                                "If an agent enters an infinite loop of 'Thank you', what configuration was likely missed?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The model is too weak", "A proper termination condition (is_termination_msg) or max_turns limit", "The network is down", "The docker container is full"),
                                "A proper termination condition (is_termination_msg) or max_turns limit",
                                "obj_final")
                );
