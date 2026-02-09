// Module 2 Assessment: Advanced Orchestration
// Covers Group Chats, HITL, and Code Execution

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.orch_1",
                                "What is the primary responsibility of the GroupChatManager in a group chat setting?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To execute Python code", "To decide the next speaker and broadcast messages", "To generate vector embeddings for RAG", "To provide the initial user prompt"),
                                "To decide the next speaker and broadcast messages",
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.orch_2",
                                "When 'speaker_selection_method' is set to 'auto' in a GroupChat, how is the next speaker chosen?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Randomly", "Based on a round-robin schedule", "By asking an LLM to analyze the conversation history", "By the human user exclusively"),
                                "By asking an LLM to analyze the conversation history",
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.orch_3",
                                "Which 'human_input_mode' setting ensures the agent pauses for human feedback after every single auto-reply?",
                                QUESTION_TYPE_CHOICE,
                                new Array("ALWAYS", "TERMINATE", "NEVER", "SOMETIMES"),
                                "ALWAYS",
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.orch_4",
                                "Why is 'DockerCommandLineCodeExecutor' considered safer than 'LocalCommandLineCodeExecutor'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It runs code faster", "It isolates the execution environment from the host system", "It does not require Docker installed", "It allows network access by default"),
                                "It isolates the execution environment from the host system",
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.orch_5",
                                "In a custom transition graph for a GroupChat, what does a constraint like {'Coder': ['Reviewer']} imply?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Coder can only speak to the Reviewer next", "The Reviewer must speak before the Coder", "The Coder and Reviewer are the same agent", "The Coder is forbidden from speaking"),
                                "The Coder can only speak to the Reviewer next",
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.orch_6",
                                "What happens if a human user inputs 'exit' during a solicited input prompt?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The agent ignores it", "The conversation terminates immediately", "The agent executes 'exit()' in Python", "The agent asks for clarification"),
                                "The conversation terminates immediately",
                                "obj_module2")
                );

test.AddQuestion( new Question ("com.scorm.genaicourse.autogen.orch_7",
                                "What is a key benefit of using Jupyter-based code execution over standard command-line execution?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is stateless", "It maintains state (variables) between execution blocks", "It is faster", "It does not support Python"),
                                "It maintains state (variables) between execution blocks",
                                "obj_module2")
                );
