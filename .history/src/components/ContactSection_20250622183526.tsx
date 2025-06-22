import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, Send, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Contactez-moi</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Je suis actuellement à la recherche de nouvelles opportunités et j'aimerais mettre mes compétences et mon enthousiasme au service de votre équipe. Discutons ensemble de la façon dont je peux être un atout pour votre organisation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Envoyez-moi un message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-32 bg-background/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? 'Envoi en cours...' : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
                
                {success && (
                  <div className="mt-4 p-3 bg-green-100 border border-green-200 text-green-700 rounded-md text-sm text-center dark:bg-green-900/30 dark:border-green-800 dark:text-green-300">
                    Message envoyé avec succès ! Je vous répondrai bientôt.
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="glass p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-accent" />
                  <div>
                    <h4 className="font-medium">E-mail</h4>
                    <a href="mailto:lenkalapellymaniteja142@gmail.com" className="text-muted-foreground hover:text-accent">
                      lamat032025@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 mt-1 text-accent" />
                  <div>
                    <h4 className="font-medium">Localisation</h4>
                    <span className="text-muted-foreground">
                      Hyderabad, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Réseaux sociaux</h3>
              
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="gap-2 flex-1" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                
                <Button variant="outline" className="gap-2 flex-1" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
