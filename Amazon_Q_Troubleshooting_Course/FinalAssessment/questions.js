
// Final Assessment Questions

test.AddQuestion( new Question ("final_1",
                                "What is the primary architectural difference between Amazon Q and a generic large language model (LLM)?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Amazon Q runs on a quantum computer.", "Amazon Q has secure access to your specific AWS account context and resources.", "Amazon Q is open-source software.", "Amazon Q does not use machine learning."),
                                "Amazon Q has secure access to your specific AWS account context and resources.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_2",
                                "Which Amazon Q feature allows you to upgrade a Java 8 application to Java 17 automatically?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Amazon Q Code Transformation", "Amazon Q Business Chat", "Amazon Q in QuickSight", "Amazon Q in Connect"),
                                "Amazon Q Code Transformation",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_3",
                                "You receive an 'AccessDenied' error when trying to list S3 buckets. What is the most effective way to use Amazon Q to resolve this?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Ask Q to list the buckets for you.", "Paste the error message into Q to analyze the missing IAM permission.", "Search for 'S3 Access Denied' in Google.", "Open a support case immediately."),
                                "Paste the error message into Q to analyze the missing IAM permission.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_4",
                                "What security guarantee does AWS provide regarding the data you share with Amazon Q?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Your data is used to train the public model.", "Your content is not used to train the underlying foundation models for other customers.", "Your data is stored publicly on S3.", "Your data is shared with third-party partners."),
                                "Your content is not used to train the underlying foundation models for other customers.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_5",
                                "Which service does Amazon Q integrate with to diagnose network reachability issues between VPC resources?",
                                QUESTION_TYPE_CHOICE,
                                new Array("VPC Flow Logs", "AWS CloudTrail", "VPC Reachability Analyzer", "AWS Config"),
                                "VPC Reachability Analyzer",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_6",
                                "In the IDE, what kind of security vulnerabilities can Amazon Q identify?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Hardcoded credentials and injection flaws.", "Physical security breaches in the data center.", "DDoS attacks on the network layer.", "Phishing emails."),
                                "Hardcoded credentials and injection flaws.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_7",
                                "How does Amazon Q assist with CloudWatch Logs analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It indexes all logs for search.", "It explains the meaning of log errors and suggests remediation steps.", "It deletes old logs to save space.", "It encrypts logs at rest."),
                                "It explains the meaning of log errors and suggests remediation steps.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_8",
                                "Can Amazon Q analyze Service Control Policies (SCPs) when diagnosing permission issues?",
                                QUESTION_TYPE_TF,
                                new Array("True", "False"),
                                "true",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_9",
                                "What is a 'hallucination' in the context of Amazon Q?",
                                QUESTION_TYPE_CHOICE,
                                new Array("A feature that visualizes your infrastructure in 3D.", "A generated response that sounds plausible but is factually incorrect.", "A security breach simulation.", "A type of IAM policy."),
                                "A generated response that sounds plausible but is factually incorrect.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_10",
                                "When using Amazon Q for SQL optimization, what kind of advice might it provide?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Change the database engine from PostgreSQL to MySQL.", "Add specific indexes or rewrite queries to avoid full table scans.", "Increase the instance size immediately.", "Delete the database and restore from backup."),
                                "Add specific indexes or rewrite queries to avoid full table scans.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_11",
                                "Which of the following is a prerequisite for a user to start a conversation with Amazon Q?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The `q:StartConversation` IAM permission.", "Root user access.", "A dedicated VPN connection.", "The AWS CLI installed locally."),
                                "The `q:StartConversation` IAM permission.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_12",
                                "You ask Q: 'Why is my Lambda function timing out?'. What information does Q likely use to answer?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Only the text of your question.", "CloudWatch metrics (duration), logs, and configuration (timeout settings).", "Wikipedia articles about Lambda.", "The billing dashboard."),
                                "CloudWatch metrics (duration), logs, and configuration (timeout settings).",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_13",
                                "What is the primary benefit of 'Console-to-Code' functionality in Amazon Q?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It allows you to play games in the console.", "It translates manual console actions into reusable IaC (e.g., CloudFormation) templates.", "It translates English to French.", "It converts Java code to Python."),
                                "It translates manual console actions into reusable IaC (e.g., CloudFormation) templates.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_14",
                                "True or False: Amazon Q can explain the purpose of a complex IAM policy attached to a role.",
                                QUESTION_TYPE_TF,
                                new Array("True", "False"),
                                "true",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_15",
                                "If you ask Amazon Q about a resource you do not have permission to view (e.g., 'Describe the Payroll-DB RDS instance'), what happens?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Q provides the information anyway.", "Q declines to answer or states it cannot find the resource, respecting least privilege.", "Q triggers a security alarm.", "Q grants you temporary access."),
                                "Q declines to answer or states it cannot find the resource, respecting least privilege.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_16",
                                "Which feature helps developers understand a new codebase quickly?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Code Explanation / 'Explain this code'", "Code Deletion", "Code Obfuscation", "Code Compilation"),
                                "Code Explanation / 'Explain this code'",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_17",
                                "How can Amazon Q help with cost optimization?",
                                QUESTION_TYPE_CHOICE,
                                new Array("By automatically paying the bill.", "By analyzing Cost Explorer data to identify spending trends and anomalies.", "By disabling all EC2 instances at night.", "By mining cryptocurrency."),
                                "By analyzing Cost Explorer data to identify spending trends and anomalies.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_18",
                                "What is the best practice when Amazon Q suggests a code fix?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Apply it immediately to production.", "Review, test, and verify the fix before implementation.", "Ignore it and write your own code from scratch.", "Ask Q to apply it without review."),
                                "Review, test, and verify the fix before implementation.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_19",
                                "Which environment variable issue might Amazon Q identify when debugging an ECS task failure?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The weather in the region.", "Missing or incorrect environment variables required by the container application.", "The color of the console background.", "The user's preferred language."),
                                "Missing or incorrect environment variables required by the container application.",
                                "obj_final")
                );

test.AddQuestion( new Question ("final_20",
                                "True or False: Amazon Q is available in both the AWS Console and popular IDEs like VS Code and IntelliJ.",
                                QUESTION_TYPE_TF,
                                new Array("True", "False"),
                                "true",
                                "obj_final")
                );
