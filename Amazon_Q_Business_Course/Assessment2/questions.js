test.AddQuestion(new Question(
    1,
    "When setting up a data connector, which sync mode is most appropriate for regular, daily updates of a large document repository?",
    QUESTION_TYPE_CHOICE,
    [
        "Full Sync",
        "Incremental Sync",
        "Manual Overwrite",
        "Real-time Streaming"
    ],
    "Incremental Sync",
    "Data Integration"
));

test.AddQuestion(new Question(
    2,
    "Amazon Q Business uses which service as its primary source for user identity and mapping to external directory services?",
    QUESTION_TYPE_CHOICE,
    [
        "AWS IAM Users",
        "AWS IAM Identity Center",
        "Amazon Cognito",
        "AWS Directory Service"
    ],
    "AWS IAM Identity Center",
    "Security"
));

test.AddQuestion(new Question(
    3,
    "How does Amazon Q Business ensure that a user does not receive an answer based on a document they don't have permission to see?",
    QUESTION_TYPE_CHOICE,
    [
        "By encrypting the response with the user's private key",
        "By performing Identity Filtering using document-level ACLs before generating the response",
        "By asking the user to confirm their access level before each query",
        "By only indexing public documents by default"
    ],
    "By performing Identity Filtering using document-level ACLs before generating the response",
    "Security"
));

test.AddQuestion(new Question(
    4,
    "Which of the following is NOT a benefit of mapping source metadata to Amazon Q index attributes?",
    QUESTION_TYPE_CHOICE,
    [
        "Improved precision in search results",
        "Ability to filter answers by department or project",
        "Automatic translation of documents into 50+ languages",
        "Enhanced context for the Generative AI model"
    ],
    "Automatic translation of documents into 50+ languages",
    "Data Integration"
));

test.AddQuestion(new Question(
    5,
    "To index data from a private server located within an on-premise network, which AWS networking component is required for Amazon Q Business?",
    QUESTION_TYPE_CHOICE,
    [
        "Amazon Route 53",
        "VPC configuration with appropriate endpoints or VPN",
        "Public Internet Gateway",
        "AWS CloudFront"
    ],
    "VPC configuration with appropriate endpoints or VPN",
    "Implementation"
));

test.AddQuestion(new Question(
    6,
    "True or False: A single Amazon Q Business application can support multiple data source connectors simultaneously.",
    QUESTION_TYPE_TF,
    null,
    true,
    "Data Integration"
));

test.AddQuestion(new Question(
    7,
    "What is the primary function of a 'Data Source Connector' in Amazon Q Business?",
    QUESTION_TYPE_CHOICE,
    [
        "To provide the user interface for the chat experience",
        "To bridge external systems and the Q Business Index by automating discovery and ingestion",
        "To manage the billing and subscription of the AWS account",
        "To host the Large Language Model (LLM) itself"
    ],
    "To bridge external systems and the Q Business Index by automating discovery and ingestion",
    "Architecture"
));

test.AddQuestion(new Question(
    8,
    "What happens during the 'Permission Mapping' stage of the ingestion lifecycle?",
    QUESTION_TYPE_CHOICE,
    [
        "The connector assigns a random password to each document",
        "The connector fetches Access Control Lists (ACLs) associated with each document",
        "The connector asks the admin to manually approve every document",
        "The connector deletes all existing permissions to make search faster"
    ],
    "The connector fetches Access Control Lists (ACLs) associated with each document",
    "Security"
));
