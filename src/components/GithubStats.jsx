import GitHubCalendar from "react-github-calendar";

const GitHubStats = () => {
  return (
    <>
     
      <p className="text-2xl py-4 text-gray-400">Github Contribution</p>
      <div className="flex justify-left md:w-full sm:w-fit ml-2">
        <GitHubCalendar username="DeF4lt-Cap10N" colorScheme="dark" />
      </div>
    </>
  );
};

export default GitHubStats;
