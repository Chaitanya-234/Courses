test.AddQuestion( new Question ("com.scorm.anthropic.tooluse.1",
                                "In a tool definition, what is the primary function of the 'description' field?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is only for developer documentation and is ignored by the model", "It acts as a prompt to instruct the model on when and how to use the tool", "It defines the return type of the function", "It sets the timeout for the tool execution"),
                                "It acts as a prompt to instruct the model on when and how to use the tool",
                                "obj_tooluse")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.tooluse.2",
                                "Which 'tool_choice' configuration forces the model to use a specific tool, such as 'get_weather'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("tool_choice='auto'", "tool_choice='any'", "tool_choice={'type': 'tool', 'name': 'get_weather'}", "tool_choice={'force': 'get_weather'}"),
                                "tool_choice={'type': 'tool', 'name': 'get_weather'}",
                                "obj_tooluse")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.tooluse.3",
                                "When using Tool Use, the Claude model executes the actual Python or JavaScript code on its own servers.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_tooluse")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.tooluse.4",
                                "What is the primary benefit of using 'enum' in your JSON Schema for structured output?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It speeds up the API response time", "It restricts a string field to a specific set of allowed values, ensuring reliable classification", "It allows the model to generate infinite variations of a string", "It encrypts the output for security"),
                                "It restricts a string field to a specific set of allowed values, ensuring reliable classification",
                                "obj_tooluse")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.tooluse.5",
                                "In an agentic workflow, what is the best practice when a tool execution fails (e.g., database error)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Immediately terminate the conversation and show an error to the user", "Feed the error message back to the model as a 'tool_result' so it can attempt to self-correct", "Retry the exact same request 10 times", "Ignore the error and pretend the tool succeeded"),
                                "Feed the error message back to the model as a 'tool_result' so it can attempt to self-correct",
                                "obj_tooluse")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.tooluse.6",
                                "Parallel Tool Use allows the model to generate multiple tool calls in a single turn, which can be executed concurrently to reduce latency.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_tooluse")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.tooluse.7",
                                "Which mechanism is essential for preventing an autonomous agent from entering an infinite loop?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increasing the temperature to 1.0", "Implementing a maximum step limit or timeout", "Using a larger model context window", "Disabling all error handling"),
                                "Implementing a maximum step limit or timeout",
                                "obj_tooluse")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.tooluse.8",
                                "JSON Schemas for structured output must be flat and cannot contain nested objects or arrays.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_tooluse")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.tooluse.9",
                                "The 'required' keyword in a JSON Schema ensures that...",
                                QUESTION_TYPE_CHOICE,
                                new Array("The field is optional and may be omitted", "The model must populate this field in its output", "The field must be unique across all records", "The field is encrypted"),
                                "The model must populate this field in its output",
                                "obj_tooluse")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.tooluse.10",
                                "What is the difference between tool_choice='any' and tool_choice='auto'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("'any' forces the model to use at least one tool; 'auto' lets the model decide between text or tool", "'any' allows any tool; 'auto' automatically executes the code", "'any' is for legacy models; 'auto' is for new models", "There is no difference"),
                                "'any' forces the model to use at least one tool; 'auto' lets the model decide between text or tool",
                                "obj_tooluse")
                );
