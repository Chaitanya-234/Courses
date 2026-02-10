test.AddQuestion( new Question ("com.scorm.anthropic.advanced.1",
                                "To send an image to the Messages API, which encoding format is typically required for the image data?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hexadecimal string", "Base64 encoded string", "Binary blob", "Raw pixel array"),
                                "Base64 encoded string",
                                "obj_advanced")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.advanced.2",
                                "When constructing a multimodal prompt, where is the optimal position for the image content relative to the user's question?",
                                QUESTION_TYPE_CHOICE,
                                new Array("After the question", "Before the question", "In a separate system message", "It doesn't matter"),
                                "Before the question",
                                "obj_advanced")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.advanced.3",
                                "Which factor has the most significant impact on the number of tokens consumed by an image input?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Color depth", "File format (PNG vs JPEG)", "Image resolution (width x height)", "Compression level"),
                                "Image resolution (width x height)",
                                "obj_advanced")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.advanced.4",
                                "What distinguishes an 'autonomous agent' from a standard chatbot interaction?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It runs on faster hardware", "It can plan, execute multi-step actions using tools, and reflect on outputs", "It uses a larger context window", "It is always human-supervised"),
                                "It can plan, execute multi-step actions using tools, and reflect on outputs",
                                "obj_advanced")
                );

test.AddQuestion( new Question ("com.scorm.anthropic.advanced.5",
                                "Claude's vision capabilities are certified for use in professional medical diagnosis (e.g., interpreting X-rays).",
                                QUESTION_TYPE_TF,
                                null,
                                false,
                                "obj_advanced")
                );
