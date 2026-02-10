test.AddQuestion(new Question(
    1,
    "What is the primary purpose of 'Plugins' in Amazon Q Business?",
    QUESTION_TYPE_CHOICE,
    [
        "To change the background color of the chat interface",
        "To enable the AI assistant to interact with and take actions in external applications",
        "To increase the speed of the document indexing process",
        "To provide a way for users to upload their own LLMs"
    ],
    "To enable the AI assistant to interact with and take actions in external applications",
    "Plugins"
));

test.AddQuestion(new Question(
    2,
    "When creating a Custom Plugin, which two components are typically required?",
    QUESTION_TYPE_CHOICE,
    [
        "A CSS stylesheet and a HTML template",
        "An OpenAPI specification and an AWS Lambda function",
        "A CSV file of users and a PDF manual",
        "An IAM User and a VPC Peering connection"
    ],
    "An OpenAPI specification and an AWS Lambda function",
    "Plugins"
));

test.AddQuestion(new Question(
    3,
    "Which feature allows an administrator to prevent Amazon Q Business from discussing specific, sensitive topics?",
    QUESTION_TYPE_CHOICE,
    [
        "PII Masking",
        "Topic Blocking",
        "Incremental Sync",
        "Vector Embedding"
    ],
    "Topic Blocking",
    "Guardrails"
));

test.AddQuestion(new Question(
    4,
    "How does Amazon Q Business handle Personally Identifiable Information (PII) for compliance?",
    QUESTION_TYPE_CHOICE,
    [
        "It stores all PII in a public S3 bucket for transparency",
        "It can be configured to automatically detect and mask PII in queries and responses",
        "It requires users to sign a waiver before mentioning PII",
        "It deletes any document that contains a name or address"
    ],
    "It can be configured to automatically detect and mask PII in queries and responses",
    "Guardrails"
));

test.AddQuestion(new Question(
    5,
    "Which of the following can be customized within the managed Amazon Q Business 'Web Experience'?",
    QUESTION_TYPE_CHOICE,
    [
        "The underlying Large Language Model architecture",
        "The logo, colors, and welcome message",
        "The AWS region where the data is stored",
        "The pricing of the AWS account"
    ],
    "The logo, colors, and welcome message",
    "Deployment"
));

test.AddQuestion(new Question(
    6,
    "True or False: A user must have an active subscription (Lite or Pro) assigned in IAM Identity Center to use the Amazon Q Business Web Experience.",
    QUESTION_TYPE_TF,
    null,
    true,
    "Deployment"
));

test.AddQuestion(new Question(
    7,
    "What 'Multi-step reasoning' capability is enabled by plugins?",
    QUESTION_TYPE_CHOICE,
    [
        "Generating multiple images at once",
        "Combining information retrieval, summarization, and action execution in a single workflow",
        "Calculating mathematical formulas in parallel",
        "Running the assistant on multiple devices simultaneously"
    ],
    "Combining information retrieval, summarization, and action execution in a single workflow",
    "Plugins"
));

test.AddQuestion(new Question(
    8,
    "Which tool can an administrator use to identify 'knowledge gaps' where the AI is unable to find answers?",
    QUESTION_TYPE_CHOICE,
    [
        "The VPC Flow Logs",
        "Amazon Q Business Usage Analytics",
        "AWS Trusted Advisor",
        "Amazon CloudWatch Metrics for CPU usage"
    ],
    "Amazon Q Business Usage Analytics",
    "Administration"
));
