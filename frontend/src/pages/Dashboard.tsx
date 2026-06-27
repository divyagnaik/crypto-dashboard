import DashboardLayout from "../components/layout/DashboardLayout";
import SummaryCard from "../components/dashboard/SummaryCard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-4 gap-6">
        <SummaryCard
          title="Bitcoin"
          value="$108,230"
        />

        <SummaryCard
          title="Ethereum"
          value="$2,560"
        />

        <SummaryCard
          title="Market Cap"
          value="$3.4T"
        />

        <SummaryCard
          title="24H Volume"
          value="$124B"
        />
      </div>
    </DashboardLayout>
  );
}