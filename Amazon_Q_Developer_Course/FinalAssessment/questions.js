
// Final Assessment Questions - 25 Unique Questions

// 1. Core Functionality
test.AddQuestion( new Question("FA_Q1",
    "Which Amazon Q Developer feature allows you to upgrade a Java 8 application to Java 17 automatically?",
    QUESTION_TYPE_CHOICE,
    ["Code Completion",
     "Amazon Q Code Transformation",
     "Security Scan",
     "Reference Tracker"],
    1,
    "obj_fa_1")
);

// 2. Security
test.AddQuestion( new Question("FA_Q2",
    "What action does Amazon Q take when it detects a potential security vulnerability in your code during a scan?",
    QUESTION_TYPE_CHOICE,
    ["It deletes the code immediately",
     "It locks the IDE until an administrator unlocks it",
     "It highlights the issue and provides a suggested code fix to remediate it",
     "It sends an email to the AWS CEO"],
    2,
    "obj_fa_2")
);

// 3. Customization
test.AddQuestion( new Question("FA_Q3",
    "How does Amazon Q Developer Customization improve code suggestions for enterprise teams?",
    QUESTION_TYPE_CHOICE,
    ["By training on the public internet only",
     "By indexing the organization's private codebase (RAG) to understand internal APIs and patterns",
     "By hiring manual reviewers to check every suggestion",
     "By increasing the font size of suggestions"],
    1,
    "obj_fa_3")
);

// 4. IDE Support
test.AddQuestion( new Question("FA_Q4",
    "Which of the following IDEs is fully supported via the AWS Toolkit for Amazon Q Developer?",
    QUESTION_TYPE_CHOICE,
    ["Notepad.exe",
     "Visual Studio Code",
     "Adobe Dreamweaver",
     "Google Docs"],
    1,
    "obj_fa_4")
);

// 5. Pricing/Tiers
test.AddQuestion( new Question("FA_Q5",
    "Which Amazon Q Developer tier includes enterprise user management via IAM Identity Center?",
    QUESTION_TYPE_CHOICE,
    ["Individual Tier (Free)",
     "Professional Tier",
     "Student Tier",
     "Beta Tier"],
    1,
    "obj_fa_5")
);

// 6. Data Privacy
test.AddQuestion( new Question("FA_Q6",
    "True or False: In the Amazon Q Developer Professional tier, your code content is used to train the underlying foundation models by default.",
    QUESTION_TYPE_TF,
    [],
    false,
    "obj_fa_6")
);

// 7. Context Awareness
test.AddQuestion( new Question("FA_Q7",
    "What information does Amazon Q use to generate context-aware suggestions in the IDE?",
    QUESTION_TYPE_CHOICE,
    ["Only the current line being typed",
     "The code in the current file, surrounding files, and open tabs",
     "Your browser history",
     "Your LinkedIn profile"],
    1,
    "obj_fa_7")
);

// 8. Reference Tracking
test.AddQuestion( new Question("FA_Q8",
    "If a code suggestion matches a public code repository, what does the Reference Tracking feature provide?",
    QUESTION_TYPE_CHOICE,
    ["The phone number of the original author",
     "The URL of the repository and the associated license information",
     "A warning to stop coding immediately",
     "An automatic donation to the project"],
    1,
    "obj_fa_8")
);

// 9. CLI Support
test.AddQuestion( new Question("FA_Q9",
    "Amazon Q Developer integration for the command line was formerly known as:",
    QUESTION_TYPE_CHOICE,
    ["Fig",
     "BASH-AI",
     "CmdHelper",
     "Terminator"],
    0,
    "obj_fa_9")
);

// 10. Admin Controls
test.AddQuestion( new Question("FA_Q10",
    "Which policy can an enterprise administrator enforce to reduce IP risk?",
    QUESTION_TYPE_CHOICE,
    ["Block all code suggestions longer than 10 lines",
     "Block suggestions that include references to public code with specific licenses",
     "Require all developers to use the same keyboard",
     "Disable code deletion"],
    1,
    "obj_fa_10")
);

// 11. Autonomous Agents
test.AddQuestion( new Question("FA_Q11",
    "The /dev agent in Amazon Q is primarily designed to:",
    QUESTION_TYPE_CHOICE,
    ["Run unit tests only",
     "Implement full features across multiple files from natural language prompts",
     "Format JSON files",
     "Change the IDE color theme"],
    1,
    "obj_fa_11")
);

// 12. Security - Encryption
test.AddQuestion( new Question("FA_Q12",
    "How is data protected while in transit between the IDE and Amazon Q service?",
    QUESTION_TYPE_CHOICE,
    ["It is sent as plain text",
     "It is encrypted via TLS (Transport Layer Security)",
     "It is compressed into a ZIP file",
     "It is not protected"],
    1,
    "obj_fa_12")
);

// 13. Troubleshooting
test.AddQuestion( new Question("FA_Q13",
    "If Amazon Q is not providing suggestions, what is a common troubleshooting step?",
    QUESTION_TYPE_CHOICE,
    ["Reinstalling the operating system",
     "Checking if the AWS Toolkit is authenticated and the internet connection is active",
     "Buying a new computer",
     "Writing code in a language that doesn't exist"],
    1,
    "obj_fa_13")
);

// 14. Best Practices - Prompting
test.AddQuestion( new Question("FA_Q14",
    "Which is a best practice for prompt engineering with Amazon Q?",
    QUESTION_TYPE_CHOICE,
    ["Providing as little context as possible",
     "Using ambiguous terms",
     "Being specific and providing context (e.g., specific file names or constraints)",
     "Asking the same question repeatedly without changing the wording"],
    2,
    "obj_fa_14")
);

// 15. SQL capabilities
test.AddQuestion( new Question("FA_Q15",
    "Can Amazon Q Developer assist with writing SQL queries?",
    QUESTION_TYPE_TF,
    [],
    true,
    "obj_fa_15")
);

// 16. Language Support
test.AddQuestion( new Question("FA_Q16",
    "Which of the following languages is supported by Amazon Q Developer?",
    QUESTION_TYPE_CHOICE,
    ["Python",
     "Java",
     "JavaScript",
     "All of the above"],
    3,
    "obj_fa_16")
);

// 17. Security - Remediation
test.AddQuestion( new Question("FA_Q17",
    "When Amazon Q suggests a security fix, can it automatically apply the changes to your code?",
    QUESTION_TYPE_CHOICE,
    ["No, you must type it manually",
     "Yes, usually with a single click or command to apply the diff",
     "Only if you pay extra per fix",
     "Yes, but it requires a reboot"],
    1,
    "obj_fa_17")
);

// 18. Chat Interface
test.AddQuestion( new Question("FA_Q18",
    "What is the 'Explain Code' feature useful for?",
    QUESTION_TYPE_CHOICE,
    ["Translating code into French",
     "Understanding complex or unfamiliar legacy code by getting a natural language summary",
     "Making the code run faster",
     "Deleting comments"],
    1,
    "obj_fa_18")
);

// 19. Tests
test.AddQuestion( new Question("FA_Q19",
    "The /test command is used to:",
    QUESTION_TYPE_CHOICE,
    ["Test the internet speed",
     "Generate unit tests for the selected code",
     "Check if the computer is on",
     "Test the microphone"],
    1,
    "obj_fa_19")
);

// 20. Evolution
test.AddQuestion( new Question("FA_Q20",
    "Amazon Q Developer was formerly known as:",
    QUESTION_TYPE_CHOICE,
    ["Amazon CodeGuru",
     "Amazon CodeWhisperer",
     "AWS Cloud9",
     "Amazon Lex"],
    1,
    "obj_fa_20")
);

// 21. Limitations - Hallucinations
test.AddQuestion( new Question("FA_Q21",
    "Why should developers review every line of code generated by AI?",
    QUESTION_TYPE_CHOICE,
    ["To check for spelling errors only",
     "Because AI can 'hallucinate' incorrect logic or insecure patterns",
     "Because the AI asks them to",
     "It is not necessary to review AI code"],
    1,
    "obj_fa_21")
);

// 22. Limitations - Context
test.AddQuestion( new Question("FA_Q22",
    "True or False: Amazon Q Developer has an infinite context window and can read every file on your hard drive simultaneously.",
    QUESTION_TYPE_TF,
    [],
    false,
    "obj_fa_22")
);

// 23. Usage Scenarios
test.AddQuestion( new Question("FA_Q23",
    "In which phase of the SDLC is Amazon Q Developer NOT typically involved?",
    QUESTION_TYPE_CHOICE,
    ["Coding",
     "Testing",
     "Maintenance/Refactoring",
     "Physical hardware manufacturing"],
    3,
    "obj_fa_23")
);

// 24. Authentication - Builder ID
test.AddQuestion( new Question("FA_Q24",
    "Does AWS Builder ID require an AWS Account and credit card to use the free tier of Amazon Q?",
    QUESTION_TYPE_CHOICE,
    ["Yes, always",
     "No, it is a personal profile independent of an AWS account",
     "Only for Java developers",
     "Only on Tuesdays"],
    1,
    "obj_fa_24")
);

// 25. Strategic Value
test.AddQuestion( new Question("FA_Q25",
    "What is the long-term benefit of using Amazon Q Developer for an organization?",
    QUESTION_TYPE_CHOICE,
    ["Reduced electricity bills",
     "Higher developer velocity, better code quality, and faster innovation",
     "Elimination of all software bugs forever",
     "Free AWS credits"],
    1,
    "obj_fa_25")
);
