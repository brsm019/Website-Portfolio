import React from "react";
import Video from "../Video";
import LandingPage from "../LandingPage";

function Todolist() {
  return (
    <div>
      <LandingPage
        src1="/videos/project-page-bg-3.mov"
        h1="To Do List"
        p="Front-end creation of a to do list"
        btnText="VIEW VIDEO"
        link="video"
      />
      <Video
        video="/videos/ToDoList-video.mov"
        alt="Todolist"
        description="One of my first react projects. The list functionality allows to add to the list, apply strike-throughs, remove individual items and delete all items. The majority of state logic was at the highest level separating concerns and extensive use of spread a slice operators. To view the GitHub repo, follow the link below."
        text="VIEW SORCE CODE"
        link="https://github.com/brsm019/React-to-do-list"
      />
    </div>
  );
}

export default Todolist;
