test.AddQuestion( new Question ("q1",
                                "What is a key characteristic of Best Practices?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ensure model responses are grounded in the provided source material:", "Additional latency added by guardrail evaluation", "Applying Guardrails to Inference", "Start with HIGH filter strength and relax only if false positives are excessive"),
                                "Start with HIGH filter strength and relax only if false positives are excessive",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "How is Best Practices best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Version your guardrails and test changes in staging before production", "Latency impact: Additional latency added by guardrail evaluation", "Test guardrails with adversarial prompts before deploying to production", "Best Practices"),
                                "Test guardrails with adversarial prompts before deploying to production",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which statement about Best Practices is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Use denied topics for business-specific restrictions beyond content safety", "Best Practices", "Guardrail Metrics and Monitoring", "Sensitive Information Filters: Detect and redact PII (SSN, email, phone, credit card)"),
                                "Use denied topics for business-specific restrictions beyond content safety",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What distinguishes Best Practices from other approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Invocation count: Total number of guardrail evaluations", "Enable PII anonymization (not blocking) for better user experience when possible", "Additional latency added by guardrail evaluation", "Sensitive Information Filters: Detect and redact PII (SSN, email, phone, credit card)"),
                                "Enable PII anonymization (not blocking) for better user experience when possible",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "What is the primary purpose of Best Practices?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Invocation count: Total number of guardrail evaluations", "Sensitive Information Filters: Detect and redact PII (SSN, email, phone, credit card)", "Ensure model responses are grounded in the provided source material:", "Monitor intervention rates - high rates may indicate UX issues or attack attempts"),
                                "Monitor intervention rates - high rates may indicate UX issues or attack attempts",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What is an important aspect of Best Practices?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Intervention rate: Percentage of requests blocked", "Version your guardrails and test changes in staging before production", "Invocation count", "Which filter types are triggering most"),
                                "Version your guardrails and test changes in staging before production",
                                "obj_module_1")
                );