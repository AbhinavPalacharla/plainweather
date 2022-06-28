import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const hello = trpc.useQuery([
    "weather.geocode",
    {
      location: "San Diego",
    },
  ]);
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data[0]}</p>
    </div>
  );
}
