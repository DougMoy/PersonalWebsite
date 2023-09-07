import React from "react";
import WorkExperience from "../components/workExperience";
import "./page4.css";
const Page4 = () => {
  return (
    <div className="page-container4">
      <h1 className="page4Title">Work Experience</h1>
      <WorkExperience
        jobTitle="Software Engineering Intern"
        company="UnitedHealth Group - Optum"
        startDate="May 2023"
        endDate="Aug 2023"
        location="Boston, MA"
        description="In my role as a Software Engineering Intern at Optum, I worked on designing and developing mobile app walkthrough components for both iOS and Android platforms. In addition to my development role, I acted as Scrum Master for the other four interns on my team. We made wireframes for these components in Figma and then implemented them with React Native and TypeScript. Although the project was initially for one mobile application, after presenting our progress to leadership, the scope of our project was expanded to implementing it to other enterprise applications. By the end of the internship, we packaged these components in Artifactory so that other enterprise applications could utilize them."
      />
      <WorkExperience
        jobTitle="Data Science Intern"
        company="Center for Mind and Culture"
        startDate="Mar 2021"
        endDate="Present"
        location="Boston, MA"
        description="As a Data Science Intern for the Center for Mind and Culture, I have primarily worked on the Modeling Religious Change Project, a machine learning model that aims to predict how religious trends will change in the future. In this role, I implemented Python and R infrastructure for dataset preprocessing that allowed researchers with limited technical backgrounds to aggregate and combine selected variables from a variety of datasets into one large dataset. In addition, I engineered R and Python scripts to automate graph and table generation, as well as conduct advanced statistical analysis. Throughout this experience, I have learned to effectively communicate my ideas with non-technical consumers as well as implement their solutions into usable software. This upcoming fall, I will be working on another machine learning project that aims to decipher handwriting and automatically extract relevant data from documents in order to save on time and labor."
      />
      <WorkExperience
        jobTitle="Math and Computer Science Grader"
        company="Boston University"
        startDate="September 2021"
        endDate="Present"
        location="Boston, MA"
        description="As a Math and Computer Science Grader at Boston University, I have provided valuable feedback to both graduate and undergraduate students on their homeworks, labs, quizzes and tests. Classes I have graded for are: Principals of Machine Learning, Graduate Algorithms, Calculus III, Linear Algebra, Discrete Math and Differential Equations. I was selected for these roles because of my exemplary performance while being a student in the class. In the case of Graduate Algorithms, I was chosen as a grader due to my outstanding ability in Undergraduate Algorithms, even before officially taking the graduate-level course."
      />
      <WorkExperience
        jobTitle="Research Assistant"
        company="Bella Private Markets"
        startDate="Jan 2022"
        endDate="May 2022"
        location="Boston, MA"
        description="In my role as a research assistant, I actively engaged in quantitative data analysis using SQL and Python libraries like Pandas, Numpy, and Matplotlib. My responsibilities included performing statistical analyses, visualizing data and determining which variables were useful to our project. Additionally, I authored detailed reports summarizing findings and insights from both academic and industry literature related to private equity and venture capitalism.
        "
      />
      <WorkExperience
        jobTitle="Classroom Moderator"
        company="Boston University"
        startDate="Aug 2020"
        endDate="May 2021"
        location="Boston, MA"
        description="As a classroom moderator, I aided teachers in the transition to Zoom during the pandemic. I primarily faciliated hybrid in-person and online interaction between teachers and students. In addition, I helped troubleshoot any hardware and software problems that arised within the classroom."
      />
      <WorkExperience
        jobTitle="Instructor"
        company="Mathnasium"
        startDate="Sep 2018"
        endDate="Feb 2020"
        location="Newton, MA"
        description="In this role, I tutored up to three students at a time, whose grade level ranged from kindergarten to eigth grade. In each lesson, I implemented a custom individualized plan for each student. My students consistently tested above grade level."
      />
    </div>
  );
};

export default Page4;
