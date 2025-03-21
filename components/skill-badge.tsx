import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface SkillBadgeProps {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export const SkillBadge = ({ name, level }: SkillBadgeProps) => {
  const getVariant = () => {
    switch (level) {
      case "Beginner":
        return "outline";
      case "Intermediate":
        return "secondary";
      case "Advanced":
        return "default";
      case "Expert":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <Badge 
        variant={getVariant()}
        className={cn("px-3 py-1 text-xs font-medium", level === "Expert" && "bg-primary hover:bg-primary/80")}
    >
        {name}
    </Badge>
  )
};
