"use client"

import {useState} from "react";
import {CreateSubmissionToken} from "@/actions/create-submission-token";
import {GetSubmission} from "@/actions/get-submission";

export default function DashboardPage() {
    const [sourceCode, setSourceCode] = useState("");

    async function onCLick() {
        // console.log(sourceCode);
        console.log("clicked")

        // const token = await CreateSubmissionToken("print(2+3)", "5");
        //
        //
        // console.log(token);


        const data = await GetSubmission("1dfa9f08-bcb1-4c18-82a9-992e24eb04c3");

        console.log(data);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <textarea
                value={sourceCode}
                onChange={(e) => setSourceCode(e.target.value)}
            />
            <button onClick={onCLick}>Submit</button>
        </div>
    );
}
