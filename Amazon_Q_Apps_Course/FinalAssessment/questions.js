// Final Comprehensive Assessment - AI Accessibility with Amazon Q Apps
// ALL QUESTIONS ARE UNIQUE AND DISTINCT FROM MODULE ASSESSMENTS

// Section 1: Foundations & Principles
test.AddQuestion( new Question ("f_q1",
                                "Which concept explains why a clear, AI-generated summary benefits not only users with cognitive disabilities but also busy executives or non-native speakers?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "The curb-cut effect",
                                    "The data perimeter effect",
                                    "Algorithmic bias",
                                    "The semantic web"
                                ),
                                "The curb-cut effect",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q2",
                                "When an AI application builder ensures their dashboard is fully navigable via screen reader, which dimension of accessibility are they primarily addressing?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "Accessible AI Outputs",
                                    "Accessible AI Interfaces",
                                    "Inclusive Dataset Training",
                                    "Model Hallucination Mitigation"
                                ),
                                "Accessible AI Interfaces",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q3",
                                "In the WCAG 'POUR' framework, providing a text transcript for an AI-generated video is an example of making content more:",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "Perceivable",
                                    "Operable",
                                    "Understandable",
                                    "Robust"
                                ),
                                "Perceivable",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q4",
                                "Inclusive design for AI starts with which mindset?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "Designing for the 'average' user first.",
                                    "Recognizing that exclusion happens when we use our own biases to solve problems.",
                                    "Focusing exclusively on technical compliance with laws.",
                                    "Ignoring edge cases to speed up the development cycle."
                                ),
                                "Recognizing that exclusion happens when we use our own biases to solve problems.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q5",
                                "Why is 'Robustness' a key pillar for AI-generated HTML content?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "It ensures the content can be interpreted by a wide variety of assistive technologies.",
                                    "It makes the content load faster on mobile devices.",
                                    "It prevents the AI from generating incorrect information.",
                                    "It reduces the cost of running the LLM."
                                ),
                                "It ensures the content can be interpreted by a wide variety of assistive technologies.",
                                "obj_final")
                );

// Section 2: Building with Amazon Q Apps
test.AddQuestion( new Question ("f_q6",
                                "How does the 'Conversation-to-App' feature in Amazon Q Apps support accessibility?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "By automatically encrypting all user conversations.",
                                    "By allowing users to build complex tools through natural language instead of rigid technical syntax.",
                                    "By limiting the app to only one type of user interaction.",
                                    "By requiring users to have a developer background."
                                ),
                                "By allowing users to build complex tools through natural language instead of rigid technical syntax.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q7",
                                "When configuring an Amazon Q App, why is the sequence of cards important for a blind user?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "It changes the color theme of the application.",
                                    "It ensures a logical reading and navigation order for screen readers.",
                                    "It reduces the amount of data stored in the cloud.",
                                    "It is not important; screen readers can jump to any card randomly."
                                ),
                                "It ensures a logical reading and navigation order for screen readers.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q8",
                                "Which 'System Prompt' instruction would most directly improve the cognitive accessibility of an AI's response?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "\"Use as much technical detail as possible.\"",
                                    "\"Format the response in a single, long paragraph.\"",
                                    "\"Summarize key points using short sentences and plain language.\"",
                                    "\"Do not use any headers or bullet points.\""
                                ),
                                "\"Summarize key points using short sentences and plain language.\"",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q9",
                                "You are building a Q App for HR policy retrieval. To minimize the motor and cognitive effort for the user, which interaction component should you prefer for selecting a policy category?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "A free-text input box where users must type the exact policy name.",
                                    "A selection card with a predefined list of policy categories.",
                                    "A file upload card for the user's ID card.",
                                    "A link to a 100-page PDF document."
                                ),
                                "A selection card with a predefined list of policy categories.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q10",
                                "When performing a 'Simple Language Test' for an AI-generated tool, who is the ideal person to review the output?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "The lead AI developer.",
                                    "A legal compliance officer.",
                                    "A colleague who is completely unfamiliar with the specific topic.",
                                    "A person who already knows the AI's logic."
                                ),
                                "A colleague who is completely unfamiliar with the specific topic.",
                                "obj_final")
                );

// Section 3: Governance, Ethics & Implementation
test.AddQuestion( new Question ("f_q11",
                                "In terms of data minimization for accessibility governance, what should an organization prioritize?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "Collecting as much biometric data as possible.",
                                    "Storing only the minimum amount of preference data necessary to provide an accessible interface.",
                                    "Keeping user preference data indefinitely.",
                                    "Sharing user disability status with all employees."
                                ),
                                "Storing only the minimum amount of preference data necessary to provide an accessible interface.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q12",
                                "In an enterprise governance model for AI, when should an 'Accessibility Review' ideally take place?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "Only after a legal complaint has been filed.",
                                    "At every stage of the app lifecycle, from design to deployment.",
                                    "Only once every five years.",
                                    "Never; AI accessibility is the responsibility of the end-user."
                                ),
                                "At every stage of the app lifecycle, from design to deployment.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q13",
                                "Which sharing model in Amazon Q Apps ensures that a tool has been vetted and is available to every employee in the company?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "Personal sharing only",
                                    "Team-level sharing",
                                    "Organization-wide publishing",
                                    "Restricted API access"
                                ),
                                "Organization-wide publishing",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q14",
                                "Which technical challenge is unique to the 'streaming' nature of Generative AI outputs in terms of accessibility?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "The file size of the AI model is too large.",
                                    "Ensuring that real-time text updates are properly announced to screen readers via ARIA live regions.",
                                    "The cost of the GPU used for inference.",
                                    "The length of the user's password."
                                ),
                                "Ensuring that real-time text updates are properly announced to screen readers via ARIA live regions.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q15",
                                "How does a 'check-the-box' mentality negatively impact AI accessibility initiatives?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "It leads to too much innovation in the space.",
                                    "It treats accessibility as a one-time compliance task rather than an ongoing design philosophy.",
                                    "It makes the applications too easy to use for everyone.",
                                    "It reduces the number of AI servers required."
                                ),
                                "It treats accessibility as a one-time compliance task rather than an ongoing design philosophy.",
                                "obj_final")
                );

// Section 4: Scenario-Based and Application Questions
test.AddQuestion( new Question ("f_q16",
                                "Scenario: A team creates an AI app to summarize technical manuals. They find that the AI often uses complex jargon in its summaries. Which accessibility principle is being violated?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "Operability",
                                    "Understandability",
                                    "Robustness",
                                    "Perceivability"
                                ),
                                "Understandability",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q17",
                                "Scenario: An employee with a motor impairment wants to build an AI tool to help with email triaging. Why is Amazon Q Apps an appropriate tool for them?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "It requires extensive typing of complex code.",
                                    "It offers a no-code, card-based interface that reduces the physical effort of application building.",
                                    "It is only available on desktop computers with specialized mice.",
                                    "It does not require an internet connection."
                                ),
                                "It offers a no-code, card-based interface that reduces the physical effort of application building.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q18",
                                "Which of the following is a 'Business Advantage' of investing in AI accessibility?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "Increased legal risk from new regulations.",
                                    "Higher employee turnover among disabled staff.",
                                    "Access to a wider talent pool and improved productivity across the entire workforce.",
                                    "Slower development cycles due to testing."
                                ),
                                "Access to a wider talent pool and improved productivity across the entire workforce.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q19",
                                "What is the primary risk of 'AI Hallucinations' in the context of accessibility tools?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "They make the interface look less professional.",
                                    "They can provide 'accessible misinformation' that appears correctly formatted but is factually wrong.",
                                    "They increase the power consumption of the user's device.",
                                    "They disable the screen reader's volume control."
                                ),
                                "They can provide 'accessible misinformation' that appears correctly formatted but is factually wrong.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q20",
                                "In the future, 'Multi-Modal' AI accessibility will allow users to:",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "Use only text to interact with the system.",
                                    "Switch seamlessly between voice, text, and gesture based on their immediate needs and abilities.",
                                    "Avoid using AI altogether.",
                                    "Pay for AI services using multiple types of currency."
                                ),
                                "Switch seamlessly between voice, text, and gesture based on their immediate needs and abilities.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q21",
                                "Which type of 'bias' refers to an AI system that lacks representation or understanding of the communication styles of disabled communities?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "Network bias",
                                    "Dataset/Algorithmic bias",
                                    "Hardware bias",
                                    "Browser bias"
                                ),
                                "Dataset/Algorithmic bias",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q22",
                                "When an AI system is described as 'Robust' in an accessibility audit, what has been confirmed?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "The system is physically strong and cannot be broken.",
                                    "The content can be interpreted reliably by varied assistive technologies and user agents.",
                                    "The system uses a large amount of computer memory.",
                                    "The system is only accessible to a few specialized users."
                                ),
                                "The content can be interpreted reliably by varied assistive technologies and user agents.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q23",
                                "Why should enterprises avoid over-reliance on third-party accessibility 'overlays' for their AI tools?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "They are generally too cheap to be effective.",
                                    "They often fail to fix underlying design barriers and can conflict with the user's own assistive software.",
                                    "They make the AI's response too accurate.",
                                    "They are required by law to be avoided."
                                ),
                                "They often fail to fix underlying design barriers and can conflict with the user's own assistive software.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q24",
                                "What is 'Agentic Remediation' in the future of AI?",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "A legal process for suing AI companies.",
                                    "AI agents that proactively identify and fix accessibility gaps in enterprise content.",
                                    "A method for manually writing alt-text for every image.",
                                    "The process of training AI on smaller datasets."
                                ),
                                "AI agents that proactively identify and fix accessibility gaps in enterprise content.",
                                "obj_final")
                );

test.AddQuestion( new Question ("f_q25",
                                "The 'Inclusion by Design' philosophy encourages organizations to:",
                                QUESTION_TYPE_CHOICE,
                                new Array(
                                    "Wait until after product launch to consider accessibility.",
                                    "Treat accessibility as an optional 'premium' feature.",
                                    "Consider accessibility as a fundamental requirement from the very beginning of the development process.",
                                    "Only design for users who have no disabilities."
                                ),
                                "Consider accessibility as a fundamental requirement from the very beginning of the development process.",
                                "obj_final")
                );
