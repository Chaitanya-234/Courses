
test.AddQuestion( new Question ("q1_1",
                                "What distinguishes Amazon Q from generic AI chatbots in the context of AWS?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It only answers questions about general cloud concepts.", "It has contextual awareness of your specific AWS resources and configurations.", "It is faster because it does not use LLMs.", "It can only be accessed via the command line."),
                                "It has contextual awareness of your specific AWS resources and configurations.",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q1_2",
                                "Which interface is primarily focused on code generation, explanation, and security scanning?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Amazon Q in the AWS Management Console", "Amazon Q in the AWS CLI", "Amazon Q in the IDE (e.g., VS Code)", "Amazon Q in the AWS Billing Dashboard"),
                                "Amazon Q in the IDE (e.g., VS Code)",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q1_3",
                                "How does Amazon Q handle permissions when answering questions about your resources?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It bypasses all IAM permissions to provide complete answers.", "It uses a special root user permission that cannot be restricted.", "It respects the user's existing IAM permissions and will not reveal information they cannot access.", "It requires the user to have AdministratorAccess."),
                                "It respects the user's existing IAM permissions and will not reveal information they cannot access.",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q1_4",
                                "What is a key capability of Amazon Q in the AWS Console?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Generating entire Java classes from scratch.", "Diagnosing console errors (e.g., 'Access Denied') and suggesting policy fixes.", "Refactoring legacy codebases automatically.", "Debugging local unit tests."),
                                "Diagnosing console errors (e.g., 'Access Denied') and suggesting policy fixes.",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q1_5",
                                "True or False: Amazon Q uses your private content to train its underlying foundation models for other customers.",
                                QUESTION_TYPE_TF,
                                new Array("True", "False"),
                                "false",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q1_6",
                                "Which IAM permission is specifically required to start a conversation with Amazon Q?",
                                QUESTION_TYPE_CHOICE,
                                new Array("q:StartConversation", "ec2:StartInstances", "iam:PassRole", "s3:GetObject"),
                                "q:StartConversation",
                                "obj_module_1")
                );
