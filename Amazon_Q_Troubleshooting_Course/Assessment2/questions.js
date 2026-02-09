
test.AddQuestion( new Question ("q2_1",
                                "When troubleshooting a network connectivity issue between two EC2 instances, which service does Amazon Q integrate with to perform a path analysis?",
                                QUESTION_TYPE_CHOICE,
                                new Array("VPC Flow Logs", "VPC Reachability Analyzer", "CloudWatch Logs", "Amazon Inspector"),
                                "VPC Reachability Analyzer",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2_2",
                                "You encounter an 'Access Denied' error in the console. How does Amazon Q help resolve this?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It bypasses the restriction temporarily.", "It analyzes the error context (request ID, identity) and suggests the specific IAM policy fix.", "It creates a new administrator user for you.", "It generates a support ticket."),
                                "It analyzes the error context (request ID, identity) and suggests the specific IAM policy fix.",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2_3",
                                "In the context of Lambda function troubleshooting, what key insight can Amazon Q provide from CloudWatch Logs?",
                                QUESTION_TYPE_CHOICE,
                                new Array("The exact lines of code where an exception occurred and suggested remediation.", "The billable duration of the function invocation.", "The number of concurrent executions.", "The region where the function is deployed."),
                                "The exact lines of code where an exception occurred and suggested remediation.",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2_4",
                                "How does Amazon Q assist with Service Quotas?",
                                QUESTION_TYPE_CHOICE,
                                new Array("It automatically increases quotas without approval.", "It can query current usage against limits (e.g., 'What is my current Lambda concurrency?') and explain quota errors.", "It prevents you from launching resources if a quota is near.", "It deletes unused resources automatically to free up quota."),
                                "It can query current usage against limits (e.g., 'What is my current Lambda concurrency?') and explain quota errors.",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2_5",
                                "True or False: Amazon Q can diagnose issues related to Service Control Policies (SCPs) that restrict permissions at the AWS Organization level.",
                                QUESTION_TYPE_TF,
                                new Array("True", "False"),
                                "true",
                                "obj_module_2")
                );

test.AddQuestion( new Question ("q2_6",
                                "Which action demonstrates effective interactive troubleshooting with Amazon Q?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Asking the same question repeatedly.", "Copying the entire log file without context.", "Refining the query with specific details (e.g., 'Diagnose SSH connectivity for instance i-12345 from 10.0.0.0/16').", "Asking Q to write a poem about the error."),
                                "Refining the query with specific details (e.g., 'Diagnose SSH connectivity for instance i-12345 from 10.0.0.0/16').",
                                "obj_module_2")
                );
