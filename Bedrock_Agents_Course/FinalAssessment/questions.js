// Final Comprehensive Assessment
// Covers all 1 modules


test.AddQuestion( new Question ("q1",
                                "Regarding BuildingAgents: What is a key feature of Bedrock Agent Components?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Shared context: Agents can pass context between each other", "Foundation Model: The LLM that powers reasoning (Claude, Titan, Llama)", "Supervisor: Routes requests to the appropriate specialist agent", "Bedrock Agent Components"),
                                "Foundation Model: The LLM that powers reasoning (Claude, Titan, Llama)",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q2",
                                "In BuildingAgents: Which statement about Bedrock Agent Components is correct?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Orchestration: Planning which actions to take", "Shared context: Agents can pass context between each other", "Session ID", "Instructions: System prompt defining agent role and behavior"),
                                "Instructions: System prompt defining agent role and behavior",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q3",
                                "In the context of BuildingAgents: Which of the following describes Bedrock Agent Components?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Action Groups: Sets of API actions the agent can perform via Lambda", "Knowledge Bases: RAG-enabled document stores for grounding", "Bedrock supports supervisor agents that coordinate multiple sub-agents:", "Session TTL"),
                                "Action Groups: Sets of API actions the agent can perform via Lambda",
                                "obj_final_assessment")
                );

test.AddQuestion( new Question ("q4",
                                "From the BuildingAgents section: What is Bedrock Agent Components?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Session attributes", "Action Groups with OpenAPI Schema", "Knowledge Bases: RAG-enabled document stores for grounding", "Prompt session attributes"),
                                "Knowledge Bases: RAG-enabled document stores for grounding",
                                "obj_final_assessment")
                );