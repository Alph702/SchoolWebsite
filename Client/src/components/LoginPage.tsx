import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Eye, EyeOff, School } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginPageProps {
  language: string;
}

export function LoginPage({ language }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const translations = {
    'English': {
      'Welcome Back': 'Welcome Back',
      'Sign in to your account': 'Sign in to your Shah Abdul Latif Higher Secondary School account',
      'Email Address': 'Email Address',
      'student@school.edu': 'student@school.edu',
      'Password': 'Password',
      'Enter your password': 'Enter your password',
      'Remember me': 'Remember me',
      'Forgot password?': 'Forgot password?',
      'Sign In': 'Sign In',
      "Don't have an account?": "Don't have an account?",
      'Contact Administration': 'Contact Administration',
    },
    'Sindhi': {
      'Welcome Back': 'ڀلي ڪري آيا',
      'Sign in to your account': 'پنهنجي شاهه عبداللطيف هائير سيڪنڊري اسڪول اڪائونٽ ۾ سائن ان ڪريو',
      'Email Address': 'ايميل ايڊريس',
      'student@school.edu': 'student@school.edu',
      'Password': 'پاسورڊ',
      'Enter your password': 'پنهنجو پاسورڊ داخل ڪريو',
      'Remember me': 'مونکي ياد رکو',
      'Forgot password?': 'پاسورڊ وسري ويو؟',
      'Sign In': 'سائن ان ڪريو',
      "Don't have an account?": 'اڪائونٽ ناهي؟',
      'Contact Administration': 'انتظاميا سان رابطو ڪريو',
    },
    'Urdu': {
      'Welcome Back': 'خوش آمدید',
      'Sign in to your account': 'اپنے شاہ عبداللطیف ہائی سیکنڈری اسکول اکاؤنٹ میں سائن ان کریں',
      'Email Address': 'ای میل ایڈریس',
      'student@school.edu': 'student@school.edu',
      'Password': 'پاس ورڈ',
      'Enter your password': 'اپنا پاس ورڈ درج کریں',
      'Remember me': 'مجھے یاد رکھیں',
      'Forgot password?': 'پاس ورڈ بھول گئے؟',
      'Sign In': 'سائن ان کریں',
      "Don't have an account?": 'اکاؤنٹ نہیں ہے؟',
      'Contact Administration': 'انتظامیہ سے رابطہ کریں',
    }
  };

  const t = translations[language as keyof typeof translations];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Handle login logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwc3R1ZHklMjBzcGFjZXxlbnwxfHx8fDE3NTY1MjQ1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="School library study space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>

      {/* Animated background with sandpaper texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0),
              linear-gradient(45deg, transparent 25%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 50%, transparent 50%, transparent 75%, rgba(0,0,0,0.05) 75%)
            `,
            backgroundSize: '12px 12px, 24px 24px'
          }}
        />
      </div>



      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-md mx-auto"
        >
          <Card className="backdrop-blur-sm bg-background/95 border-border/50 shadow-2xl">
            <CardHeader className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center"
              >
                <School size={32} className="text-primary-foreground" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <CardTitle className="text-2xl font-bold text-primary">{t['Welcome Back']}</CardTitle>
                <CardDescription className="mt-2">
                  {t['Sign in to your account']}
                </CardDescription>
              </motion.div>
            </CardHeader>

            <CardContent>
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="space-y-2"
                >
                  <Label htmlFor="email">{t['Email Address']}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t['student@school.edu']}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-input-background border-border/50"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="space-y-2"
                >
                  <Label htmlFor="password">{t['Password']}</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder={t['Enter your password']}
                      value={formData.password}
                      onChange={handleInputChange}
                      className="bg-input-background border-border/50 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex items-center justify-between text-sm"
                >
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border/50" />
                    <span className="text-muted-foreground">{t['Remember me']}</span>
                  </label>
                  <button
                    type="button"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {t['Forgot password?']}
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                    ) : (
                      t['Sign In']
                    )}
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="text-center text-sm text-muted-foreground"
                >
                  {t["Don't have an account?"]}{" "}
                  <button
                    type="button"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    {t['Contact Administration']}
                  </button>
                </motion.div>
              </motion.form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}