import { CodeBase } from "./CodeBase";
import { studyingStatus } from '../../common/constants/status.constant';
import { UserPerson } from "./UserPerson";
import { Class } from "./Class";
import { gender } from "../../common/constants/gender.constant";
import { Program } from "./Program";
import { Major } from "./Major";
import { InternJob } from "./InternJob";
import { JobFavorite } from "./JobFavorite";
import { StudentLearnIntern } from "./StudentLearnIntern";
import { StudentRequestRegistIntern } from "./StudentRequestRegistIntern";
import { Notice } from "./Notice";
import { Report } from "./Report";
import { Conversation } from "./Conversation";
import { RegularTodo } from "./RegularTodo";
export declare class Student extends CodeBase {
    id: number;
    user_id: number;
    admission_date: Date;
    dob: Date;
    sex: gender;
    current_status: studyingStatus;
    program_id: number;
    major_id: number;
    class_id: number;
    program?: Program;
    major?: Major;
    class?: Class;
    user_person?: UserPerson;
    Intern_job?: InternJob[];
    job_favorite?: JobFavorite[];
    studentLearnIntern?: StudentLearnIntern[];
    studentRequestRegistIntern?: StudentRequestRegistIntern[];
    notice?: Notice[];
    report?: Report[];
    conversation?: Conversation[];
    regularTodo?: RegularTodo[];
}
