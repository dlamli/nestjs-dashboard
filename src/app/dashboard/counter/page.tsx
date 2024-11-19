import { Counter } from "@/shopping-car/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter",
  description: "Counter client site",
  keywords: ["counter", "client", "site"],
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <span>Products of cart</span>
      <Counter value={20} />
    </div>
  );
}
