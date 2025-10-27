import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div>
      <h1>Get your university/college codeforce users</h1>
      <form className="flex flex-col p-8">
        <Label className="mb-4">University or college name</Label>
        <Input type="text" placeholder="Eg: Stanford University" />
        <Button className="ml-4 mt-4" variant="ghost" type="submit">
          Get co-Uni Users
        </Button>
      </form>
    </div>
  );
}
