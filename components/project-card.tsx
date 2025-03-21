import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import {  ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
}
export const ProjectCard = ({
  description,
  githubUrl,
  image,
  technologies,
  title,
  demoUrl,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {technologies.length > 5 && (
            <Badge variant="outline" className="text-xs">
              +{technologies.length - 5} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="gap-1" asChild>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            Code
          </Link>
        </Button>
        {demoUrl && (
          <Button size="sm" className="gap-1" asChild>
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
