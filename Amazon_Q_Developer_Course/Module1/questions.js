
test.AddQuestion( new Question("M1_Q1",
    "What is the primary function of Amazon Q Developer in the software development lifecycle (SDLC)?",
    QUESTION_TYPE_CHOICE,
    ["To replace human developers entirely",
     "To act as an intelligent pair programmer assisting with code generation, debugging, and upgrades",
     "To manage project timelines and Jira tickets",
     "To solely provide cloud infrastructure cost analysis"],
    1,
    "obj_m1_1")
);

test.AddQuestion( new Question("M1_Q2",
    "Which underlying technology powers Amazon Q Developer's ability to understand code context?",
    QUESTION_TYPE_CHOICE,
    ["Simple keyword matching algorithms",
     "Large Language Models (LLMs) trained on billions of lines of code",
     "A database of pre-written code snippets",
     "Manual review by Amazon engineers"],
    1,
    "obj_m1_2")
);

test.AddQuestion( new Question("M1_Q3",
    "Which authentication method is primarily used for the free Individual Tier of Amazon Q Developer?",
    QUESTION_TYPE_CHOICE,
    ["AWS IAM Identity Center",
     "AWS Builder ID",
     "Amazon.com shopping account",
     "GitHub OAuth"],
    1,
    "obj_m1_3")
);

test.AddQuestion( new Question("M1_Q4",
    "How does Amazon Q Developer handle security scanning for code vulnerabilities?",
    QUESTION_TYPE_CHOICE,
    ["It sends code to a third-party security firm for manual review",
     "It only scans for syntax errors, not security issues",
     "It proactively scans code against a database of known vulnerabilities (CVEs) and suggests remediation",
     "It requires users to upload their code to a public S3 bucket for scanning"],
    2,
    "obj_m1_4")
);

test.AddQuestion( new Question("M1_Q5",
    "What is the purpose of the 'Reference Tracking' feature in Amazon Q Developer?",
    QUESTION_TYPE_CHOICE,
    ["To track how much time a developer spends coding",
     "To identify if generated code resembles open-source code and provide attribution/licensing info",
     "To monitor which websites a developer visits",
     "To keep a history of all code changes made by the user"],
    1,
    "obj_m1_5")
);

test.AddQuestion( new Question("M1_Q6",
    "True or False: Amazon Q Developer Professional tier uses customer code to train its foundation models.",
    QUESTION_TYPE_TF,
    [],
    false,
    "obj_m1_6")
);

test.AddQuestion( new Question("M1_Q7",
    "Which of the following is NOT a supported environment for Amazon Q Developer?",
    QUESTION_TYPE_CHOICE,
    ["Visual Studio Code",
     "JetBrains IDEs (IntelliJ, PyCharm)",
     "Microsoft Word",
     "AWS Cloud9"],
    2,
    "obj_m1_7")
);
