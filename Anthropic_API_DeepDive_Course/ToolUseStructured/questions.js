test.AddQuestion( new Question ("q1",
                                "What is the primary purpose of Tool Use Flow?",
                                QUESTION_TYPE_CHOICE,
                                new Array("1. You send a message with tool definitions", "3. You execute the tool and return the result as a tool_result", "Validation: Always validate the returned JSON against your schema client-side", "4. Claude incorporates the result into its response"),
                                "1. You send a message with tool definitions",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2",
                                "What is an important aspect of Tool Use Flow?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Descriptive schemas: Add descriptions to every property for better accuracy", "2. Claude decides if a tool is needed and returns a tool_use block", "Validation: Always validate the returned JSON against your schema client-side", "Best Practices for Structured Output"),
                                "2. Claude decides if a tool is needed and returns a tool_use block",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q3",
                                "What distinguishes Tool Use Flow from other approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("3. You execute the tool and return the result as a tool_result", "2. Claude decides if a tool is needed and returns a tool_use block", "Tool Definition Format", "Forcing Tool Use"),
                                "3. You execute the tool and return the result as a tool_result",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q4",
                                "What role does Tool Use Flow play in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use enums: Constrain string values to valid options where possible", "Best Practices for Structured Output", "4. Claude incorporates the result into its response", "Forcing Tool Use"),
                                "4. Claude incorporates the result into its response",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q5",
                                "What is a key characteristic of Best Practices for Structured Output?",
                                QUESTION_TYPE_CHOICE,
                                new Array("3. You execute the tool and return the result as a tool_result", "Descriptive schemas: Add descriptions to every property for better accuracy", "1. You send a message with tool definitions", "2. Claude decides if a tool is needed and returns a tool_use block"),
                                "Descriptive schemas: Add descriptions to every property for better accuracy",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q6",
                                "How is Best Practices for Structured Output best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Required fields: Mark critical fields as required to ensure they appear", "Forcing Tool Use", "Getting Structured JSON Output", "Use enums: Constrain string values to valid options where possible"),
                                "Use enums: Constrain string values to valid options where possible",
                                "obj_module_2")
                );