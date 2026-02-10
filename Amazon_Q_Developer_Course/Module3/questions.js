
test.AddQuestion( new Question("M3_Q1",
    "Which of the following is considered a major strategic advantage of adopting Amazon Q Developer?",
    QUESTION_TYPE_CHOICE,
    ["It eliminates the need for any human developers",
     "It guarantees 100% bug-free code instantly",
     "It increases developer velocity by automating boilerplate code and routine tasks",
     "It automatically fires underperforming employees"],
    2,
    "obj_m3_1")
);

test.AddQuestion( new Question("M3_Q2",
    "What is a 'hallucination' in the context of generative AI coding assistants?",
    QUESTION_TYPE_CHOICE,
    ["When the AI becomes sentient",
     "When the AI generates code that looks syntactically correct but is logically flawed or references non-existent libraries",
     "When the AI refuses to write code due to ethical concerns",
     "When the AI generates code in a different programming language than requested"],
    1,
    "obj_m3_2")
);

test.AddQuestion( new Question("M3_Q3",
    "To mitigate the risk of intellectual property infringement, organizations should configure Amazon Q to:",
    QUESTION_TYPE_CHOICE,
    ["Block all internet access for developers",
     "Disable the keyboard shortcuts for copy-paste",
     "Enable reference tracking and block suggestions that match public code with restrictive licenses",
     "Only hire developers who have memorized the entire codebase"],
    2,
    "obj_m3_3")
);

test.AddQuestion( new Question("M3_Q4",
    "True or False: Because Amazon Q Developer is AI-powered, its code suggestions are always secure and do not need to be reviewed for vulnerabilities.",
    QUESTION_TYPE_TF,
    [],
    false,
    "obj_m3_4")
);

test.AddQuestion( new Question("M3_Q5",
    "Which practice is recommended to improve the quality of code suggestions from Amazon Q?",
    QUESTION_TYPE_CHOICE,
    ["Writing vague comments like '// todo'",
     "Keeping all files closed to reduce distraction",
     "Opening relevant files (interfaces, utilities) to provide context and writing detailed comments",
     "Using obscure variable names to confuse the AI"],
    2,
    "obj_m3_5")
);

test.AddQuestion( new Question("M3_Q6",
    "What is a potential technical limitation of using Large Language Models for coding?",
    QUESTION_TYPE_CHOICE,
    ["They cannot generate text",
     "They have a 'context window' limit and may not fully understand dependencies across thousands of files at once",
     "They are too slow to be useful in real-time",
     "They only support Python"],
    1,
    "obj_m3_6")
);

test.AddQuestion( new Question("M3_Q7",
    "Why is it important to treat Amazon Q Developer as a 'junior pair programmer'?",
    QUESTION_TYPE_CHOICE,
    ["Because it is not paid a salary",
     "Because its suggestions should always be critically reviewed for correctness, efficiency, and security",
     "Because it can only write simple 'Hello World' programs",
     "Because it gets tired easily"],
    1,
    "obj_m3_7")
);
