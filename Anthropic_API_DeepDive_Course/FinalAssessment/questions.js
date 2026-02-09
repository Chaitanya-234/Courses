// Final Comprehensive Assessment
// Covers all 2 modules


test.AddQuestion( new Question ("q1",
                                "In the context of APIFundamentals: Which of the following describes Model?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Rate Limits and Retries", "Streaming Responses", "claude-opus-4-20250514", "Complex reasoning, coding, analysis"),
                                "claude-opus-4-20250514",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q2",
                                "From APIFundamentals: How does Best For work?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Rate limits: Per-model tokens-per-minute and requests-per-minute limits", "claude-haiku-3-5-20241022: Fast, cost-effective tasks", "Authentication", "Complex reasoning, coding, analysis"),
                                "Complex reasoning, coding, analysis",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q3",
                                "Regarding APIFundamentals: What is a key feature of Context Window?",
                                QUESTION_TYPE_CHOICE,
                                new Array("200K tokens", "claude-opus-4-20250514", "Rate Limits and Retries", "claude-sonnet-4-20250514: Balanced performance and cost"),
                                "200K tokens",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q4",
                                "In APIFundamentals: Which statement about Model is correct?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Stream responses token-by-token for real-time UIs:", "claude-sonnet-4-20250514", "claude-sonnet-4-20250514: Balanced performance and cost", "Authentication"),
                                "claude-sonnet-4-20250514",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q5",
                                "From ToolUseStructured: How does Best Practices for Structured Output work?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use the tool use mechanism as a \"JSON mode\" by defining a tool whose schema matches you...", "Required fields: Mark critical fields as required to ensure they appear", "3. You execute the tool and return the result as a tool_result", "1. You send a message with tool definitions"),
                                "Required fields: Mark critical fields as required to ensure they appear",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q6",
                                "In the context of ToolUseStructured: Which of the following describes Best Practices for Structured Output?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Getting Structured JSON Output", "Descriptive schemas: Add descriptions to every property for better accuracy", "Tool Definition Format", "Validation: Always validate the returned JSON against your schema client-side"),
                                "Validation: Always validate the returned JSON against your schema client-side",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q7",
                                "Regarding ToolUseStructured: What is a key feature of Tool Definition Format?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Tool Definition Format", "4. Claude incorporates the result into its response", "2. Claude decides if a tool is needed and returns a tool_use block", "Descriptive schemas: Add descriptions to every property for better accuracy"),
                                "Tool Definition Format",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q8",
                                "In ToolUseStructured: Which statement about Tool Use Flow is correct?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Descriptive schemas: Add descriptions to every property for better accuracy", "Getting Structured JSON Output", "Tool Use Flow", "2. Claude decides if a tool is needed and returns a tool_use block"),
                                "Tool Use Flow",
                                "obj_final_assessment")
                );