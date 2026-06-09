import { Temporal } from "@js-temporal/polyfill";
import { isStudent, parseStudent } from "./models/student.model.js";
const student = {
    id: "STU-001",
    name: "Hana Tadesse",
    enrollmentDate: Temporal.Now.instant()
};
// student.id = "STU-999"; // readonly error
console.log(student.gpa?.toFixed(2));
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
parseStudent({
    id: 42,
    name: "Test"
});
//# sourceMappingURL=index.js.map