test.AddQuestion( new Question ("q1",
                                "What is the primary purpose of Key Capabilities?",
                                QUESTION_TYPE_CHOICE,
                                new Array("\"Why can\'t I connect to my EC2 instance i-0abc123?\"", "What is Amazon Q in the AWS Console?", "Service explanation: Ask about any AWS service and get instant explanations", "Example Conversations"),
                                "Service explanation: Ask about any AWS service and get instant explanations",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which of the following best describes Key Capabilities?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Error diagnosis: Paste error messages and get troubleshooting guidance", "\"Traffic isn\'t flowing between my VPCs\"", "VPC peering issues: \"Traffic isn\'t flowing between my VPCs\"", "EC2 instance not reachable: \"Why can\'t I connect to my EC2 instance i-0abc123?\""),
                                "Error diagnosis: Paste error messages and get troubleshooting guidance",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "What distinguishes Key Capabilities from other approaches?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Service explanation: Ask about any AWS service and get instant explanations", "Resource queries: Ask about your deployed resources and their configuration", "Q knows about AWS service limits and can help when you hit them:", "Convert between CloudFormation and CDK constructs"),
                                "Resource queries: Ask about your deployed resources and their configuration",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What role does Key Capabilities play in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Q knows about AWS service limits and can help when you hit them:", "VPC peering issues: \"Traffic isn\'t flowing between my VPCs\"", "Console navigation: Find the right console page for any task", "Resource queries: Ask about your deployed resources and their configuration"),
                                "Console navigation: Find the right console page for any task",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "Which statement about Key Capabilities is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("CLI generation: Generate AWS CLI commands from natural language", "Permissions and Access", "Amazon Q excels at diagnosing networking issues. Common scenarios:", "\"Traffic isn\'t flowing between my VPCs\""),
                                "CLI generation: Generate AWS CLI commands from natural language",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "Which of the following is true regarding CloudFormation and IaC Assistance?",
                                QUESTION_TYPE_CHOICE,
                                new Array("\"What\'s the maximum number of Lambda concurrent executions?\"", "Network Troubleshooting", "Key Capabilities", "Explain CloudFormation template errors and suggest fixes"),
                                "Explain CloudFormation template errors and suggest fixes",
                                "obj_module_1")
                );