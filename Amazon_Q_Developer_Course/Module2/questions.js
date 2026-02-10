
test.AddQuestion( new Question("M2_Q1",
    "What is the primary function of the Amazon Q 'Dev Agent' (invoked via /dev)?",
    QUESTION_TYPE_CHOICE,
    ["To generate a single line of code completion",
     "To plan and execute complex multi-file changes based on natural language descriptions",
     "To delete unused files automatically",
     "To chat about the weather"],
    1,
    "obj_m2_1")
);

test.AddQuestion( new Question("M2_Q2",
    "Which command would you use to initiate a language upgrade (e.g., Java 8 to 17) using Amazon Q?",
    QUESTION_TYPE_CHOICE,
    ["/upgrade",
     "/transform",
     "/java",
     "/update"],
    1,
    "obj_m2_2")
);

test.AddQuestion( new Question("M2_Q3",
    "True or False: Amazon Q Developer customization allows the AI to learn from your organization's private codebase to provide tailored suggestions.",
    QUESTION_TYPE_TF,
    [],
    true,
    "obj_m2_3")
);

test.AddQuestion( new Question("M2_Q4",
    "When using the feature development workflow, what is the first step after prompting the agent?",
    QUESTION_TYPE_CHOICE,
    ["The agent immediately writes code without asking",
     "The agent generates a step-by-step plan for implementation which you must review",
     "The agent deploys the application to production",
     "The agent asks for your credit card information"],
    1,
    "obj_m2_4")
);

test.AddQuestion( new Question("M2_Q5",
    "Which administrative control helps mitigate IP risk when using Amazon Q Developer?",
    QUESTION_TYPE_CHOICE,
    ["Blocking suggestions that match public code with restrictive licenses",
     "Preventing developers from using the internet",
     " disabling the copy-paste functionality in the IDE",
     "Requiring all code to be written in binary"],
    0,
    "obj_m2_5")
);

test.AddQuestion( new Question("M2_Q6",
    "What does the Amazon Q security scanning feature primarily detect?",
    QUESTION_TYPE_CHOICE,
    ["Syntax errors like missing semicolons",
     "Stylistic issues like indentation",
     "Common security vulnerabilities (e.g., SQL injection, hardcoded secrets) and suggests fixes",
     "Performance bottlenecks only"],
    2,
    "obj_m2_6")
);

test.AddQuestion( new Question("M2_Q7",
    "Which specialized agent is designed specifically for generating comprehensive test suites?",
    QUESTION_TYPE_CHOICE,
    ["/test",
     "/check",
     "/verify",
     "/qa"],
    0,
    "obj_m2_7")
);
