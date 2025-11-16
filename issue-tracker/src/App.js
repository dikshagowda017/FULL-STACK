import React from "react";

function IssueTracker() {
  const issues = [
    { id: 1, title: "Login Bug", description: "Login button not working on mobile", status: "Open" },
    { id: 2, title: "Page Crash", description: "Dashboard crashes after adding new user", status: "Closed" },
    { id: 3, title: "Slow Loading", description: "Reports page takes too long to load", status: "Open" },
  ];

  return (
    <div>
      <h2>Issue Tracker</h2>
      {issues.map((issue) => (
        <div
          key={issue.id}
          style={{
            border: "1px solid gray",
            margin: "10px 0",
            padding: "10px",
            background: issue.status === "Open" ? "#ffeaea" : "#eaffea",
          }}
        >
          <h3>{issue.title}</h3>
          <p>{issue.description}</p>
          <p>Status: {issue.status}</p>
        </div>
      ))}
    </div>
  );
}

export default IssueTracker;
 