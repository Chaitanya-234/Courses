test.AddQuestion( new Question ("com.scorm.anthropic.final.1",
                                "Which API endpoint is the modern standard for all interactions with Claude models?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Completions API", "The Messages API", "The Chat API", "The Generations API"),
                                "The Messages API",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.2",
                                "In the Messages API, which role represents the AI model's output?",
                                QUESTION_TYPE_CHOICE,
                                new Array("system", "user", "assistant", "model"),
                                "assistant",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.3",
                                "Where should you place high-level instructions that define the persona and constraints for the entire conversation?",
                                QUESTION_TYPE_CHOICE,
                                new Array("In the first user message", "In the system parameter", "In the tool definition", "In the max_tokens parameter"),
                                "In the system parameter",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.4",
                                "The Messages API automatically stores conversation history on the server, so you don't need to send it with every request.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.5",
                                "What does the 'max_tokens' parameter control?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The maximum number of tokens in the input prompt", "The maximum number of tokens the model can generate in its response", "The total cost of the request", "The number of tools allowed"),
                                "The maximum number of tokens the model can generate in its response",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.6",
                                "Which feature should you use to display the model's response to the user in real-time as it is being generated?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Batch Processing", "Streaming (Server-Sent Events)", "Polling", "Webhooks"),
                                "Streaming (Server-Sent Events)",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.7",
                                "How much of a discount does the Message Batches API offer compared to standard synchronous API calls?",
                                QUESTION_TYPE_CHOICE,
                                new Array("10%", "25%", "50%", "75%"),
                                "50%",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.8",
                                "Batch API jobs are guaranteed to complete within...",
                                QUESTION_TYPE_CHOICE,
                                new Array("1 hour", "12 hours", "24 hours", "48 hours"),
                                "24 hours",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.9",
                                "A 500 Internal Server Error indicates that...",
                                QUESTION_TYPE_CHOICE,
                                new Array("Your request was malformed", "You are unauthorized", "An unexpected error occurred on Anthropic's side", "You exceeded your rate limit"),
                                "An unexpected error occurred on Anthropic's side",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.10",
                                "Which error code corresponds to hitting a rate limit?",
                                QUESTION_TYPE_CHOICE,
                                new Array("400", "401", "404", "429"),
                                "429",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.11",
                                "The 'jitter' in an exponential backoff strategy is used to...",
                                QUESTION_TYPE_CHOICE,
                                new Array("Increase the randomness of the model's output", "Prevent multiple clients from retrying at the exact same moment", "Encrypt the request data", "Reduce the token count"),
                                "Prevent multiple clients from retrying at the exact same moment",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.12",
                                "Which three fields are required in a tool definition?",
                                QUESTION_TYPE_CHOICE,
                                new Array("name, description, input_schema", "id, type, parameters", "function, arguments, return_type", "url, method, body"),
                                "name, description, input_schema",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.13",
                                "Why is the tool description considered part of the 'prompt'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Because it is the only part the model reads", "Because the model uses it to understand the semantic purpose of the tool and decide when to call it", "Because it is displayed to the end user", "It isn't; descriptions are ignored"),
                                "Because the model uses it to understand the semantic purpose of the tool and decide when to call it",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.14",
                                "In JSON Schema, which type should be used for a field that can be one of 'red', 'green', or 'blue'?",
                                QUESTION_TYPE_CHOICE,
                                new Array("array", "object", "string with enum", "boolean"),
                                "string with enum",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.15",
                                "If you want the model to decide freely whether to use a tool or answer with text, which tool_choice setting should you use?",
                                QUESTION_TYPE_CHOICE,
                                new Array("auto", "any", "tool", "none"),
                                "auto",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.16",
                                "Parallel Tool Use allows the model to output multiple tool calls in a single message block.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.17",
                                "Who is responsible for executing the code associated with a tool call?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Anthropic's servers", "The user's browser", "Your application/backend", "The ISP"),
                                "Your application/backend",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.18",
                                "When a tool throws an error, you should hide this from the model to prevent confusion.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.19",
                                "Structured Output is primarily achieved by...",
                                QUESTION_TYPE_CHOICE,
                                new Array("Using regex to parse text responses", "Defining a tool that matches the desired output schema and forcing its use", "Asking the model nicely in the system prompt", "Using a lower temperature"),
                                "Defining a tool that matches the desired output schema and forcing its use",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.20",
                                "Using 'enum' in a schema helps prevent hallucinated values for categorical fields.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.21",
                                "Which JSON Schema keyword ensures a field is never omitted from the output?",
                                QUESTION_TYPE_CHOICE,
                                new Array("mandatory", "required", "urgent", "essential"),
                                "required",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.22",
                                "An 'Agent' can be best described as...",
                                QUESTION_TYPE_CHOICE,
                                new Array("A single API call", "A loop where the model observes tool outputs and decides next actions", "A customer support representative", "A database trigger"),
                                "A loop where the model observes tool outputs and decides next actions",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.23",
                                "To prevent an agent from running indefinitely, you should implement a...",
                                QUESTION_TYPE_CHOICE,
                                new Array("Minimum step limit", "Maximum step limit", "Infinite retry policy", "Recursive function"),
                                "Maximum step limit",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.24",
                                "When using tools, you should be careful about sending PII (Personally Identifiable Information) to the model provider.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.25",
                                "Prompt Injection attacks can potentially trick a model into executing unauthorized tool calls.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.26",
                                "Which of the following image formats is supported for vision input in the Messages API?",
                                QUESTION_TYPE_CHOICE,
                                new Array("TIFF", "BMP", "WebP", "SVG"),
                                "WebP",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.27",
                                "What does the 'Computer Use' capability enable Claude to do?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Physically move a robotic arm", "Interact with a computer GUI (screen, mouse, keyboard)", "Overclock the server CPU", "Mine cryptocurrency"),
                                "Interact with a computer GUI (screen, mouse, keyboard)",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.28",
                                "How does Prompt Caching specifically benefit vision-heavy workflows?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It increases the resolution of images", "It avoids re-processing expensive image tokens for repeated requests", "It automatically captions images", "It converts images to video"),
                                "It avoids re-processing expensive image tokens for repeated requests",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.29",
                                "What is the primary purpose of a 'human-in-the-loop' mechanism in high-stakes agentic systems?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To speed up the processing", "To manually type every response", "To validate and approve critical actions before execution", "To reduce the cost of the API"),
                                "To validate and approve critical actions before execution",
                                "obj_final")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.final.30",
                                "Compared to a text-only prompt, adding a high-resolution image to the request generally results in...",
                                QUESTION_TYPE_CHOICE,
                                new Array("Lower latency (faster response)", "Higher latency (slower response)", "No change in latency", "An immediate error"),
                                "Higher latency (slower response)",
                                "obj_final")
                );
