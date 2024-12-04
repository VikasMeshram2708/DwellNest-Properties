import { SendHorizonal } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchBar() {
  return (
    <div className="h-80 w-full border rounded shadow">
      <form action="">
        <Input type="text" placeholder="Search..." />
        <Button>
          <SendHorizonal />
        </Button>
      </form>
    </div>
  );
}
