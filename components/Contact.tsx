import { ContactForm } from "./contact-form"

export const Contact = () => {
    return (
        <section id="contact" className="bg-muted/50 py-24 md:py-32">
            <div className="container mx-auto px-4 max-w-[1440px]">
                <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Get In Touch</h2>
                <ContactForm/>
                </div>
            </div>
        </section>
    )
}