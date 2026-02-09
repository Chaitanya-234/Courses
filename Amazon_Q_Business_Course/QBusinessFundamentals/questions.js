test.AddQuestion( new Question ("q1",
                                "How is Connecting Data Sources best defined?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Application: The Q Business instance (one per use case)", "S3 Connector: Ingest PDF, DOCX, HTML, TXT, CSV files from S3 buckets", "Citation Support: Every answer includes source document references", "Re-index all documents"),
                                "S3 Connector: Ingest PDF, DOCX, HTML, TXT, CSV files from S3 buckets",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q2",
                                "Which of the following is true regarding Connecting Data Sources?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Confluence Connector: Sync wiki spaces, pages, and blog posts", "Access Controls: Respects existing document-level permissions from source systems", "Pre-built chat UI for end users", "Q Business can inherit permissions from source systems. When a user asks a question, Q ..."),
                                "Confluence Connector: Sync wiki spaces, pages, and blog posts",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q3",
                                "Which of the following best describes Connecting Data Sources?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Full sync: Re-index all documents", "Source system credentials with permission-reading access", "SharePoint Connector: Index documents, lists, and pages", "Finds relevant content for user queries"),
                                "SharePoint Connector: Index documents, lists, and pages",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q4",
                                "What is a key characteristic of Connecting Data Sources?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Source system credentials with permission-reading access", "The Q Business instance (one per use case)", "Each data connector syncs documents from an external system into the Q Business index:", "Web Crawler: Crawl and index public or internal web pages"),
                                "Web Crawler: Crawl and index public or internal web pages",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q5",
                                "Which statement about Access Control Lists (ACLs) is accurate?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Initial setup, major changes", "Incremental sync: Only new/modified documents", "Retriever: Finds relevant content for user queries", "IAM Identity Center integration for user mapping"),
                                "IAM Identity Center integration for user mapping",
                                "obj_module_1")
                );

test.AddQuestion( new Question ("q6",
                                "What role does Access Control Lists (ACLs) play in this context?",
                                QUESTION_TYPE_CHOICE,
                                new Array("Q Business can inherit permissions from source systems. When a user asks a question, Q ...", "Index: Stores ingested and indexed document content", "Source system credentials with permission-reading access", "Architecture"),
                                "Source system credentials with permission-reading access",
                                "obj_module_1")
                );