import { Title as TextTitle } from "@/components";
import { CompersionChart } from "./component/compersion-bar";
import { AnalyticUser } from "./component/analytic-user";
import { FeedbackChart } from "./component";

export const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F7F8FB] p-8">
      <div className="">
        <TextTitle label="Welcome To Dashbaord" />
      </div>
      <AnalyticUser />
      <div className="flex gap-4 md:flex-row flex-col my-10">
        <div className="md:w-1/2 w-full rounded-lg hover:shadow-md p-2 bg-white">
          <TextTitle label="Feedback Trends" styles="text-lg" />
          <FeedbackChart />
        </div>
        <div className="md:w-1/2 w-full rounded-lg hover:shadow-md p-2 bg-white">
          <TextTitle label="Compersion Betwwen Menu & Bar" styles="text-lg" />
          <CompersionChart />
        </div>
      </div>

      <div className="flex gap-4 md:flex-row flex-col">
        <div className="md:w-1/2 w-full rounded-lg hover:shadow-md p-2 bg-white">
          <TextTitle label="Monthly Revenue Trends" styles="text-lg" />
          <FeedbackChart />
        </div>
        <div className="md:w-1/2 w-full rounded-lg hover:shadow-md p-2 bg-white">
          <TextTitle label="Peak Hours Trends" styles="text-lg" />
          <FeedbackChart />
        </div>
      </div>
    </div>
  );
};
