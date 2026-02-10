test.AddQuestion( new Question ("m3_q1",
                                "What is a primary responsibility of an AI 'Center of Excellence' (CoE) as described in the module?",
                                QUESTION_TYPE_CHOICE,
                                new Array("To write the source code for the underlying LLMs.",
                                          "To set standards for app design and review popular apps for broader departmental use.",
                                          "To physically maintain the AWS data centers.",
                                          "To manually answer every query that the AI cannot handle."),
                                "To set standards for app design and review popular apps for broader departmental use.",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q2",
                                "Regarding data privacy, what happens to the proprietary data that an Amazon Q App accesses from your company's S3 buckets?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It is sent to public AI models to improve their general accuracy.",
                                          "It is used by AWS to train future foundational models.",
                                          "It remains isolated within your AWS account and is never used for training foundational models.",
                                          "It is automatically deleted after the first time the app is used."),
                                "It remains isolated within your AWS account and is never used for training foundational models.",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q3",
                                "Which administrative control allows IT managers to promote high-quality, vetted apps to all employees?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The 'Audit Log' feature",
                                          "The 'Feature' or 'Curation' capability in the Q Apps Library",
                                          "The 'Delete App' button",
                                          "The 'IAM Role Creator'"),
                                "The 'Feature' or 'Curation' capability in the Q Apps Library",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q4",
                                "If a compliance officer needs to verify that all Q App interactions follow the company's data privacy policy, which administrative resource should they review?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The Natural Language App Builder",
                                          "Audit Logs and Monitoring",
                                          "The CSS Stylesheet",
                                          "The Input Card"),
                                "Audit Logs and Monitoring",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q5",
                                "What is the primary benefit of the 'Draft' state when a user is editing an existing, published application?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It allows the creator to test changes privately without affecting the live version used by others.",
                                          "It automatically deletes the old version to save space.",
                                          "It makes the app run faster during the editing process.",
                                          "It sends an email to every user in the company."),
                                "It allows the creator to test changes privately without affecting the live version used by others.",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q6",
                                "What are 'Guardrails' in the context of Amazon Q Business and Q Apps?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Physical security barriers around the server racks.",
                                          "Configurable controls that block harmful content or restrict the AI from sensitive topics.",
                                          "The name of the visual theme used in the Q Apps builder.",
                                          "A plugin that allows the AI to access external weather data."),
                                "Configurable controls that block harmful content or restrict the AI from sensitive topics.",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q7",
                                "TRUE or FALSE: Amazon Q Apps can be integrated with existing corporate identity providers like Okta or Microsoft Entra ID through AWS IAM.",
                                QUESTION_TYPE_TF,
                                new Array("True", "False"),
                                "True",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("m3_q8",
                                "What is the recommended approach for scaling AI innovation globally across an organization as mentioned in the module?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Requiring every employee to take a 6-month coding bootcamp.",
                                          "Using the Q Apps Library to allow employees to share and discover apps built by their colleagues.",
                                          "Centrally building all apps in the IT department and forbidding users from creating their own.",
                                          "Hiring one AI consultant for every ten employees."),
                                "Using the Q Apps Library to allow employees to share and discover apps built by their colleagues.",
                                "obj_module_3")
                );