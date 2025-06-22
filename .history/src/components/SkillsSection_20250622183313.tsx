import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

const SkillsSection = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const skills: Skill[] = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'backend' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'frontend' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'backend' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'backend' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'backend' },
    { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', category: 'backend' },
    { name: 'Drizzle', icon: 'https://raw.githubusercontent.com/drizzle-team/drizzle-orm/main/docs/public/logo.svg', category: 'backend' },
    { name: 'Neon', icon: 'data:image/webp;base64,UklGRtgNAABXRUJQVlA4IMwNAAAwXQCdASqSAQ8BPp1OokylpKMzJNS4mmATiWVu4EVaUkEwvcaHSt/+b6pdC/P5HpJI07ps6vpk8wzoKc6F6Z97Pp0NDf1f+NphlVTAjmc21FKozbUX76VRm0bvbm1XESSajugWtRWpZe0hckWZjaKmYRCxv+IQpPunwvlDEG775N9dHxjTd9eIfZT6ePksMcRQ+tR/8Hey6vtftWiFq3HhSBIh//qefLI1Z9beDU8KHWi0JeFngIJHjLZaNjUGrv3kv/ePYzxGuR12T0w42elqyrWZQ9oc7Q0UX9yqv+r7OjZwCw+PB8h488DItDWbAu/IvnEX2fkPnJclKLehK0wyRpRarb32XrBrxV52GcC0kJiwsZNO6Akj5wDd2lfB12OyzL+7HgiAjJK5YPmy2TkfTQxxo/uvIsA1EQakoDVw9JbrIxoAC+HMUGeEP4FzGYJkuISNUknaouLnZ/3C+cG4zRiSETUYsb32ButYLCD6Tt3FOJ9/bl+OWvKEH6IbUqcHNKfVCtHAyuPQe9Muc93YP3orS6BT0lx5tLQiFQPerJvq/smc4b8MXGbGHwnw4OGintDMtzFvF+4CTXlQvndo97ioqayyL3hdCPweMILTso7U5ecRFcGbO7ClTQ5n0UHoLKZ6JCkqGPNFPjkAHO7Q4Hxq/n/YuU2ANUKydZAhK7lE0FXMayGJbCwvHmhsAINub5m5kRouXl7hmLt/6/ZqRo5C1WQCvp5D+EvHNx/d9FLSQ4h74pAUtR2/OOEX/eat4rG0c+5v32B3TymyAgfMJFnqklhhTc+jeVqej5jVmlOUAo+jfthbndh5Y0PlXdvDCr9ihXd8ZMtqoM4zTW3EMmVKSn9tC86+5XJziYNDH5FT5VnFyyrF1jkI0FfyYSOs1XH4gYpJRxHPJcLkKwkIfT/2ZxT45lagWRn9Z6TkfIOoKwMCLc0kyQjhS6Mu7kjVpVGbaikSlt821FZk8vMzDG01Ibt7+F5Jxt421FKozckAAP71ZacZDIT66aUo2ADnpJxx8iSGcsjmwRjw2d8tLhxL0SRQfcTmgmpntFIgFntnMiIbJovDZzY35dNCqVAaE/Lmukk0dXzjNq27pCIuIS8bKKJPImldlFGZwGBFWSGrfYmx/utVMQzM9dR1eXsyK2Cea6W+rBKCciArCFTmnKC4U4O+rHaubBK5YYc7i6ZkgAB2kOLTJgjfAREk3PS4dZS+RdLL4yR06MscgSJngY/Ms+/el3x7oMz6jwqrumGK/WFfMv2tVH17pLlXf1GyaYq03UBE3su7UJTbaFwmCvjKkZRGbzs3KMBaoEImH0NIl9vrXnBR4XsvsUh4pUyBQzessZGkMJx5pCg4Gg9ELi0OUcqGrKDy70+gifFezavHicS/sFptFEKDaCL8g57bM957/XzLztaq7KTEI8CIq86JbsD6JVVVMqNZ9cFq/duGMEEyCzY+D2PT+FHiIu044SjQb+Sw4cFjLV5Tchiasl9AUJemYaJeTLXHPvuHlm12eC2ORGA4RMdvA7BuX2KH59lHDG0bH804CR3USzjy3w5/EOqTMCdH10r0jGE6yIlOikVJJivkFdY0pCPooaOoY34OY+T46uF+DQiDw0kvSP/nOz8h4FTzkUrfBeGwEZlTYDNgdYo9S5fpiR/sHzK2R5LQy7aK8FZC6KVCMWjjxS6PwgGcoyvglZDbG5/QO/CogSu6lw2tcYCqj3RUyVvh16aT1UdeaD8/9Sz6Cp1vXCoKfavgzB0Dm9QEmYOkXXe89FUGoKxGj97mUPjFGuAjLpBX4YS/GEGACwPbJw4FlNd/KBv6x+DOf9ZIwMuF/0wQBaKo9f1T0c/JU2Y+ZeoteNuvzCAWhtnqxm44dS6vg4SiUBvTl2kUCF1+4ikKySTGv4jtVuHVSlUmGNi9+9WbW/Wx2VdjS89LPuoVbKhK7lc37pASbnBVGSWUE31FZ3fXgrw2nWVg6NcMhEJD+Kz6PnqNbyKqLpyBObXv5Sc+3cKKemNnsB2b2yPxKRZgRM7Jl0JV1s5nVl7jRKTJR9p+Fs/qyEtsJx/Bl/RSOF86yi+H+0QCWyT6zw5s7BJPuxe2ZP2cE5KHspYB/PBx2YUoEDIwIWy+QrzRbW4ahptbLn5HMeP5hvAB6OZkboifa27E2H55p2V6lvdDTuRs2IBSKmzQZdXI9gTDj4FXOtP0OksvTTEiVTcm8kPudzJ481PCjVbshUZuK5KE3/H58A3bLP0QP7pW+7PnWHeTvxp7gFlETOso2XyWMA50A1dLs2gZG6griVLF/3sLxASqF6uVDuB+NOXka1pGfgAXuA51r8Zb4MuDzkQ0cuDoM2gZjXBbFuCQGay6jWrNwJhX+qTnZzU4IkHq5tpSnIs0jBY6EIIqWNUlWS7n7hoRJU/Ra7NHzeGF0YphuIWJw0btqCV/gVqTvThpCtRxfLmkJvs870JPeXtZCi6nsoEtYthAxcTSxzWu4UZDaaXxPuiP2Aa+pInkpaRgctRkUfpqGqq/TsPR+GmoxHuaqCZT2XvZ50ULbpHa1o2F7RjKRbT2nNqT3I1p1ZgaYD1bDJIcdKFwokdTf+8oOd+ljkQdKpQ/IoBHx6ho7tHm9bktjoEyD95EFvm04DLjvaniv6eXKZoBbMyEnPfxOBABmEVKVXfxRwZVslSFWPWh+ZisiDQbuNIKjPWF14iHhsGSYM7ZSQ0Pe4Q/Koaz/sobykZLGMDIe7UlADEujQxVFKxUhXkbQAVO+TOHEQAdSeixbsVGF4zhUvqpnqJ9LNkWl5AQIIS92lkjkm6dF4Em0S23LFCmRL4/GYllqyvZ3s7czqiATTQ88VxbdvEaS9rwSJC1xUisV6+/KsCn2huoVNR+XtMKFL1Oz6q3UAmqvDumBDN+gfNiyGXBSFkyhoojRuDA9ifIm5JsMwOfRHvbxM0xfOX5S3WA24CqwtqvdQxXyFsSJrSMNyAbsJU1EAF5TOds7o+IaFC8hhB1cm+Y9dqWdzvFyFgOecRSHPy2uEcJWGg21mwoivElABKBckbcHbXoEZiY8ZKrQNpAPYSf1gIVapdUN+e8Pb3qcDTMeqt6Qi2bGvU2IswrrPPL7K0oc+Ll48FjeeytOBLb4oxkt15lxLKFdlX3GUlQJwngAUDlWiXR1dUzPppBsX81MoZweWF4dW+t3367t/kAeXgXIRRnFBq1VJ19GFFuHotDsQM7ALgUQwC5/Dzt5OCLQ1za8C5bKZF7OkQwz9ZdKx8tSX/Ag0yyFf4f9CHAOsUQKALpzKNqZDUEog3QCmDjS7a33l/MUTws/8tFuuv5jk3YM+rI8d0T9TtlqAuFqH9Q1UtITb5RpXmd4kJ3SIlV+oHeq0vGiW6LIN35I3qwiu/SQwXrB3XWs1XwA8ITNnkTKy6IbUvdEWSIXyk6BHdQw9trf7EJlXVOYVXsA9peoeSu/bBWY/2iOw8pKNT4Tpk4zaSbe4PWYfXs9Kk6mNR1BBeVo5KWpdmnyy7erOOlDpkjMeRtrpfE2azLaTWR2PoQCJBh3FBp9z8N9J33Ov6P1gkmUjoP4KfDfDDEZFHAgAcLilaTi42PAv+LcignNGBBhjfy5mQYh21GrwQ5MNaiGFosU57Ccno/LJUQ71MjN+0G1A7CPUe/dR5UTQuNRGnvi2zMIyi9gSFCc7xuUEjaFreZKbGrwJCShXskPpSAehNN4YDdPw63dvxs9AaG8mtN0dYzXP85RjJa4CNzbYt4ZOiftO3P2AlQ3yMbKpScuiHyut0m9i6Fy01WKKIXYap3KRM/doq2eaCHNB0Pz0qaBYCZVvObzyUC/bib+UtgKKxVRQ+2vZ5sjun8Kn8jFJcizkDchiz/mfS0HHa/GkBAHvpv1R8Z7RaprP+BGL9nxK7U5hNq8IW6hjTc6DTv2APRK6knA9/kGoMHqRqW1j9Esmci2YRUZlVPE9c95QsSVwC8KnI6UyLqZaxzWjvzINb1zL2FKzQFkUZqySRM2BBA1abTiCjVik6lJmkyVD51rkcHd25i4tCx5WxjDQRLeHKc6BT9+ZtkY+VCb3hah/f1k0LH/cHcwxe1cOJUd9uzscv4C70iFX2S3CS6TVoTKaz+xy1Q2jdX9g+2ySow0d3cyPjY1VnYfTNeFaSSM6BUCpnJLog/sBltGrwLNqgHjbZ6SAqyjqSswgzmSpuDbUhaESMTEoQyUC2sfBXWNyMgxyth3ivy9bb2BJ0/6HuPLldQVQTOArwI9TjUkO1CZAi91roUFYJqSn0cYE78lW/IilZtaRPoRyLJUeBVcAzCTEp/lTlw5zSWvVbprDxFoAZVxrY82N9pmTVwLrscKcnj4SI5OLHdErdERy3IDadI2C/ICfWn/rEg6Uv37vCcXjuKIueNgfWbIVgexv9ozkkrr80wdkX/nZRdkSpgPNkfBusk4bWeSNXx7/o+dKSH0mn5CSjKbL5V0TJbt2POPo0g4C4X+EBbO5x+KPKmgO8IN69sraTWA8H7jO5v7WZW1pt61dH5ChjK/1demdxydyBKTKpavzvt11ZBtRi3TwScp6hFSilYweBBAyvHfuIkryLrxWnQGzqgdIYnNSS6MAGpY0AvCtVfH35npJQWyBH0JPW2Y1EpUoDcQ6lYKbu8bzN0tgkJPtHIlhKwexptx+JYf29CGNgxl2NT/3mmlX16ChauczZkAGOP3qwWqPi2kP8LJEjlGxAA', category: 'backend' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'backend' },
    { name: 'Appwrite', icon: 'https://th.bing.com/th/id/OIP.2LMkwKMvyihm-z05tvJqjgHaDC?w=345&h=143&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3', category: 'backend' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', category: 'tools' },
  ];

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Mes Compétences</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            J'ai travaillé avec une variété de technologies dans le monde du développement web.
            Voici les compétences clés que je mets à votre disposition.
          </p>
        </div>

        {/* Boutons de filtre */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'all' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('all')}
          >
            Toutes
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'frontend' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'backend' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'tools' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('tools')}
          >
            Outils
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "glass p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-300",
                "hover:scale-105 hover:shadow-glass-lg animate-fade-in",
                "opacity-0"
              )}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-12 h-12 md:w-16 md:h-16 object-contain mb-3"
              />
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
