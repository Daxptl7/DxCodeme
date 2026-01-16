from django.core.management.base import BaseCommand
from core.models import Skill, Project, Experience

class Command(BaseCommand):
    help = 'Seeds the database with initial profile data'

    def handle(self, *args, **kwargs):
        self.stdout.write('Clearing old data...')
        Skill.objects.all().delete()
        Project.objects.all().delete()
        Experience.objects.all().delete()

        self.stdout.write('Seeding Skills...')
        skills_data = [
            ('Artificial Intelligence', 'AI'), ('Python', 'AI'), ('NumPy', 'AI'), 
            ('Pandas', 'AI'), ('Matplotlib', 'AI'), ('Seaborn', 'AI'),
            ('C', 'LANG'), ('C++', 'LANG'), ('JavaScript', 'LANG'),
            ('HTML5', 'WEB'), ('CSS', 'WEB'), ('Tailwind CSS', 'WEB'), 
            ('Bootstrap', 'WEB'), ('Front-End Development', 'WEB'),
            ('Computer-Aided Design (CAD)', 'TOOL'), ('Object-Oriented Programming (OOP)', 'TOOL'), 
            ('MySQL', 'TOOL'), ('Engineering', 'TOOL')
        ]
        
        skills_map = {}
        for name, category in skills_data:
            skill = Skill.objects.create(name=name, category=category, proficiency=85)
            skills_map[name] = skill

        self.stdout.write('Seeding Experience...')
        Experience.objects.create(
            role='Artificial Intelligence Intern',
            company='LaunchED Global',
            start_date='2025-05-01',
            end_date='2025-07-01',
            description='Completed internship focusing on AI and Python.',
            is_current=False
        )
        Experience.objects.create(
            role='Internship',
            company='Gram Seva Trust',
            start_date='2025-05-01',
            end_date='2025-07-01',
            description='CSSI Internship participation.',
            is_current=False
        )
        Experience.objects.create(
            role='BTech Student',
            company='Pandit Deendayal Energy University',
            start_date='2024-06-01',
            description='Bachelor of Technology in Computer Engineering.',
            is_current=True
        )

        self.stdout.write('Seeding Projects...')
        p1 = Project.objects.create(
            title='Dxcode Portfolio',
            description='A personal portfolio website built with React and Django featuring a premium dark mode design.',
            github_link='https://github.com/daxpatel/dxcode',
            demo_link='https://dxcode.demo'
        )
        if 'React' in skills_map: p1.skills.add(skills_map['React']) # Not in list, creating manually if needed, but I'll skip for now or add to list
        if 'Tailwind CSS' in skills_map: p1.skills.add(skills_map['Tailwind CSS'])
        if 'Python' in skills_map: p1.skills.add(skills_map['Python'])

        self.stdout.write(self.style.SUCCESS('Successfully seeded database!'))
