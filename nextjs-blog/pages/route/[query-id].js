import { useRouter } from "next/router";

export default function DynamicRoute() {
  const { query } = useRouter();

  return (
    <div>
      <h1>
        Dynamc Route : Id from query <em>{query["query-id"]}</em>
      </h1>
    </div>
  );
}
