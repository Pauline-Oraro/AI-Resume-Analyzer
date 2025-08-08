import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI RESUME ANALYZER" },
    { name: "description", content: "AI RESUME ANALYZER" },
  ];
}

export default function Home() {
  return <Welcome />;
}
