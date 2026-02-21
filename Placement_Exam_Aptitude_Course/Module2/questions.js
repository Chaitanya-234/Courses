
test.AddQuestion(new Question("M2_Q1",
    "Find the missing term: 4, 9, 16, 25, ?",
    QUESTION_TYPE_NUMERIC,
    null,
    "36",
    "obj_m2_q1"));

test.AddQuestion(new Question("M2_Q2",
    "Which word does not belong with the others? (Car, Bus, Train, Wheel)",
    QUESTION_TYPE_CHOICE,
    ["Car", "Bus", "Train", "Wheel"],
    "Wheel",
    "obj_m2_q2"));

test.AddQuestion(new Question("M2_Q3",
    "If CAT is coded as 3120, how is DOG coded? (A=1, B=2...)",
    QUESTION_TYPE_CHOICE,
    ["4157", "4150", "4158", "4156"],
    "4157",
    "obj_m2_q3"));

test.AddQuestion(new Question("M2_Q4",
    "A is the brother of B. B is the sister of C. How is A related to C?",
    QUESTION_TYPE_CHOICE,
    ["Father", "Brother", "Uncle", "Son"],
    "Brother",
    "obj_m2_q4"));

test.AddQuestion(new Question("M2_Q5",
    "A man walks 5 km North, then turns Right and walks 5 km. Which direction is he from the start?",
    QUESTION_TYPE_CHOICE,
    ["North", "East", "North-East", "North-West"],
    "North-East",
    "obj_m2_q5"));

test.AddQuestion(new Question("M2_Q6",
    "In a row, A is 10th from Left and 15th from Right. How many people are there?",
    QUESTION_TYPE_NUMERIC,
    null,
    "24",
    "obj_m2_q6"));

test.AddQuestion(new Question("M2_Q7",
    "Statements: All Cats are Dogs. No Dog is a Rat. Conclusion: No Rat is a Cat.",
    QUESTION_TYPE_TF,
    [],
    true,
    "obj_m2_q7"));

test.AddQuestion(new Question("M2_Q8",
    "Statement: 'Join our course to succeed'. Assumption: The course helps in success.",
    QUESTION_TYPE_TF,
    [],
    true,
    "obj_m2_q8"));

test.AddQuestion(new Question("M2_Q9",
    "Five people A, B, C, D, E are sitting in a circle facing center. A is second to left of B. Who is to the immediate right of B?",
    QUESTION_TYPE_CHOICE,
    ["A", "C", "D", "Cannot be determined"],
    "Cannot be determined",
    "obj_m2_q9"));

test.AddQuestion(new Question("M2_Q10",
    "Is x > y? Statement I: x = 5. Statement II: y = 3.",
    QUESTION_TYPE_CHOICE,
    ["I alone is sufficient", "II alone is sufficient", "Both required", "Neither is sufficient"],
    "Both required",
    "obj_m2_q10"));
