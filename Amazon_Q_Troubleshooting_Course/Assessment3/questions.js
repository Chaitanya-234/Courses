
test.AddQuestion( new Question ("q3_1",
                                "What capability does Amazon Q Developer offer for modernizing legacy Java applications?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It generates a list of deprecated libraries but does not change code.", "It analyzes, plans, and automatically refactors code (e.g., from Java 8 to 17).", "It deploys the application to ECS.", "It writes unit tests only."),
                                "It analyzes, plans, and automatically refactors code (e.g., from Java 8 to 17).",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3_2",
                                "How does Amazon Q assist with database performance optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By automatically scaling RDS instances.", "By analyzing complex SQL queries and suggesting improvements (e.g., indexing, JOIN optimization).", "By creating read replicas without user intervention.", "By monitoring disk I/O."),
                                "By analyzing complex SQL queries and suggesting improvements (e.g., indexing, JOIN optimization).",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3_3",
                                "What type of issues does Amazon Q's security scanning primarily identify?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Network connectivity issues.", "IAM permission boundaries.", "Code vulnerabilities (e.g., hardcoded credentials, SQL injection) and AWS best practice violations.", "Cost overruns."),
                                "Code vulnerabilities (e.g., hardcoded credentials, SQL injection) and AWS best practice violations.",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3_4",
                                "A FinOps engineer notices a spike in AWS costs. How can Amazon Q help?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It can automatically terminate expensive resources.", "It analyzes Cost Explorer data to identify specific cost drivers (e.g., '5 p3.2xlarge instances launched on the 15th').", "It creates a budget alarm.", "It negotiates pricing with AWS support."),
                                "It analyzes Cost Explorer data to identify specific cost drivers (e.g., '5 p3.2xlarge instances launched on the 15th').",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3_5",
                                "True or False: Amazon Q Developer can generate entire feature implementations across multiple files based on natural language descriptions.",
                                QUESTION_TYPE_TF,
                                new Array("True", "False"),
                                "true",
                                "obj_module_3")
                );

test.AddQuestion( new Question ("q3_6",
                                "What is a recommended best practice when using Amazon Q for code refactoring?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Accept all suggestions immediately without review.", "Assume the code is perfect and deploy to production.", "Iteratively refine the suggestion, review security implications, and test thoroughly.", "Disable security scanning to speed up the process."),
                                "Iteratively refine the suggestion, review security implications, and test thoroughly.",
                                "obj_module_3")
                );
