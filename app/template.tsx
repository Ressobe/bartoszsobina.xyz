import { AnimatePage } from "@/app/_components/animations/animate-page";

export default function Template({ children }: { children: React.ReactNode }) {
  return <AnimatePage>{children}</AnimatePage>;
}
