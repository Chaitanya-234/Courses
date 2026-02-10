test.AddQuestion( new Question ("com.scorm.anthropic.fundamentals.1",
                                "What is the fundamental architectural difference between the Messages API and legacy text completion APIs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Messages API is stateful while completion APIs are stateless", "Messages API uses a structured list of conversational turns instead of a raw text string", "Messages API only supports text, while completions supported images", "Messages API requires a persistent WebSocket connection"),
                                "Messages API uses a structured list of conversational turns instead of a raw text string",
                                "obj_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.fundamentals.2",
                                "Which component of a Messages API request persists throughout the conversation to set the model's behavior and persona?",
                                QUESTION_TYPE_CHOICE,
                                new Array("User Message", "Assistant Response", "System Prompt", "Temperature Setting"),
                                "System Prompt",
                                "obj_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.fundamentals.3",
                                "What is the primary technical benefit of using Streaming with Server-Sent Events (SSE)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It reduces the total cost of the API call", "It allows for larger context windows", "It drastically reduces the Time to First Token (TTFT) for better user experience", "It guarantees 100% uptime"),
                                "It drastically reduces the Time to First Token (TTFT) for better user experience",
                                "obj_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.fundamentals.4",
                                "The Message Batches API offers a 50% cost reduction compared to standard synchronous requests.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.fundamentals.5",
                                "Which HTTP status code indicates that you have exceeded your rate limits (Requests Per Minute or Tokens Per Minute)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("400 Bad Request", "401 Unauthorized", "429 Too Many Requests", "500 Internal Server Error"),
                                "429 Too Many Requests",
                                "obj_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.fundamentals.6",
                                "What is the recommended strategy for handling transient errors like 429 (Rate Limit) or 529 (Overloaded)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Retry immediately in a tight loop", "Exponential Backoff with Jitter", "Wait exactly 1 hour then retry", "Switch to a different API provider"),
                                "Exponential Backoff with Jitter",
                                "obj_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.fundamentals.7",
                                "In the Messages API, the 'user' and 'assistant' roles must strictly alternate.",
                                QUESTION_TYPE_TF,
                                null,
                                true,
                                "obj_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.fundamentals.8",
                                "Which of the following is NOT a valid content block type in the Messages API?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Text", "Image (Base64)", "Video Stream", "Tool Use"),
                                "Video Stream",
                                "obj_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.fundamentals.9",
                                "When using the Batch API, what is the typical processing window for job completion?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Instantaneous", "Within 1 minute", "Within 24 hours", "Within 7 days"),
                                "Within 24 hours",
                                "obj_fundamentals")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.fundamentals.10",
                                "A 400 Bad Request error typically indicates a temporary issue that should be automatically retried.",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_fundamentals")
                );
