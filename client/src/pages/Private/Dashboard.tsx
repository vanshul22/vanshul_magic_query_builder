import { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";
import JsonHighlighter from "@/components/JsonHighlighter";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/customHooks/fetcher";
import { Textarea } from "@/components/ui/textarea"
import { useAuthStore } from "@/store/authStore";
const VITE_API_URL = import.meta.env.VITE_API_URL;


const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});

  const [user] = useAuthStore(state => [state.user]);

  // Check if the JSON Object is empty.
  const isEmpty: boolean = Object.keys(data).length !== 0;

  const submitQueryFunc = async () => {

    if (query.length < 10) {
      toast.error("Query must be atleast 10 chars long");
      return;
    }
    const toastId = toast.loading("Submitting Query");

    setTimeout(async () => {
      toast.success("Submitted Successfully", { id: toastId });
      try {
        const URL = `${VITE_API_URL}api/query`;
        const response: NodeResponse<{ jsonObject: Record<string, string> }> = await fetcher(URL, { method: "POST", body: { "query": query }, token: user?.token });
        if (response.success) setData(response.jsonObject);
      } catch (error) {
        console.log(error)
      }
    }, 2000);


  }

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center rounded-md mx-1 my-2">
        <div className=" flex flex-col w-6/12 gap-5">
          <Label htmlFor="query" className="text-4xl font-bold text-teal-600 dark:text-teal-400 hover:text-teal-500 cursor-pointer">Query</Label>
          <Textarea id="query" value={query} onChange={e => setQuery(e.target.value)} className="dark:bg-primary-foreground text-lg" placeholder="Type your query here." />
          <Button onClick={() => submitQueryFunc()}>Fetch Data</Button>
          {isEmpty && <div>
            <h1>Generated JSON Object:</h1>
            <JsonHighlighter jsonData={data} />
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;