import { Temporal } from "@js-temporal/polyfill";
import { isStudent, parseStudent } from "./models/student.model.js";
import { calculateGrade } from "./models/assessment.model.js";
import { describeEnrollment } from "./models/enrollment.model.js";
import { describeCourse } from "./models/course.model.js";
import { renderResponse } from "./models/api-response.model.js";
/* =========================
   Session 1 Tests
========================= */
const student = {
    id: "STU-001",
    name: "Hana Tadesse",
    enrollmentDate: Temporal.Now.instant()
};
console.log(student.gpa?.toFixed(2) ?? "Not yet graded");
function processStudent(raw) {
    if (isStudent(raw)) {
        const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
        console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
    }
    else {
        console.error("Invalid student data received");
    }
}
processStudent({
    id: "STU-001",
    name: "Hana",
    gpa: 3.7
});
processStudent(42);
console.log(parseStudent({
    id: "STU-001",
    name: "Hana"
}));
/* =========================
   Exercise 4
========================= */
const quiz = {
    id: "QUIZ-001",
    kind: "quiz",
    title: "SQL Basics",
    correctAnswers: 8,
    totalQuestions: 10
};
const lab = {
    id: "LAB-001",
    kind: "lab",
    title: "REST API Project",
    functionalityScore: 85,
    codeQualityScore: 90
};
console.log(`Quiz grade: ${calculateGrade(quiz)}%`);
console.log(`Lab grade: ${calculateGrade(lab)}%`);
/* =========================
   Exercise 5
========================= */
const pending = {
    status: "PENDING",
    requestedAt: Temporal.Now.instant(),
    studentId: "STU-001",
    courseId: "CRS-101"
};
console.log(describeEnrollment(pending));
const webDev = {
    status: "ACTIVE",
    enrolledCount: 28,
    startDate: Temporal.PlainDate.from("2026-09-01")
};
console.log(describeCourse(webDev));
/* =========================
   Exercise 6
========================= */
const studentRes = {
    status: "success",
    data: {
        id: "STU-001",
        name: "Dawit Bekele",
        enrollmentDate: Temporal.Now.instant(),
        gpa: 3.4
    },
    fetchedAt: Temporal.Now.instant()
};
console.log(renderResponse(studentRes, (s) => `${s.name} GPA: ${s.gpa ?? "N/A"}`));
const courseListRes = {
    status: "success",
    data: [
        {
            id: "CRS-101",
            title: "Web Development Fundamentals",
            capacity: 30,
            startDate: Temporal.PlainDate.from("2026-09-01")
        }
    ],
    fetchedAt: Temporal.Now.instant()
};
console.log(renderResponse(courseListRes, (courses) => courses
    .map((c) => c.title)
    .join(", ")));
/* =========================
   Exercise 7
========================= */
const approvedAt = Temporal.Now.instant();
console.log(`Approved at (UTC): ${approvedAt}`);
const addisTime = approvedAt.toZonedDateTimeISO("Africa/Addis_Ababa");
const londonTime = approvedAt.toZonedDateTimeISO("Europe/London");
console.log(`Addis: ${addisTime.toPlainTime()}`);
console.log(`London: ${londonTime.toPlainTime()}`);
const courseStart = Temporal.PlainDate.from("2026-09-01");
const today = Temporal.Now.plainDateISO();
const daysUntilStart = today
    .until(courseStart)
    .total({ unit: "days" });
console.log(`${Math.floor(daysUntilStart)} days until course starts`);
const deadline = Temporal.PlainDate.from("2026-12-15");
const remaining = today.until(deadline);
console.log(`${remaining.total({
    unit: "days"
})} days until assignment is due`);
//# sourceMappingURL=index.js.map