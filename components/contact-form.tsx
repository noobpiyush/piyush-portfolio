"use client";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from  "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/utils";

//define the schema
type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const {handleSubmit, register,  formState: { errors }, reset} = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    })

    const onSubmit =  async(data: ContactFormData)=>{

        setIsSubmitting(true)
        
        try {
            const res = await fetch("api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if(res.ok){
                alert("Email sent successfully");
                reset();
            }
            else{
                alert("Something went wrong");
            }
        }
        catch(error){
            console.error("Error:", error);
        }
        finally{
            setIsSubmitting(false);
        }

    }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Your Name" 
                required 
                {...register("name")}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                required
                {...register("email")}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Subject</Label>
            <Input
              id="subject"
              type="text"
              placeholder="Subject of Your Message"
              required
              {...register("subject")}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <div className="space-y-2">
            <Label>Message</Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project or opportunity..."
              className="min-h-[150px]"
              {...register("message")}
              required
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            { isSubmitting ? (
                <>Processing...</>
            ): (
                <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            ) }
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
