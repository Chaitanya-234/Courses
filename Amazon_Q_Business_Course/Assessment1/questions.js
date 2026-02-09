test.AddQuestion(new Question(
    1,
    "What is the primary architectural pattern used by Amazon Q Business to ensure that its answers are grounded in an organization's private data?",
    QUESTION_TYPE_CHOICE,
    [
        "Generative Adversarial Networks (GANs)",
        "Retrieval-Augmented Generation (RAG)",
        "Zero-Shot In-Context Learning",
        "Fine-tuning on private datasets"
    ],
    "Retrieval-Augmented Generation (RAG)",
    "Fundamentals"
));

test.AddQuestion(new Question(
    2,
    "Which of the following is a key differentiator between Amazon Q Business and general-purpose consumer AI chatbots?",
    QUESTION_TYPE_CHOICE,
    [
        "Ability to generate poetry and creative stories",
        "Integration with public social media platforms",
        "Respect for existing enterprise document-level permissions",
        "Lower latency for casual conversation"
    ],
    "Respect for existing enterprise document-level permissions",
    "Fundamentals"
));

test.AddQuestion(new Question(
    3,
    "In the context of Amazon Q Business, what is the role of the 'Retriever'?",
    QUESTION_TYPE_CHOICE,
    [
        "To manage user authentication and session tokens",
        "To pull the most relevant snippets from the index to answer a user's query",
        "To translate user queries into multiple languages",
        "To generate the final natural language response sent to the user"
    ],
    "To pull the most relevant snippets from the index to answer a user's query",
    "Architecture"
));

test.AddQuestion(new Question(
    4,
    "Amazon Q Business provides citations with its answers. Why is this important in an enterprise context?",
    QUESTION_TYPE_CHOICE,
    [
        "It helps to train the LLM on better writing styles",
        "It allows users to verify the information and locate the original source document",
        "It is a legal requirement for all AI-generated content",
        "It increases the speed of the response generation"
    ],
    "It allows users to verify the information and locate the original source document",
    "Fundamentals"
));

test.AddQuestion(new Question(
    5,
    "Which Amazon Q Business subscription tier is designed for power users who need access to advanced features like Custom Plugins?",
    QUESTION_TYPE_CHOICE,
    [
        "Amazon Q Business Lite",
        "Amazon Q Business Standard",
        "Amazon Q Business Pro",
        "Amazon Q Business Enterprise"
    ],
    "Amazon Q Business Pro",
    "Implementation"
));

test.AddQuestion(new Question(
    6,
    "True or False: Amazon Q Business requires you to fine-tune a Large Language Model (LLM) with your private data before it can answer questions about your organization.",
    QUESTION_TYPE_TF,
    null,
    false,
    "Architecture"
));

test.AddQuestion(new Question(
    7,
    "A company wants to reduce the time developers spend searching for internal API specifications. Which Amazon Q Business feature best supports this?",
    QUESTION_TYPE_CHOICE,
    [
        "Social media integration",
        "Semantic search over indexed internal documentation",
        "Automatic code generation for new APIs",
        "Public web search"
    ],
    "Semantic search over indexed internal documentation",
    "Use Cases"
));

test.AddQuestion(new Question(
    8,
    "Which component of Amazon Q Business is responsible for storing and making ingested enterprise data searchable?",
    QUESTION_TYPE_CHOICE,
    [
        "The Connector",
        "The Index",
        "The Web Experience",
        "The Guardrail"
    ],
    "The Index",
    "Architecture"
));
