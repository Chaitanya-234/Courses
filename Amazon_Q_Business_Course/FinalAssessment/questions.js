test.AddQuestion(new Question(
    1,
    "In Amazon Q Business, what is the primary benefit of 'Semantic Search' over traditional keyword-based search?",
    QUESTION_TYPE_CHOICE,
    [
        "It is faster to index documents",
        "It understands the intent and context of a query rather than just matching words",
        "It requires less storage space in the index",
        "It only works with encrypted documents"
    ],
    "It understands the intent and context of a query rather than just matching words",
    "Architecture"
));

test.AddQuestion(new Question(
    2,
    "During the query process, when does Identity Filtering occur in the Amazon Q Business workflow?",
    QUESTION_TYPE_CHOICE,
    [
        "After the LLM generates the final response",
        "Before the retrieved snippets are sent to the LLM",
        "Before the user is allowed to log in to the system",
        "Only when the user specifically requests a private document"
    ],
    "Before the retrieved snippets are sent to the LLM",
    "Security"
));

test.AddQuestion(new Question(
    3,
    "Which capability allows Amazon Q Business to orchestrate a complex workflow, such as summarizing a document and then opening a ticket in an external system?",
    QUESTION_TYPE_CHOICE,
    [
        "Full Sync mode",
        "Multi-step reasoning enabled by Plugins",
        "Vector Embeddings",
        "VPC Endpoints"
    ],
    "Multi-step reasoning enabled by Plugins",
    "Capabilities"
));

test.AddQuestion(new Question(
    4,
    "How does Amazon Q Business correlate a chat user's identity with the Access Control Lists (ACLs) found in source systems like SharePoint?",
    QUESTION_TYPE_CHOICE,
    [
        "By asking the user to manually type their SharePoint username in every chat",
        "By mapping identities from a corporate directory into AWS IAM Identity Center",
        "By bypassing security and searching all documents regardless of user identity",
        "By using the user's IP address as a unique identifier"
    ],
    "By mapping identities from a corporate directory into AWS IAM Identity Center",
    "Security"
));

test.AddQuestion(new Question(
    5,
    "What is the consequence of failing to properly map source metadata (like 'Project ID') to Amazon Q index attributes?",
    QUESTION_TYPE_CHOICE,
    [
        "The documents will not be indexed at all",
        "The assistant will be unable to provide precise answers based on those specific attributes",
        "The AWS account will be suspended",
        "The LLM will stop responding to all queries"
    ],
    "The assistant will be unable to provide precise answers based on those specific attributes",
    "Best Practices"
));

test.AddQuestion(new Question(
    6,
    "Which Amazon Q Business feature provides a pre-built, customizable user interface that can be easily deployed to employees?",
    QUESTION_TYPE_CHOICE,
    [
        "The Data Connector",
        "The Web Experience",
        "The AWS Management Console",
        "The VPC Peering Link"
    ],
    "The Web Experience",
    "Deployment"
));

test.AddQuestion(new Question(
    7,
    "In an enterprise environment, why might an administrator review Amazon Q Business 'Sync Logs' regularly?",
    QUESTION_TYPE_CHOICE,
    [
        "To see which employees are chatting the most",
        "To identify and remediate documents that failed to index due to format or permission issues",
        "To check the current price of AWS stock",
        "To read the private messages of users"
    ],
    "To identify and remediate documents that failed to index due to format or permission issues",
    "Administration"
));

test.AddQuestion(new Question(
    8,
    "Which subscription tier is required for a developer who needs to use Amazon Q's generative AI capabilities within the AWS Management Console?",
    QUESTION_TYPE_CHOICE,
    [
        "Amazon Q Business Lite",
        "Amazon Q Business Pro",
        "Amazon Q Business Basic",
        "Amazon Q Business Advanced"
    ],
    "Amazon Q Business Pro",
    "Pricing"
));

test.AddQuestion(new Question(
    9,
    "How does Amazon Q Business help maintain compliance with regulations like GDPR regarding sensitive user data?",
    QUESTION_TYPE_CHOICE,
    [
        "By storing all data in a single global region",
        "By providing automatic PII detection and masking in both queries and responses",
        "By requiring all users to be administrators",
        "By disabling the search function for all users"
    ],
    "By providing automatic PII detection and masking in both queries and responses",
    "Security"
));

test.AddQuestion(new Question(
    10,
    "True or False: Amazon Q Business can provide answers based on real-time data from an external API if a plugin is correctly configured.",
    QUESTION_TYPE_TF,
    null,
    true,
    "Capabilities"
));

test.AddQuestion(new Question(
    11,
    "Which component of the Amazon Q architecture is responsible for transforming raw text into vector embeddings during the ingestion process?",
    QUESTION_TYPE_CHOICE,
    [
        "The Web Experience",
        "The Indexing process",
        "The VPC Gateway",
        "The IAM Role"
    ],
    "The Indexing process",
    "Architecture"
));

test.AddQuestion(new Question(
    12,
    "When a user asks a question, Amazon Q Business provides citations. What information is typically included in these citations?",
    QUESTION_TYPE_CHOICE,
    [
        "The name of the LLM that generated the answer",
        "Links to the specific source documents used to form the response",
        "The total cost of the query",
        "The IP address of the server that processed the request"
    ],
    "Links to the specific source documents used to form the response",
    "Fundamentals"
));

test.AddQuestion(new Question(
    13,
    "What is 'Topic Blocking' designed to prevent?",
    QUESTION_TYPE_CHOICE,
    [
        "Users from asking too many questions in a day",
        "The AI assistant from engaging in conversations about unauthorized or sensitive subjects",
        "The system from indexing documents larger than 10MB",
        "The administrator from changing the application settings"
    ],
    "The AI assistant from engaging in conversations about unauthorized or sensitive subjects",
    "Guardrails"
));

test.AddQuestion(new Question(
    14,
    "Why is it recommended to start an Amazon Q Business deployment with a limited set of high-quality data sources?",
    QUESTION_TYPE_CHOICE,
    [
        "Because the index can only store 10 documents",
        "To avoid 'diluting' answer quality with irrelevant or low-authority information",
        "Because it is free to index only 5 sources",
        "To prevent the LLM from learning too much too quickly"
    ],
    "To avoid 'diluting' answer quality with irrelevant or low-authority information",
    "Best Practices"
));

test.AddQuestion(new Question(
    15,
    "Which of the following describes the 'RAG' (Retrieval-Augmented Generation) pattern correctly?",
    QUESTION_TYPE_CHOICE,
    [
        "Generating random answers and hoping they are correct",
        "Retrieving relevant facts from a private knowledge base and using an LLM to generate an answer based *only* on those facts",
        "Asking other users to provide answers to a query",
        "Continuously retraining an LLM on the entire public internet"
    ],
    "Retrieving relevant facts from a private knowledge base and using an LLM to generate an answer based *only* on those facts",
    "Architecture"
));
