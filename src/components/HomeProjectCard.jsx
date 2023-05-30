import React from "react";


export default function ProjectCard() {
    return (
      <a href={props.href}>
        <h2>
          {props.title}
          <span>&rarr;</span>
        </h2>
        <p>
          {props.body}
        </p>
      </a>
    );
  }