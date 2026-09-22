import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navigation({ adress, text }: { adress: string; text: string }) {

  return (
    <Button variant="default">
      <Link href={adress}>{text}</Link>
    </Button>
  );
}