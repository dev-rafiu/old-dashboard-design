import KPICard from "@/components/ui/kpi-card";
import ActiveUsers from "./courier/active-users";
import AverageDeliveryTime from "./courier/average-delivery-time";
import CompletedTrips from "./courier/completed-trips";
import CustomerSatisfaction from "./courier/customer-satisfaction";
import CustomersPerService from "./courier/customers-per-service";
import NewRiders from "./courier/new-riders";
import NewSignUp from "./courier/new-sign-up";
import NewSignUps from "./courier/new-sign-ups";
import Revenue from "./courier/revenue";
import Riders from "./courier/riders";
import TotalUsersByRevenue from "./courier/total-users-by-revenue";

function Page() {
  return (
    <section className="space-y-4">
      {/* revenue and riders */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        <Revenue />
        <Riders />
      </div>

      {/* <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        <InfoCard
          title="orders"
          percentageInfo="12% percent from yesterday"
          percentageDiff="up"
          value={1223}
        />
        <InfoCard
          title="completed trips"
          percentageInfo="12% percent from yesterday"
          percentageDiff="down"
          value={2445}
        />
        <InfoCard
          title="total users"
          percentageInfo="12% percent from yesterday"
          percentageDiff="up"
          value={1233}
        />
        <InfoCard
          title="active users"
          percentageInfo="12% percent from yesterday"
          percentageDiff="down"
          value={555}
        />
        <InfoCard
          title="new user"
          percentageInfo="12% percent from yesterday"
          percentageDiff="up"
          value={245}
        />
      </div> */}

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        <KPICard
          title="orders"
          metric="$ 12,699"
          deltaType="moderateIncrease"
          delta="34.3%"
          value={500}
        />
        <KPICard
          title="completed trips"
          metric="$ 12,699"
          deltaType="moderateDecrease"
          delta="10.3%"
          value={1000}
        />
        <KPICard
          title="total users"
          metric="$ 12,699"
          deltaType="moderateIncrease"
          delta="25.3%"
          value={800}
        />
        <KPICard
          title="club members"
          metric="$ 12,699"
          deltaType="moderateIncrease"
          delta="40.3%"
          value={2000}
        />
        <KPICard
          title="new user"
          metric="$ 12,699"
          deltaType="moderateDecrease"
          delta="8.3%"
          value={950}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <TotalUsersByRevenue />
        <AverageDeliveryTime />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <ActiveUsers />
        <NewSignUp />
        <NewSignUps />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <CustomerSatisfaction />
        <CustomersPerService />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        <CompletedTrips />
        <NewRiders />
      </div>
    </section>
  );
}

export default Page;
