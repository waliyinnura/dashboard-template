const pageContent = {
  Dashboard: {
    title: "Dashboard",
    description: "Welcome back, Serafim. Here's what's happening today.",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="content-card">
          <h2 className="text-lg font-semibold text-white">Active Projects</h2>
          <p className="text-4xl font-bold mt-2 text-indigo-400">12</p>
        </div>
        <div className="content-card">
          <h2 className="text-lg font-semibold text-white">Tasks Due</h2>
          <p className="text-4xl font-bold mt-2 text-pink-400">5</p>
        </div>
        <div className="content-card">
          <h2 className="text-lg font-semibold text-white">New Users</h2>
          <p className="text-4xl font-bold mt-2 text-emerald-400">28</p>
        </div>
      </div>
    ),
  },
  Analytics: {
    title: "Analytics",
    description: "Detailed insights and metrics for your projects.",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="content-card lg:col-span-2 h-64 flex items-center justify-center">
          <p className="text-gray-400">Chart placeholder for User Growth</p>
        </div>
        <div className="content-card">
          <h2 className="text-lg font-semibold text-white">Bounce Rate</h2>
          <p className="text-4xl font-bold mt-2 text-indigo-400">24.5%</p>
        </div>
        <div className="content-card">
          <h2 className="text-lg font-semibold text-white">Session Duration</h2>
          <p className="text-4xl font-bold mt-2 text-pink-400">8m 12s</p>
        </div>
      </div>
    ),
  },
  Users: {
    title: "Users",
    description: "Manage all the users in your organization.",
    content: (
      <div className="content-card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Doe</td>
              <td>jane.doe@example.com</td>
              <td>Admin</td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>john.smith@example.com</td>
              <td>Developer</td>
            </tr>
            <tr>
              <td>Sam Wilson</td>
              <td>sam.wilson@example.com</td>
              <td>Designer</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  Projects: {
    title: "Projects",
    description: "An overview of all your ongoing and completed projects.",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="content-card">
          <h2 className="text-lg font-semibold text-white">Project Alpha</h2>
          <p className="text-sm text-gray-400 mt-1">Status: In Progress</p>
        </div>
        <div className="content-card">
          <h2 className="text-lg font-semibold text-white">Project Beta</h2>
          <p className="text-sm text-gray-400 mt-1">Status: Completed</p>
        </div>
      </div>
    ),
  },
  Tasks: {
    title: "Tasks",
    description: "Track and manage all your tasks and to-dos.",
    content: (
      <div className="content-card">
        <ul>
          <li className="task-list-item">
            <span>Finalize Q3 report</span>
            <span className="text-xs text-pink-400">Due Tomorrow</span>
          </li>
          <li className="task-list-item">
            <span>Design new landing page mockups</span>
            <span className="text-xs text-gray-400">In Progress</span>
          </li>
          <li className="task-list-item">
            <span>Deploy server updates</span>
            <span className="text-xs text-emerald-400">Completed</span>
          </li>
        </ul>
      </div>
    ),
  },
};

export const Dashboard = ({ activePage }: { activePage: string }) => {
  const { title, description, content } = pageContent[activePage];
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <h1>{title}</h1>
        <p>{description}</p>
        {content}
        {/* <div className="flex gap-2">
          {[...new Array(4)].map((i, idx) => (
            <div
              key={"first-array-demo-1" + idx}
              className="h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
            ></div>
          ))}
        </div>
        <div className="flex flex-1 gap-2">
          {[...new Array(2)].map((i, idx) => (
            <div
              key={"second-array-demo-1" + idx}
              className="h-full w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
            ></div>
          ))}
        </div> */}
      </div>
    </div>
  );
};
