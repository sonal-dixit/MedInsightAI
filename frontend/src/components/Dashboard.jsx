
const Dashboard = ({ children }) => {
  return (
    <div className="w-full rounded-2xl shadow-xl p-10 flex flex-col gap-8">
      {children}
    </div>
  );
};

export default Dashboard;
